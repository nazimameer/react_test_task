"use client";
import { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { message } from "antd";
export function CustomUrlInput() {
  const params = useParams();
  const domain = process.env.NEXT_PUBLIC_DOMAIN!;
  const [id, setId] = useState<string>("");
  useEffect(() => {
    if (params && params.id) {
      if (Array.isArray(params.id)) {
        // Use the first element if it's an array
        setId(params.id[0]);
      } else {
        setId(params.id);
      }
    }
  }, [params]);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${domain}/savedinfo/${id}`);
      message.success("Copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      message.error("Failed to copy to clipboard");
    }
  };
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="your custom url"
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
