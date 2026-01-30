import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
    error?: boolean
    warning?: boolean
}

const inputVariants = cva(
    "flex w-full border bg-bg-surface px-4 text-body-lg-medium text-fg-strong transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-fg-subtle focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            status: {
                default: "border-border shadow-shadows-boxshadow-sm focus-visible:border-border-primary focus-visible:ring-base focus-visible:ring-ring-primary",
                error: "border-border-critical shadow-shadows-boxshadow-sm focus-visible:border-border-critical focus-visible:ring-base focus-visible:ring-ring-critical",
                warning: "border-border-warning shadow-shadows-boxshadow-sm focus-visible:border-border-warning focus-visible:ring-base focus-visible:ring-ring-warning",
            },
            size: {
                default: "h-form-lg rounded-base",
                md: "h-form-md rounded-base",
                sm: "h-form-sm rounded-base",
            }
        },
        defaultVariants: {
            status: "default",
            size: "default",
        },
    }
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, status, size, error, warning, ...props }, ref) => {

        // Map legacy boolean props to status variant
        const computedStatus = error ? "error" : warning ? "warning" : status;

        return (
            <input
                type={type}
                className={cn(inputVariants({ status: computedStatus, size, className }))}
                ref={ref}
                data-status={computedStatus}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
