import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-base px-4 py-4 text-body-md-semibold grid grid-cols-[auto_1fr] gap-x-3 items-center [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-bg-surface text-fg-main border border-border",
        destructive:
          "border-border-critical/50 text-fg-critical dark:border-border-critical text-fg-critical",
        success: "bg-bg-success-subtle text-fg-success-strong",
        warning: "bg-bg-warning-subtle text-fg-warning-strong",
        critical: "bg-bg-critical-subtle text-fg-critical-strong",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  title,
  description,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants> & {
  title?: string
  description?: string
}) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
