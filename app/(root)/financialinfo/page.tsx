import { Tab } from "../../../components";
import { FinancialForm } from "../../../components";
const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10">
      <div className="pt-24 flex gap-3">
        <Tab hovered={false} number={1} route="/personalinfo"/>
        <Tab hovered={true} number={2} route="/financialinfo"/>
      </div>
      <div className="mt-5">
        <div
          color="gray"
          className="mt-1 font-bold text-xl flex w-full justify-center font-mono text-black"
          // placeholder={undefined}
        >
          Financial information
        </div>
      </div>

      <FinancialForm />
    </div>
  );
};

export default page;