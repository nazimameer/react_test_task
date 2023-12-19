"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Iicon } from '../assets'
export const RegForm = () => {
  return (
    <Card color="transparent" shadow={false} placeholder={undefined} className="mt-10">
      <Typography variant="h4" color="blue-gray" placeholder={undefined} className="flex w-full justify-center font-mono font-bold">
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
          />
          <Input
            size="lg"
            label="Mobile number"
            crossOrigin={undefined}
            type="number"
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
            type="text"
          />
           <Input
            size="lg"
            label="Confirm your password"
            crossOrigin={undefined}
            type="text"
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
              We need a password to keep your information safe. But don't worry, we'll also send your custom RenltyPass URL via email.
            </Typography>
        </div>
        <Button className="mt-6 bg-[#0074fe]" fullWidth placeholder={undefined}>
            <Typography className="font-bold text-sm " placeholder={undefined}>

        Create your account
            </Typography>
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-xs font-medium text-gray-500"
          placeholder={undefined}
        >
          By clicking 'Create your account', you are agreeing to our <u className="cursor-pointer">Terms & Conditions</u> and <u className="cursor-pointer">Privacy Policy</u>
          
        </Typography>
      </form>
    </Card>
  );
};