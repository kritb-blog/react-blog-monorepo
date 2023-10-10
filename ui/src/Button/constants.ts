export enum ButtonVariants {
  Outlined = 'outlined',
  Solid = 'solid',
}

export const VariantClass: Record<ButtonVariants, string> = {
  [ButtonVariants.Outlined]: 'border-2 border-meteorite-700 hover:text-white hover:bg-meteorite-500',
  [ButtonVariants.Solid]: 'border-2 border-meteorite-700 text-white bg-meteorite-500 hover:bg-meteorite-700',
}
