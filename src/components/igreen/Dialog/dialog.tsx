"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/shadcn/dialog";
import { Button } from "@/components/shadcn/button";

import { DialogProps } from "./dialog.types";
import { dialogStyles } from "./dialog.styles";

/**
 * Botão de fechar customizado reutilizável
 */
const CustomCloseButton = ({ onClick }: { onClick?: () => void }) => {
    const commonProps = {
        className: dialogStyles.closeButton.base,
        "data-igreen-close": "true",
        children: <X />
    };

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                aria-label="Close"
                {...commonProps}
            />
        );
    }

    return (
        <DialogPrimitive.Close {...commonProps}>
            {commonProps.children}
            <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
    );
};

/**
 * Componente Dialog personalizado do iGreen
 * Wrapper sobre o Dialog do Shadcn/Radix com estilos e comportamentos específicos.
 */
export const DialogComponent: React.FC<DialogProps> = ({
    title,
    description,
    icon,
    children,
    onCloseButton = true,
    onCancel,
    cancelText = "Cancelar",
    onConfirm,
    confirmText = "Confirmar",
    loading = false,
    className,
    width,
    ...props
}) => {

    // Helper para renderizar botões de footer
    const renderFooterButton = (
        action: boolean | (() => void) | undefined,
        text: string,
        variant: "default" | "soft",
        color?: "secondary",
        isClose?: boolean
    ) => {
        if (!action) return null;

        const btnProps = {
            variant,
            color,
            className: dialogStyles.actionButton,
            type: "button" as const,
            disabled: loading && variant !== "soft" // Disable confirm on loading
        };

        const content = loading && variant !== "soft" ? "Carregando..." : text;

        if (action === true) {
            // Se for apenas true, e é "cancel" (isClose), wrap em DialogPrimitive.Close
            if (isClose) {
                return (
                    <DialogPrimitive.Close asChild>
                        <Button {...btnProps}>{content}</Button>
                    </DialogPrimitive.Close>
                );
            }
            // Se for confirm (não close) e true, apenas botão (raro)
            return <Button {...btnProps}>{content}</Button>;
        }

        // Se for função
        return (
            <Button {...btnProps} onClick={action}>
                {content}
            </Button>
        );
    };

    return (
        <Dialog {...props}>
            <DialogContent
                className={cn(
                    dialogStyles.content.base,
                    dialogStyles.hideDefaultClose,
                    className
                )}
                style={width ? { maxWidth: width } : undefined}
            >
                {/* Close Button Logic */}
                {onCloseButton !== false && (
                    <CustomCloseButton
                        onClick={typeof onCloseButton === "function" ? onCloseButton : undefined}
                    />
                )}

                <DialogHeader className={dialogStyles.header.container}>
                    {icon && (
                        <div className={dialogStyles.icon.wrapper}>
                            <div className={dialogStyles.icon.inner}>
                                {icon}
                            </div>
                        </div>
                    )}

                    <div className={dialogStyles.header.textContainer}>
                        {title && (
                            <DialogTitle className={dialogStyles.header.title}>
                                {title}
                            </DialogTitle>
                        )}
                        {description && (
                            <DialogDescription className={dialogStyles.header.description}>
                                {description}
                            </DialogDescription>
                        )}
                    </div>
                </DialogHeader>

                <div className={dialogStyles.contentWrapper}>
                    {children}
                </div>

                {(onCancel || onConfirm) && (
                    <DialogFooter className={dialogStyles.footer.base}>
                        {renderFooterButton(onCancel, cancelText, "default", "secondary", true)}
                        {renderFooterButton(onConfirm, confirmText, "default", undefined, false)}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
};
