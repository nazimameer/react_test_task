'use client'
import { Card, Input, Button, Typography, Option, Select } from "@material-tailwind/react";
export const FinancialForm = () => {
  return (
    <Card color="transparent" shadow={false} placeholder={undefined}>
    <Typography
      color="gray"
      className="mt-1 font-medium text-sm flex w-full justify-center font-mono"
      placeholder={undefined}
    >
      All your information is stored securely.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
      <Select label="What is your current employment status?" placeholder={undefined}>
        <Option>Employed</Option>
        <Option>Unemployed</Option>
        <Option>Self-employed</Option>
        <Option>Student</Option>
        <Option>Homemaker</Option>
      </Select>

        <Input
          size="lg"
          label="Additional savings / investments"
          crossOrigin={undefined}
          type="number"
        />
 
      </div>
      
      <Button className="mt-6 bg-[#0074fe]" fullWidth placeholder={undefined}>
        <Typography className="font-bold text-sm " placeholder={undefined}>
          S<span className="lowercase">ave and continue</span>
        </Typography>
      </Button>

    </form>
  </Card>
  )
}
