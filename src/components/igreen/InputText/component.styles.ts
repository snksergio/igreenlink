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
        error: "border-border-critical ring-ring-critical",
        warning: "border-border-warning ring-ring-warning",
        completed: "border-border-success ring-ring-success",
    },

    // Input interno
    input: "placeholder:text-fg-subtle text-fg-strong w-full flex-1 [&[type=email]]:appearance-none",

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

    // Override de bordas/focus agora é tratado pelo próprio componente via prop `status`
    // mantendo objeto vazio ou removendo se preferir, mas index.ts/types podem depender dele se referenciado? 
    // Como estamos removendo o uso no component.tsx, podemos remover aqui.
    // Mas para evitar quebra de contrato se houver export, deixamos comentado ou vazio.
    // Para limpar: removemos completamente.

};
