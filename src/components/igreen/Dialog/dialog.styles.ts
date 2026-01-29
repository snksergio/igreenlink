/**
 * Estilos do Dialog
 * 
 * Mapeamento baseado no Figma Node 2508-8998
 */

export const dialogStyles = {
    // ===== UTILS =====
    overlay: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",

    // ===== CONTAINER DE CONTEÚDO =====
    content: {
        base: "fixed left-[50%] top-[50%] z-50 grid w-full min-w-[550px] max-w-[550px] translate-x-[-50%] translate-y-[-50%] bg-bg-surface px-9 py-10 shadows-boxshadow-xl rounded-xl border border-border duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] gap-[32px] sm:rounded-xl",
    },

    // ===== HEADER =====
    header: {
        container: "flex flex-row gap-[18px] items-start w-full text-left",
        textContainer: "flex flex-col gap-[6px] flex-1 text-left",
        title: "text-modal-title",
        description: "text-body-lg-medium text-fg-muted",
    },

    // ===== ÍCONE =====
    icon: {
        wrapper: "flex items-center justify-center shrink-0 size-[52px] rounded-sm bg-bg-primary-subtle",
        inner: "size-6 flex items-center justify-center text-fg-primary [&_svg]:size-full",
    },

    // ===== CLOSE BUTTON =====
    closeButton: {
        base: "absolute top-8 right-8 rounded-sm disabled:pointer-events-none text-fg-main [&_svg]:size-[24px]",
    },

    // ===== FOOTER =====
    footer: {
        base: "grid grid-cols-2 gap-3 w-full sm:justify-between sm:space-x-0",
    },

    // ===== CONTENT WRAPPER =====
    contentWrapper: "w-full",

    // ===== BUTTONS =====
    actionButton: "w-full",

    // ===== UTILITIES =====
    // Oculta buttons absolutos que NÃO tenham o atributo data-igreen-close
    hideDefaultClose: "[&>button[type=button].absolute:not([data-igreen-close])]:hidden",
};
