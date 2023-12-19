import { Tab } from "../../../components";
import { PersonalForm } from "../../../components";
const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10">
      <div className="pt-24 flex gap-3">
        <Tab hovered={true} number={1} />
        <Tab hovered={false} number={2} />
      </div>
      <div className="mt-5">
        <div
          color="gray"
          className="mt-1 font-bold text-xl flex w-full justify-center font-mono text-black"
          // placeholder={undefined}
        >
          Personal information
        </div>
      </div>

      <PersonalForm />
    </div>
  );
};

export default page;
