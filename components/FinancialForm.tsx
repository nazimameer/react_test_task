"use client";
/**
 * FinancialForm component for handling financial information.
 * @module Components
 * @exports FinancialForm - The FinancialForm React component.
 */

import React from "react";
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

/**
 * React component for handling financial information.
 * @function FinancialForm
 * @returns {JSX.Element} The JSX representation of the component.
 */
export const FinancialForm: React.FC = (): JSX.Element => {
  // Retrieve router instance from Next.js
  const router = useRouter();
  // Retrieve Redux dispatch function
  const dispatch = useDispatch();
  // Retrieve user data from Redux store
  const user = useSelector(selectUser);

  // Handler function for status change
  const handleStatusChange = (value: string | undefined) => {
    if (value) {
      dispatch(setStatus(value));
    }
  };

  // Handler function for savings change
  const handleSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSavings(parseInt(e.target.value)));
  };

  // Handler function for form submission
  const handleSubmit = async () => {
    // Check if required fields are filled
    if (!user.status || !user.savings) {
      // Display an error message or handle validation error in your preferred way
      return message.error("Please fill in all the required fields.");
    }

    // Validate the form using custom hook
    const valid = useFormValidation(user);

    // Redirect to the specified route if validation fails
    if (!valid.success) {
      router.push(`${valid.route}`);
      message.error(`${valid.msg}`);
      return;
    }

    try {
      // Submit the form data to the server
      const response = await axios.post("/api/user/new", user);
      // Display success message and redirect to the generated URL
      message.success(response.data.message);
      router.push(`/url/${response.data._id}`);
    } catch (error: any) {
      // Handle and log API request errors
      const errorMessage = error.response.data.error;
      message.error(errorMessage);
      console.error(error);
    }
  };

  // JSX representation of the component
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
