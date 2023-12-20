"use client";
/**
 * CustomUrlInput component for generating and copying custom URLs.
 * @module Components
 * @exports CustomUrlInput - The CustomUrlInput React component.
 */

import { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { message } from "antd";

/**
 * React component for generating and copying custom URLs.
 * @function CustomUrlInput
 * @returns {JSX.Element} The JSX representation of the component.
 */
export function CustomUrlInput(): JSX.Element {
  // Retrieve params from the current route
  const params = useParams();
  // Retrieve the domain from environment variables
  const domain = process.env.NEXT_PUBLIC_DOMAIN!;
  // State to manage the 'id' value
  const [id, setId] = useState<string>("");

  // Effect to update 'id' when params change
  useEffect(() => {
    if (params && params.id) {
      // Use the first element if 'id' is an array
      setId(Array.isArray(params.id) ? params.id[0] : params.id);
    }
  }, [params]);

  // Handler function to copy URL to clipboard
  const handleCopyToClipboard = async () => {
    try {
      // Attempt to copy URL to clipboard
      await navigator.clipboard.writeText(`${domain}/savedinfo/${id}`);
      // Display success message
      message.success("Copied to clipboard!");
    } catch (error) {
      // Log and display error if copying fails
      console.error("Error copying to clipboard:", error);
      message.error("Failed to copy to clipboard");
    }
  };

  // JSX representation of the component
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Your custom URL"
        value={domain ? `${domain}/savedinfo/${id}` : ""}
        disabled={true}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
        crossOrigin={undefined}
      />
      <Button
        size="sm"
        color={id ? "gray" : "blue-gray"}
        disabled={id === ""}
        className="!absolute right-1 top-1 rounded"
        onClick={handleCopyToClipboard}
        placeholder={undefined}
      >
        Copy
      </Button>
    </div>
  );
}
