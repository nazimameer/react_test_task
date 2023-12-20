"use client";
import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select,
} from "@material-tailwind/react";
import axios from "axios";
import { useFormValidation } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  setSavings,
  selectUser,
} from "../provider/slices/userSlice";
import { useRouter } from "next/navigation";
import { message } from "antd";
export const FinancialForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleStatusChange = (value: string | undefined) => {
    if (value) {
      dispatch(setStatus(value));
    }
  };

  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSavings(parseInt(e.target.value)));
  };

  const handleSubmit = async () => {
    if (!user.status || !user.savings) {
      // Display an error message or handle validation error in your preferred way
      return message.error("Please fill in all the required fields.");
    }

    const valid = useFormValidation(user);

    if (!valid.success) {
      router.push(`${valid.route}`);
      message.error(`${valid.msg}`);
      return;
    }

    try {
      const resposne = await axios.post("/api/user/new", user);
      message.success(resposne.data.message);
      router.push(`/url/${resposne.data._id}`);
    } catch (error: any) {
      const errorMessage = error.response.data.error;
      message.error(errorMessage);
      console.log(error);
    }
  };

  return (
    <Card color="transparent" shadow={false} placeholder={undefined}>
      <Typography
        color="gray"
        className="mt-1 font-medium text-sm flex w-full justify-center font-mono"
        placeholder={undefined}
      >
        All your information is stored securely.
      </Typography>
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Select
            label="What is your current employment status?"
            placeholder={undefined}
            value={user.status}
            onChange={handleStatusChange}
          >
            <Option value="Employed">Employed</Option>
            <Option value="Unemployed">Unemployed</Option>
            <Option value="Self-employed">Self-employed</Option>
            <Option value="Student">Student</Option>
            <Option value="Homemaker">Homemaker</Option>
          </Select>

          <Input
            size="lg"
            label="Additional savings / investments"
            crossOrigin={undefined}
            type="number"
            value={user.savings || ""}
            onChange={handleSavingsChange}
          />
        </div>

        <Button
          className="mt-6 bg-[#0074fe]"
          fullWidth
          placeholder={undefined}
          onClick={handleSubmit}
        >
          <Typography className="font-bold text-sm " placeholder={undefined}>
            S<span className="lowercase">ave and continue</span>
          </Typography>
        </Button>
      </div>
    </Card>
  );
};
