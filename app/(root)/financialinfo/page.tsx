import { Tab, FinancialForm } from "@/components";

/**
 * Financial Information Page Component
 * This page displays financial information and provides a tab navigation.
 */
const FinancialInfoPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10">
      {/* Tab Navigation */}
      <div className="pt-24 flex gap-3">
        {/* Personal Info Tab */}
        <Tab hovered={false} number={1} route="/personalinfo" />

        {/* Financial Info Tab */}
        <Tab hovered={true} number={2} route="/financialinfo" />
      </div>

      {/* Page Title */}
      <div className="mt-5">
        <div
          color="gray"
          className="mt-1 font-bold text-xl flex w-full justify-center font-mono text-black"
        >
          Financial information
        </div>
      </div>

      {/* Financial Information Form */}
      <FinancialForm />
    </div>
  );
};

export default FinancialInfoPage;
