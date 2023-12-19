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
import { useRouter } from 'next/navigation'
export const PersonalForm = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/financialinfo')
    }
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
            />
          </div>

          <Input
            size="lg"
            label="Date of birth"
            crossOrigin={undefined}
            type="date"
          />
          <Input
            size="lg"
            label="Current address"
            crossOrigin={undefined}
            type="number"
          />
          <Input
            size="lg"
            label="How long have you lived at this adress ?"
            crossOrigin={undefined}
            type="text"
          />
          <div className="w-full">
            <Textarea placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)" />
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
        <Button className="mt-6 bg-[#0074fe]" fullWidth placeholder={undefined} onClick={handleClick}>
          <Typography className="font-bold text-sm " placeholder={undefined}>
            S<span className="lowercase">ave and continue</span>
          </Typography>
        </Button>
      </form>
    </Card>
  );
};
