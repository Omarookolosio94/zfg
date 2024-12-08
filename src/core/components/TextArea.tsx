import React, { useState, forwardRef, TextareaHTMLAttributes } from "react";
import { cx } from "../helpers";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isRequired?: boolean;
  instruction?: string;
  error?: string;
  boxClassName?: string;
  textareaClassName?: string;
  autoResize?: boolean; // For enabling auto-resizing feature
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(function TextArea(
  {
    label = "",
    isRequired = false,
    instruction = "",
    error = "",
    boxClassName = "",
    textareaClassName = "",
    autoResize = true,
    rows = 3,
    value,
    onChange,
    ...rest
  },
  ref,
) {
  const [currentValue, setCurrentValue] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
    if (onChange) onChange(event);
  };

  // Dynamically adjust the height of the textarea when autoResize is enabled
  const handleResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize && event.target) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  return (
    <fieldset className={cx("mb-3", boxClassName)}>
      {label && (
        <label htmlFor={rest.id} className="mb-1 text-sm">
          {label} {isRequired && <span className="text-red-800">*</span>}
        </label>
      )}

      <div className="relative">
        <textarea
          ref={ref}
          value={currentValue}
          rows={rows}
          onChange={(e) => {
            handleChange(e);
            handleResize(e);
          }}
          {...rest}
          className={cx(
            "h-auto w-full py-2 resize-none text-black border bg-transparent px-3 text-sm outline-none placeholder:text-sm placeholder-shown:font-thin placeholder-shown:text-neutral-600 focus:border-blue-900 disabled:cursor-not-allowed",
            textareaClassName,
          )}
        />
      </div>

      {instruction && (
        <p className="text-black-light mb-1 text-[12px] leading-none">
          {instruction}
        </p>
      )}

      <div className="mt-1 flex h-3 items-center">
        {error && (
          <>
            <span className="mi--circle-warning iconify h-3 text-red-500"></span>
            <span className="ml-1 text-xs leading-none text-red-500">
              {error}
            </span>
          </>
        )}
      </div>
    </fieldset>
  );
});

export default TextArea;
