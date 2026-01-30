import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/igreen/Icon"
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

const iconWrapperVariants = cva(
  "flex size-9 items-center justify-center rounded-[var(--radius-sm)] shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bg-surface",
        destructive: "bg-bg-critical",
        success: "bg-bg-success",
        warning: "bg-bg-warning",
        critical: "bg-bg-critical",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface AlertAttributes extends VariantProps<typeof alertVariants> {
  icon?: React.ReactNode | string
  title?: React.ReactNode
  description?: React.ReactNode
}

function Alert({
  className,
  variant,
  title,
  description,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> & AlertAttributes) {
  // Determine if we should render in convenience mode
  const hasConvenienceProps = title || description || icon;

  // Function to render the icon
  const renderIcon = () => {
    if (!hasConvenienceProps && !icon) return null; // Don't render icon if just using children (legacy) usually

    // If icon is manually passed
    if (icon) {
      if (typeof icon === "string") {
        return (
          <div data-slot="icon-wrapper" className={cn(iconWrapperVariants({ variant }))}>
            <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} className="size-[18px] text-static-white" />
          </div>
        )
      }
      return (
        <div data-slot="icon-wrapper" className={cn(iconWrapperVariants({ variant }))}>
          {icon}
        </div>
      )
    }

    // Default icon logic based on variant
    let defaultIconName: React.ComponentProps<typeof Icon>["name"] | null = null;

    if (variant === "warning" || variant === "critical" || variant === "destructive") {
      defaultIconName = "fill-alert";
    } else if (variant === "success") {
      defaultIconName = "fill-check-circle"; // Using fill-check-circle as standard success icon
    }

    if (defaultIconName) {
      return (
        <div data-slot="icon-wrapper" className={cn(iconWrapperVariants({ variant }))}>
          <Icon name={defaultIconName} className="size-[18px] text-static-white" />
        </div>
      )
    }

    return null;
  }

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {renderIcon()}
      {children}
      {/* If children are present, they are rendered above. If convenience props are used, render them here. */}
      {(!children && hasConvenienceProps) && (
        <>
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
        </>
      )}
      {/* If mixing children AND convenience, title/desc go after icon but before children? 
          Actually standard Alert puts children in specific grid area. 
          Let's try to just append them if convenience props are present. 
          Standard Alert children are usually title+desc components.
      */}
      {(children && hasConvenienceProps) && (
        <>
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
        </>
      )}
    </div>
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
