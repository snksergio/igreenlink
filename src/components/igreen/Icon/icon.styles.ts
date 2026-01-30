import { cva } from "class-variance-authority";

export const iconStyles = cva("inline-block shrink-0 transition-colors", {
    variants: {
        size: {
            sm: "w-[18px] h-[18px]",      // 16px
            md: "w-5 h-5",      // 20px
            lg: "w-6 h-6",      // 24px
            xl: "w-8 h-8",      // 32px
        },
    },
    defaultVariants: {
        size: "md",
    },
});
