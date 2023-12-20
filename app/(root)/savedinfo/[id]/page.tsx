import React from "react";
import { SavedInfoForm } from "@/components";

/**
 * SavedInfo Component
 * This page displays the saved information form.
 */
const SavedInfo = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-24">
      {/* Page Title */}
      <h1 className="text-xl font-bold">Your Saved Data</h1>

      {/* Saved Information Form */}
      <SavedInfoForm />
    </div>
  );
};

export default SavedInfo;
