'use client';
import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';
type InputComponentProps = {
  placeholderProps?: string;
  labelChildren?: string;
  className?: string;
  color?: string;
  hint?: string;
  variant?: 'default' | 'outlined';
  type?: React.HTMLInputTypeAttribute;
  rest?: InputHTMLAttributes<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};
interface HintComponentProps {
  children?: string | React.ReactNode;
  className?: React.ReactNode;
}

export const HintComponentInput = ({
  children,
  className,
}: HintComponentProps) => {
  return (
    <>
      <p className={clsx(className)}>{children}</p>
    </>
  );
};

const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  (
    {
      placeholderProps,
      color,
      labelChildren,
      className,
      variant,
      type,
      onChange,
      children,
      ...rest
    },
    ref,
  ) => {
    const variantValue = () => {
      switch (variant) {
        case 'default':
          return `${color ? color : 'bg-[#00dbe0]'} rounded-lg`;
        case 'outlined':
          return 'bg-transparent border rounded-lg';
      }
    };

    return (
      <>
        <div>
          <label className="mb-3 mt-7 text-left text-[14px] text-white">
            {labelChildren}
            <input
              onChange={onChange}
              ref={ref}
              {...rest}
              type={type}
              className={clsx(
                `my-2 flex h-8 w-60 text-center text-base text-white outline-none`,
                variantValue(),
                className,
              )}
              style={{
                backgroundColor: variantValue(),
              }}
              placeholder={placeholderProps}
            />
            {children}
          </label>
        </div>
      </>
    );
  },
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
