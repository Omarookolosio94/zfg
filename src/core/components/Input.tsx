import React, { useState, forwardRef, InputHTMLAttributes } from "react";
import { cx, numbersOnly } from "../helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  boxClassName?: string;
  isRequired?: boolean;
  instruction?: string;
  error?: string;
  type?: string;
  dataList?: SelectOptions[];
  label?: string;
  isNumberOnly?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    type = "text",
    boxClassName = "",
    label = "",
    instruction = "",
    isRequired = false,
    dataList = [],
    error = "",
    isNumberOnly = false,
    children = <></>,
    ...rest
  },
  ref,
) {
  const [inputType, setInputType] = useState(type);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isNumberOnly) {
      numbersOnly(event);
    }
  };

  return (
    <fieldset className={cx("mb-3", boxClassName)}>
      {label && label?.length > 0 && (
        <label htmlFor={rest?.id} className="mb-1 text-sm">
          {label} {isRequired && <span className="text-red-800">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          autoComplete="on"
          aria-autocomplete="none"
          onKeyDown={handleKeyDown}
          {...rest}
          className={cx(
            "rounded-2 h-[60px] text-black w-full border bg-transparent px-3 text-sm outline-none placeholder:text-sm placeholder-shown:font-thin placeholder-shown:text-neutral-600 focus:border-blue-900 disabled:cursor-not-allowed",
            rest.className!,
          )}
        />

        {type === "password" && (
          <div className="absolute right-3 top-[22%] hover:cursor-pointer">
            {inputType === "password" ? (
              <button
                type="button"
                className="h-[20px] w-[60px] rounded-[2px] bg-blue-400 text-[12px] text-white hover:bg-blue-600"
                onClick={() => setInputType("text")}
              >
                Show
              </button>
            ) : (
              <button
                type="button"
                className="h-[20px] w-[60px] rounded-[2px] bg-blue-400 text-[12px] text-white hover:bg-blue-600"
                onClick={() => setInputType("password")}
              >
                Hide
              </button>
            )}
          </div>
        )}
      </div>

      {dataList?.length > 0 && (
        <datalist id={rest?.list}>
          {dataList.map((data) => (
            <option key={data?.value} value={data?.value}>
              {data?.name}
            </option>
          ))}
        </datalist>
      )}

      {children}

      {instruction && (
        <>
          <span className="text-black-light mb-1 text-[12px] leading-none">
            {instruction}
          </span>{" "}
          <br />
        </>
      )}

      <div className="h-3 mt-1 flex items-center">
        {error && (
          <>
            <span className="mi--circle-warning iconify h-3 text-red-500"></span>
            <span className="text-xs leading-none text-red-500">{error}</span>
          </>
        )}
      </div>
    </fieldset>
  );
});

export default Input;
