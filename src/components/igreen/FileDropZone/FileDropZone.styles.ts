/**
 * Estilos do FileDropZone
 * 
 * REGRAS:
 * 1. NUNCA use valores hardcoded (text-[14px], bg-[#fff], etc.)
 * 2. SEMPRE use tokens semanticos do design system
 * 3. Organize estilos por elemento/area do componente
 */

import { FileDropZoneStatus } from "./FileDropZone.types";

export const fileDropZoneStyles = {
    // ===== CONTAINER PRINCIPAL =====
    container: {
        base: [
            // Layout
            "flex flex-col items-center justify-center",
            "gap-6",
            // Sizing (height controlled via style prop)
            "w-full",
            // Padding
            "px-4 pt-8 pb-4",
            // Border radius
            "rounded-[var(--radius-base)]",
            // Border - TODAS as variantes usam dashed
            "border border-dashed",
            // Shadow
            "shadows-boxshadow-base",
            // Transition
            "transition-all duration-300 ease-in-out",
        ].join(" "),

        // Status-based styles (hover apenas em idle)
        status: {
            idle: "bg-bg-surface border-border-moderate hover:border-border-primary",
            dragging: "bg-bg-primary-subtle border-border-primary",
            loading: "bg-bg-subtle border-moderate",
            success: "bg-bg-success-subtle border-border-success",
            error: "bg-bg-critical-subtle border-border-critical",
            warning: "bg-bg-warning-subtle border-border-warning",
        } as Record<FileDropZoneStatus, string>,
    },

    // ===== ICON BOX =====
    iconBox: {
        base: [
            "shrink-0",
            "size-[42px]",
            "rounded-[var(--radius-sm)]",
            "flex items-center justify-center",
            "overflow-hidden",
        ].join(" "),

        status: {
            idle: "bg-bg-primary text-fg-on-primary",
            dragging: "bg-bg-primary text-fg-on-primary",
            loading: "bg-bg-muted text-fg-muted",
            success: "bg-bg-success text-fg-on-success",
            error: "bg-bg-critical text-fg-on-critical",
            warning: "bg-bg-warning text-fg-on-warning",
        } as Record<FileDropZoneStatus, string>,

        icon: "size-6",
        spinner: "animate-spin",
    },

    // ===== CONTENT (Title + Description) =====
    content: {
        container: "flex flex-col items-center gap-0.5 text-center",

        title: {
            base: "text-body-lg-medium",
            status: {
                idle: "text-fg-strong",
                dragging: "text-fg-strong",
                loading: "text-fg-strong",
                success: "text-fg-strong",
                error: "text-fg-strong",
                warning: "text-fg-strong",
            } as Record<FileDropZoneStatus, string>,
        },

        description: {
            base: "text-body-sm-medium",
            status: {
                idle: "text-fg-muted",
                dragging: "text-fg-muted",
                loading: "text-fg-muted",
                success: "text-fg-success",
                error: "text-fg-critical",
                warning: "text-fg-warning",
            } as Record<FileDropZoneStatus, string>,
        },
    },

    // ===== ACTIONS AREA =====
    actions: {
        container: [
            "flex items-center justify-center",
            "gap-3",
            "w-full",
        ].join(" "),

        // Wrapper: Grid para animação de altura (0fr -> 1fr)
        wrapper: "w-full grid transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]",

        // Estados
        visible: "grid-rows-[1fr] opacity-100 translate-y-0",
        hidden: "grid-rows-[0fr] opacity-0 translate-y-2 pointer-events-none",

        // Inner container para o grid funcionar
        inner: "overflow-hidden",
        // Wrapper para botoes default (com flex-1)
        defaultButtonWrapper: "flex-1 [&>button]:w-full",
        // Input de senha
        passwordInput: "flex-1 max-w-[220px]",
    },
};

// ===== HELPER FUNCTIONS =====

export function getContainerClasses(status: FileDropZoneStatus): string {
    return [
        fileDropZoneStyles.container.base,
        fileDropZoneStyles.container.status[status],
    ].join(" ");
}

export function getIconBoxClasses(status: FileDropZoneStatus): string {
    return [
        fileDropZoneStyles.iconBox.base,
        fileDropZoneStyles.iconBox.status[status],
    ].join(" ");
}

export function getTitleClasses(status: FileDropZoneStatus): string {
    return [
        fileDropZoneStyles.content.title.base,
        fileDropZoneStyles.content.title.status[status],
    ].join(" ");
}

export function getDescriptionClasses(status: FileDropZoneStatus): string {
    return [
        fileDropZoneStyles.content.description.base,
        fileDropZoneStyles.content.description.status[status],
    ].join(" ");
}
