"use client";

import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}
const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    // <>
    //   {label ? label : null}
    //   <Controller
    //     control={control}
    //     name={name}
    //     render={({ field }) =>
    //       type === "password" ? (
    //         <Input.Password
    //           type={type}
    //           size={size}
    //           placeholder={placeholder}
    //           {...field}
    //           value={value ? value : field.value}
    //         />
    //       ) : (
    //         <Input
    //           type={type}
    //           size={size}
    //           placeholder={placeholder}
    //           {...field}
    //           value={value ? value : field.value}
    //         />
    //       )
    //     }
    //   />
    // </>
    <div>
      <div className="mb-4">
        {label ? <label className="text-gray-600">{label}</label> : null}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <div className="relative">
              {type === "password" ? (
                <input
                  type={type}
                  className={`w-full pr-12 px-3 py-2 border rounded ${
                    size === "large" ? "text-lg" : "text-sm"
                  }`}
                  placeholder={placeholder}
                  {...field}
                  value={value ? value : field.value}
                />
              ) : (
                <input
                  type={type}
                  className={`w-full pr-12 px-3 py-2 border rounded ${
                    size === "large" ? "text-lg" : "text-sm"
                  }`}
                  placeholder={placeholder}
                  {...field}
                  value={value ? value : field.value}
                />
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
