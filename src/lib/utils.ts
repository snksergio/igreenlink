import { cn as themeCn } from "@themes/tailwind-merge.config"

/**
 * Utility Bridge
 * 
 * This file serves as a bridge between Shadcn UI components (which expect this file)
 * and our custom Design System theme configuration.
 * 
 * It simply re-exports the configured utility from themes/.
 */
export const cn = themeCn
