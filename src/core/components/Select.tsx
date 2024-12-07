import React, { forwardRef, SelectHTMLAttributes } from "react";
import { cx } from "../helpers";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  options?: SelectOptions[];
  label?: string;
  boxClassName?: string;
  defaultName?: string;
  defaultValue?: string | number | any;
  isRequired?: boolean;
  instruction?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  {
    boxClassName = "",
    label = "",
    instruction = "",
    isRequired = false,
    options = [],
    defaultName = "Select an option",
    defaultValue = "",
    error = "",
    ...rest
  },
  ref,
) {
  return (
    <fieldset className={cx("mb-3", boxClassName)}>
      {label && label?.length > 0 && (
        <label htmlFor={rest?.id} className="mb-1 text-xs font-medium">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        ref={ref}
        autoComplete="none"
        {...rest}
        className={cx(
          "rounded-2 h-[42px] w-full border bg-transparent px-3 text-sm outline-none placeholder:text-sm placeholder-shown:font-thin placeholder-shown:text-neutral-600 focus:border-blue-800 disabled:cursor-not-allowed",
          rest.className!,
        )}
      >
        {defaultName?.length > 1 && (
          <option key={defaultValue} value={defaultValue}>
            {defaultName}
          </option>
        )}

        {options &&
          options?.length > 0 &&
          options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>

      {instruction && (
        <>
          <span className="text-black-light mb-1 text-xs leading-none">
            {instruction}
          </span>{" "}
          <br />
        </>
      )}

      <div className="mt-1 flex h-3 items-center">
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

export default Select;
