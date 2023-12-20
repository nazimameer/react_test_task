import { Tab, PersonalForm } from "@/components";

/**
 * Personal Information Page Component
 * This page displays personal information and provides a tab navigation.
 */
const PersonalInfoPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10">
      {/* Tab Navigation */}
      <div className="pt-24 flex gap-3">
        {/* Personal Info Tab (Active) */}
        <Tab hovered={true} number={1} route="/personalinfo" />

        {/* Financial Info Tab (Inactive) */}
        <div>
          <Tab hovered={false} number={2} route="/financialinfo" />
        </div>
      </div>

      {/* Page Title */}
      <div className="mt-5">
        <div
          color="gray"
          className="mt-1 font-bold text-xl flex w-full justify-center font-mono text-black"
        >
          Personal information
        </div>
      </div>

      {/* Personal Information Form */}
      <PersonalForm />
    </div>
  );
};

export default PersonalInfoPage;
