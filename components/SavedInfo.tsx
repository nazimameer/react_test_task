/**
 * SavedInfoForm component to display saved user information.
 * @module Components
 * @exports SavedInfoForm - The SavedInfoForm React component.
 */

import React, { useEffect, useState } from "react";
import { Card, Input, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import axios from "axios";
import { message } from "antd";

/**
 * Interface for the user data.
 * @interface
 */
interface UserData {
  _id: string;
  email: string;
  mobileNumber: number;
  pronouns: string;
  fullName: string;
  dateOfBirth: string;
  currentAddress: string;
  howLong: string;
  about: string;
  status: string;
  savings: number;
}

/**
 * React component to display saved user information.
 * @function SavedInfoForm
 * @returns {JSX.Element} The JSX representation of the component.
 */
export const SavedInfoForm: React.FC = (): JSX.Element => {
  const [data, setData] = useState<UserData | null>(null);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      if (params && params.id) {
        try {
          const response = await axios.get(`/api/user/${params.id}`);
          console.log(response.data.user);

          setData(response.data.user);
        } catch (error: any) {
          const errorMessage = error.response.data.error;
          message.error(errorMessage);
          console.log(error);
        }
      }
    }

    if (params && params) {
      fetchData();
    }
  }, [params]);

  return (
    <Card
      className="flex flex-row w-full justify-center gap-5"
      color="transparent"
      shadow={false}
      placeholder={undefined}
    >
      {/* Left Section */}
      <div>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            {/* Email */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Email
            </Typography>
            <Input
              disabled
              value={data && data.email ? data.email : ""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Mobile Number */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Mobile Number
            </Typography>
            <Input
              disabled
              value={data && data.mobileNumber ? data.mobileNumber : ""}
              size="lg"
              placeholder="mobile number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Pronouns */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Pronouns
            </Typography>
            <Input
              disabled
              value={data && data.pronouns ? data.pronouns : ""}
              type="text"
              size="lg"
              placeholder="Mr / Mrs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Employment status */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Employment status
            </Typography>
            <Input
              disabled
              value={data && data.status ? data.status : ""}
              type="text"
              size="lg"
              placeholder="Mr / Mrs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* About yourself */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              About yourself
            </Typography>
            <Input
              disabled
              value={data && data.about ? data.about : ""}
              type="text"
              size="lg"
              placeholder="Mr / Mrs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            {/* Full Name */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Full Name
            </Typography>
            <Input
              disabled
              value={data && data.fullName ? data.fullName : ""}
              size="lg"
              placeholder="full name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Date of Birth */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Date of Birth
            </Typography>
            <Input
              disabled
              value={data && data.dateOfBirth ? data.dateOfBirth : ""}
              size="lg"
              placeholder="date of birth"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Current Address */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Current Address
            </Typography>
            <Input
              disabled
              value={data && data.currentAddress ? data.currentAddress : ""}
              type="text"
              size="lg"
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* How long lived at current address */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              You lived on current address
            </Typography>
            <Input
              disabled
              value={data && data.howLong ? data.howLong : ""}
              type="text"
              size="lg"
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />

            {/* Savings / Investments */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
            >
              Savings / Investments
            </Typography>
            <Input
              disabled
              value={data && data.savings ? data.savings : ""}
              type="text"
              size="lg"
              placeholder="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
