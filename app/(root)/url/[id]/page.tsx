import { CustomUrlInput } from "@/components";

/**
 * CustomUrl Component
 * This page displays the CustomUrlInput component.
 */
const CustomUrl = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-48">
      <div className="my-3 flex flex-col">
        <h1 className="text-2xl  font-bold">Your custom URL</h1>
        <p className="text-gray-500">copy it and paste on new tab</p>
      </div>

      {/* Custom URL Input Component */}
      <CustomUrlInput />
    </div>
  );
};

export default CustomUrl;
