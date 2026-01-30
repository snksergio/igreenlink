"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn/button"
import { Input, type InputProps } from "@/components/shadcn/input"
import { Textarea } from "@/components/shadcn/textarea"

const inputGroupVariants = cva(
  "group/input-group relative flex w-full items-center border bg-bg-surface shadow-shadows-boxshadow-sm transition-[color,box-shadow,border-color] outline-none min-w-0 has-[>textarea]:h-auto",
  {
    variants: {
      size: {
        default: "h-form-lg rounded-base",
        md: "h-form-md rounded-base",
        sm: "h-form-sm rounded-base",
      },
      status: {
        default: "border-border has-[[data-slot=input-group-control]:focus-visible]:border-border-primary has-[[data-slot=input-group-control]:focus-visible]:ring-base has-[[data-slot=input-group-control]:focus-visible]:ring-ring-primary",
        error: "border-border-critical has-[[data-slot=input-group-control]:focus-visible]:ring-base has-[[data-slot=input-group-control]:focus-visible]:ring-ring-critical",
        warning: "border-border-warning has-[[data-slot=input-group-control]:focus-visible]:ring-base has-[[data-slot=input-group-control]:focus-visible]:ring-ring-warning",
        success: "border-border-success has-[[data-slot=input-group-control]:focus-visible]:ring-base has-[[data-slot=input-group-control]:focus-visible]:ring-ring-success",
        completed: "border-border-success has-[[data-slot=input-group-control]:focus-visible]:ring-base has-[[data-slot=input-group-control]:focus-visible]:ring-ring-success",
      }
    },
    defaultVariants: {
      size: "default",
      status: "default"
    },
  }
)

interface InputGroupProps extends React.ComponentProps<"div">, VariantProps<typeof inputGroupVariants> { }

function InputGroup({ className, size, status, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      data-status={status}
      role="group"
      className={cn(
        inputGroupVariants({ size, status }),
        // Padding logic is handled in InputGroupInput via group-has modifiers
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-fg-muted flex h-full cursor-text items-center justify-center gap-2 px-3 text-body-sm-medium select-none [&>svg:not([class*='size-'])]:size-[18px] [&>kbd]:rounded-sm group-data-[disabled=true]/input-group:opacity-50 group-data-[status=error]/input-group:text-fg-critical group-data-[status=warning]/input-group:text-fg-warning group-data-[status=success]/input-group:text-fg-success group-data-[status=completed]/input-group:text-fg-success",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-4 has-[>button]:ml-[-0.25rem] border-0",
        "inline-end": "order-last pr-4 has-[>button]:mr-[-0.25rem] border-0",
        "block-start": "order-first w-full justify-start px-4 pt-4 border-0",
        "block-end": "order-last w-full justify-start px-4 pb-4 border-0",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center border-0 [&>svg:not([class*='size-'])]:size-[18px] bg-transparent text-fg-main hover:bg-transparent hover:text-fg-primary",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-sm",
        sm: "h-8 px-3 gap-1.5 rounded-md",
        lg: "h-full px-4 gap-2 rounded-base rounded-l-none", // For right-side button
        "lg-left": "h-full px-4 gap-2 rounded-base rounded-r-none", // For left-side button
        "icon-xs": "w-[18px] h-[18px] rounded-sm p-0",
        "icon-sm": "w-[18px] h-[18px] p-0",
        "icon-lg": "h-full w-auto px-4 rounded-none", // Icon button with proper spacing (matching addon pr-4)
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "default",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-fg-muted flex items-center gap-2 px-3 text-body-sm-medium [&_svg:not([class*='size-'])]:size-[18px] group-data-[status=error]/input-group:text-fg-critical group-data-[status=warning]/input-group:text-fg-warning group-data-[status=success]/input-group:text-fg-success group-data-[status=completed]/input-group:text-fg-success",
        className
      )}
      {...props}
    />
  )
}

// NOTE: We override Input styles to make it fit seamlessly inside the group
const InputGroupInput = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  ...props
}, ref) => {
  return (
    <Input
      ref={ref}
      data-slot="input-group-control"
      className={cn(
        // Allow input to grow but respect siblings
        // Default padding 18px
        "flex-1 w-full h-full rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-[18px]",
        "min-h-0",
        // Dynamic padding based on position
        "not-[:first-child]:pl-0", // If not first child, implied left content exists -> Reduce PL
        "not-[:last-child]:pr-0", // If not last child, implied right content exists -> Reduce PR
        className
      )}
      {...props}
    />
  )
})
InputGroupInput.displayName = "InputGroupInput"

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
