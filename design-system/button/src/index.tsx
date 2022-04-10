import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

const styles = {
  appearance: {
    disabled: 'bg-gray-50 text-gray-400',
    default: 'bg-gray-100 text-gray-800 focus:bg-gray-200 hover:bg-gray-200',
    primary:
      'bg-primary-base text-inverted focus:bg-primary-400 hover:bg-primary-400',
    secondary:
      'bg-secondary-base text-inverted focus:bg-secondary-400 hover:bg-secondary-400',
  },
  base: 'font-medium rounded-sm px-5 py-2 inline-flex items-center justify-center',
} as const;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: keyof typeof styles.appearance;
};

export const Button = ({
  appearance,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const composed = cx([
    styles.base,
    styles.appearance[disabled ? 'disabled' : appearance || 'default'],
    className,
  ]);
  return <button className={composed} disabled={disabled} {...props} />;
};
