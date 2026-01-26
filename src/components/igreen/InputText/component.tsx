import React, { forwardRef } from "react";
import { Check, Mail } from "lucide-react";

import { InputTextProps } from "./component.types";
import { inputTextStyles } from "./component.styles";
import { cn } from "@/lib/utils";

// Shadcn Primitives
import { Field, FieldLabel, FieldDescription } from "@/components/shadcn/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/shadcn/input-group";
import { Spinner } from "@/components/shadcn/spinner";

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    (
        {
            label,
            helperText,
            status = "default",
            size = "md",
            startIcon,
            endIcon,
            isLoading,
            className,
            disabled,
            id,
            ...props
        },
        ref
    ) => {
        const { type } = props;

        // Determine visual state color class
        const statusColorClass = inputTextStyles.status[status];
        const iconColorClass = status !== "default" ? inputTextStyles.icon[status] : inputTextStyles.icon.base;

        // Determine helper text style
        const helperStyle = status === "default"
            ? inputTextStyles.helper.default
            : inputTextStyles.helper[status];

        // Input Group Class (Border color overrides)
        const groupStatusClass = inputTextStyles.groupStatus[status] || inputTextStyles.groupStatus.default;

        // Map size to InputGroup variants (InputGroup uses 'default' for lg)
        const inputGroupSize = size === "lg" ? "default" : size;

        // Determine Start Content
        let resolvedStartIcon = startIcon;
        if (type === "email" && startIcon === undefined) {
            resolvedStartIcon = <Mail />;
        }

        // Determine End Content
        // Priority: isLoading (Spinner) > status=completed (Check) > endIcon
        let endContent = endIcon;
        let endContentClass = iconColorClass;

        if (isLoading) {
            endContent = <Spinner />;
            endContentClass = inputTextStyles.icon.loading;
        } else if (status === "completed") {
            endContent = <Check />;
            endContentClass = inputTextStyles.icon.completed;
        }

        // Helper Text Component (Description is generic, we style it manually)
        // NOTE: We don't use FieldError component because we want custom styling for warning/completed too,
        // and FieldError forces destructive color. We use Description with custom classes.

        return (
            <Field className={cn(inputTextStyles.container, className)}>
                {label && (
                    <FieldLabel
                        htmlFor={id}
                        className={cn(inputTextStyles.label, statusColorClass)}
                    >
                        {label}
                    </FieldLabel>
                )}

                <InputGroup
                    size={inputGroupSize}
                    className={cn(inputTextStyles.group.default, groupStatusClass)}
                    data-disabled={disabled}
                >
                    {resolvedStartIcon && (
                        <InputGroupAddon className={cn(iconColorClass)}>
                            {resolvedStartIcon}
                        </InputGroupAddon>
                    )}

                    <InputGroupInput
                        id={id}
                        disabled={disabled || isLoading}
                        ref={ref}
                        className={inputTextStyles.input}
                        aria-invalid={status === "error"}
                        {...props}
                    />

                    {endContent && (
                        <InputGroupAddon align="inline-end" className={cn(endContentClass)}>
                            {endContent}
                        </InputGroupAddon>
                    )}
                </InputGroup>

                {helperText && (
                    <FieldDescription className={cn(inputTextStyles.helper.base, helperStyle)}>
                        {helperText}
                    </FieldDescription>
                )}
            </Field>
        );
    }
);

InputText.displayName = "InputText";
