"use client";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Image from "next/image";
import { Iicon } from "../assets";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import {
  setFullName,
  setDateOfBirth,
  setCurrentAddress,
  setHowLong,
  setAbout,
  selectUser,
} from "../provider/slices/userSlice";

export const PersonalForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const router = useRouter();
  const handleClick = () => {
    router.push("/financialinfo");
  };


  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFullName(e.target.value));
  };

  const handleDateofBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDateOfBirth(e.target.value));
  };

  const hanleCurrentAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentAddress(e.target.value));
  };

  const handleHowLongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHowLong(e.target.value));
  };

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setAbout(e.target.value));
  };
  return (
    <Card color="transparent" shadow={false} placeholder={undefined}>
      <Typography
        color="gray"
        className="mt-1 font-medium text-sm flex w-full justify-center font-mono"
        placeholder={undefined}
      >
        Please answer questions as accurately as possible.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <div className="w-full flex gap-3">
            <select className="select select-bordered w-[60px]  flex items-center justify-center h-[43px] border-solid border-2 border-gray-500 rounded max-w-xs">
              <option disabled selected>
                Mr
              </option>
              <option>Mr</option>
              <option>Mrs</option>
            </select>

            <Input
              size="lg"
              label="Full name as per your passport"
              crossOrigin={undefined}
              type="text"
              value={user.fullName}
              onChange={handleFullnameChange}
            />
          </div>

          <Input
            size="lg"
            label="Date of birth"
            crossOrigin={undefined}
            type="date"
            value={user.dateOfBirth}
            onChange={handleDateofBirthChange}
          />
          <Input
            size="lg"
            label="Current address"
            crossOrigin={undefined}
            type="text"
            value={user.currentAddress}
            onChange={hanleCurrentAddressChange}
          />
          <Input
            size="lg"
            label="How long have you lived at this adress ?"
            crossOrigin={undefined}
            type="text"
            value={user.howLong}
            onChange={handleHowLongChange}
          />
          <div className="w-full">
            <Textarea
              placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
              value={user.about}
              onChange={handleAboutChange}
            />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="flex justify-center">
            <Image src={Iicon} alt="Iicon" className="w-3 object-contain" />
          </div>
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-medium text-xs text-gray-500"
            placeholder={undefined}
          >
            All information can be edited once you have created your account.
          </Typography>
        </div>
        <Button
          className="mt-6 bg-[#0074fe]"
          fullWidth
          placeholder={undefined}
          onClick={handleClick}
        >
          <Typography className="font-bold text-sm " placeholder={undefined}>
            S<span className="lowercase">ave and continue</span>
          </Typography>
        </Button>
      </form>
    </Card>
  );
};
