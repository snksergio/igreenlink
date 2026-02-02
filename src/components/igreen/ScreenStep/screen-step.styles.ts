/**
 * ScreenStep Styles
 * 
 * Responsive layout for individual step content.
 * Uses design tokens for all values.
 */

export const screenStepStyles = {
    /** Main container */
    container: "flex flex-col gap-6 md:gap-8 w-full",

    /** Header section with step label, title, subtitle */
    header: {
        wrapper: "flex flex-col gap-4 md:gap-6",
        stepLabel: "text-label text-fg-muted uppercase bg-bg-muted h-[26px] flex items-center justify-center rounded-full self-start px-3",
        titleWrapper: "flex flex-col gap-1",
        title: "text-page-title text-fg-strong",
        titleHighlight: "text-fg-primary",
        subtitle: "text-body-lg-medium text-fg-muted",
    },

    /** Content area for children */
    content: "flex flex-col gap-6 flex-1",

    /** Actions footer */
    actions: {
        wrapper: "flex gap-3.5 items-center w-full mt-auto",
        /** Dual buttons layout */
        dual: "flex gap-3.5 items-center w-full",
        /** Single back button layout */
        singleBack: "flex justify-center w-full",
        /** Back button in dual layout */
        backButton: "w-[135px]",
        /** Next button in dual layout */
        nextButton: "flex-1",
        /** Single back button (full width) */
        singleBackButton: "w-full",
    },
};
