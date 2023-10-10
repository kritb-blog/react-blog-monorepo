import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { ButtonVariants, VariantClass } from './constants';

interface Props {
  variant: ButtonVariants;
}

export const Button: FC<PropsWithChildren<Props>> = ({ variant, children }) => {
  return (
    <span
      className={clsx(
        'p-2 rounded-md cursor-pointer select-none',
        VariantClass[variant]
      )}
    >
      {children}
    </span>
  );
};
