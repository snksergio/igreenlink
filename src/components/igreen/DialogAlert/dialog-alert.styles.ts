export const dialogAlertStyles = {
    // Container uses Dialog styling base but overrides for specific look
    content: {
        base: "flex flex-col items-center text-center p-9 pt-10 gap-8 max-w-[483px] w-full rounded-[32px] shadows-boxshadow-xl bg-bg-surface border-none focus-visible:outline-none",
    },

    // Icon Wrapper styles
    iconWrapper: {
        base: "flex items-center justify-center size-[52px] rounded-sm shrink-0",
        variants: {
            default: "bg-bg-primary-subtle text-fg-primary",
            warning: "bg-bg-warning-subtle text-fg-warning",
            critical: "bg-bg-critical-subtle text-fg-critical",
        }
    },

    // Typography styles
    text: {
        title: "text-display-md text-fg-strong",
        description: "text-body-lg-medium text-fg-muted",
    },

    // Action buttons container
    actions: {
        base: "flex items-center gap-3 w-full",
    },

    // Internal layout wrappers
    body: {
        container: "flex flex-col gap-6 w-full",
        textWrapper: "flex flex-col gap-3 w-full",
    },

    // Icon inner size
    icon: {
        inner: "size-6",
    },

    // Button styles
    button: {
        base: "flex-1 w-full",
    },

    // Custom close button
    closeButton: "absolute top-[26px] right-[26px] opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer text-fg-main",

    closeIcon: "size-6"
};
