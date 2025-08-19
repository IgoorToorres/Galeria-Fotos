import type React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";

export const inputCheckboxWrapperVariants = tv({
    base: "inline-flex items-center justify-center relative group"
});

export const inputCheckBoxVariants = tv({
    base: `
    appearance-none peer cursor-pointer transition overflow-hidden
    outline-none
  `,
    variants: {
        variant: {
            default: `
        border-2 border-solid
        border-border-primary hover:border-border-active
        checked:border-accent-brand checked:bg-accent-brand
        group-hover:checked:border-accent-brand-light
        group-hover:checked:bg-accent-brand-light
        focus-visible:ring-2 focus-visible:ring-accent-brand/40 focus-visible:ring-offset-2
      `
        },
        size: {
            sm: "w-3 h-3 rounded-sm",
            md: "w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none opacity-60"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        disabled: false
    }
});

export const inputCheckboxIconVariants = tv({
    base: `
    absolute top-1/2 -translate-y-1/2
    hidden peer-checked:block fill-white
    pointer-events-none
  `,
    variants: {
        size: {
            sm: "w-3 h-3 left-px",
            md: "w-4 h-4 left-0.5"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

export interface InputCheckboxProps
    extends VariantProps<typeof inputCheckBoxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputCheckbox({
    variant,
    size,
    disabled,
    className,
    ...props
}: InputCheckboxProps) {
    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input
                type="checkbox"
                disabled={disabled}
                aria-disabled={disabled}
                {...props}
                className={inputCheckBoxVariants({ variant, size, disabled })}
            />
            <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
        </label>
    );
}
