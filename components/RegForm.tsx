"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Iicon } from "../assets";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  setEmail,
  setMobileNumber,
  setPassword,
  setConfirmPassword,
} from "../provider/slices/userSlice";

export const RegForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const router = useRouter();
  const handleClick = () => {
    // Validate email
    const email = user.email;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) return message.error("Email is required");
    if (!emailRegex.test(email)) return message.error("Invalid email address");

    // Validate mobile number
    const mobileNumber = user.mobileNumber;
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumber) return message.error("MobileNumber is required");
    if (!mobileNumberRegex.test(mobileNumber.toString()))
      return message.error("Mobile number should be 10 digits");

    // Validate password
    const password = user.password;
    if (!password) return message.error("Password is required");
    if (!/[A-Z]/.test(password))
      return message.error(
        "Password must contain at least one uppercase letter."
      );

    // // Check for at least one digit (number)
    if (!/\d/.test(password))
      return message.error("Password must contain at least one number.");

    // // Check for a minimum length of 6 characters
    if (password.length < 6)
      return message.error("Password must be at least 6 characters long.");

    //  Validate confirm password
    const confirmPassword = user.confirmPassword;
    if (!confirmPassword) return message.error("Confirm password is required");
    if (password !== confirmPassword)
      return message.error("Password and Confirm Password must match.");

    router.push("/personalinfo");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMobileNumber(parseInt(e.target.value)));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setConfirmPassword(e.target.value));
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder={undefined}
      className="mt-10"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        placeholder={undefined}
        className="flex w-full justify-center font-mono font-bold"
      >
        Create your account
      </Typography>
      <Typography
        color="gray"
        className="mt-1 font-medium text-sm flex w-full justify-center font-mono"
        placeholder={undefined}
      >
        Set-up your RentlyPass in as little as 2 minutes.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-semibold text-gray-700 text-sm"
            placeholder={undefined}
          >
            Contact details
          </Typography>
          <Input
            size="lg"
            label="Email address"
            crossOrigin={undefined}
            type="text"
            value={user.email}
            onChange={handleEmailChange}
          />
          <Input
            size="lg"
            label="Mobile number"
            crossOrigin={undefined}
            type="number"
            value={user.mobileNumber || ""}
            onChange={handleMobileChange}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-semibold text-gray-700 text-sm"
            placeholder={undefined}
          >
            Set password
          </Typography>
          <Input
            size="lg"
            label="Create a password"
            crossOrigin={undefined}
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
          <Input
            size="lg"
            label="Confirm your password"
            crossOrigin={undefined}
            type="password"
            value={user.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="flex w-full gap-2">
          <div className="flex justify-center">
            <Image src={Iicon} alt="Iicon" className="w-6 object-contain" />
          </div>
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-medium text-xs mt-4 text-gray-500"
            placeholder={undefined}
          >
            We need a password to keep your information safe. But don't worry,
            we'll also send your custom RenltyPass URL via email.
          </Typography>
        </div>
        <Button
          className="mt-6 bg-[#0074fe]"
          fullWidth
          placeholder={undefined}
          onClick={handleClick}
        >
          <Typography className="font-bold text-sm " placeholder={undefined}>
            Create your account
          </Typography>
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-xs font-medium text-gray-500"
          placeholder={undefined}
        >
          By clicking 'Create your account', you are agreeing to our{" "}
          <u className="cursor-pointer">Terms & Conditions</u> and{" "}
          <u className="cursor-pointer">Privacy Policy</u>
        </Typography>
      </form>
    </Card>
  );
};
