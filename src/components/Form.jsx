import React from "react";
import { Input } from "@nextui-org/react";
const Form = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
    <div className="w-full h-auto my-16 bg-slate-50 rounded-lg p-5">
      <p className="text-center text-body-1 font-bold">Form</p>
      <div>
        <div className="w-full flex flex-col gap-4">
          {variants.map((variant) => (
            <div
              key={variant}
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
            >
              <Input type="email" variant={variant} label="Email" />
              <Input
                type="email"
                variant={variant}
                label="Email"
                placeholder="Enter your email"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
