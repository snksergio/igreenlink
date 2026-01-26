export const inputTextStyles = {
    // Wrapper principal (Field)
    // Gap de 6px entre label, input e helper
    container: "flex flex-col gap-1.5 w-full",

    // Label
    label: "text-label uppercase text-fg-main transition-colors",

    // Variações de cor para Label/Icon/Helper baseadas no status
    status: {
        default: "",
        error: "text-fg-critical",
        warning: "text-fg-warning",
        completed: "text-fg-success",
    },

    // Input Group Wrapper overrides baseados no status
    group: {
        default: "",
        error: "border-border-critical ring-ring-critical/15", // Ring managed by InputGroup logic manually, but we can enforce border
        warning: "border-border-warning ring-ring-warning/15",
        completed: "border-border-success ring-ring-success/15",
    },

    // Input interno
    input: "placeholder:text-fg-muted text-fg-main w-full flex-1 [&[type=email]]:appearance-none",

    // Helper Text (Description)
    helper: {
        base: "text-caption-sm transition-colors",
        default: "text-fg-main",
        error: "text-fg-critical font-medium",
        warning: "text-fg-warning font-medium",
        completed: "text-fg-success font-medium",
    },

    // Icons (Start/End)
    icon: {
        base: "text-fg-muted transition-colors",
        default: "text-fg-muted", // Explicit default
        error: "text-fg-critical",
        warning: "text-fg-warning",
        completed: "text-fg-success",
        loading: "text-fg-primary", // New for loading spinner
    },

    // Override de bordas/focus para InputGroup quando há status
    // Note: Usamos !important para garantir override sobre classes internas do InputGroup
    groupStatus: {
        default: "",
        error: "!border-border-critical focus-within:!ring-ring-critical",
        warning: "!border-border-warning focus-within:!ring-ring-warning",
        completed: "!border-border-success focus-within:!ring-ring-success",
    }
};
