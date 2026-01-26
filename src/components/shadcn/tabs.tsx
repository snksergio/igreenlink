"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            // Figma: container pill cinza com padding
            "inline-flex items-center justify-center",
            "bg-[#f3f4f6] p-[4px] rounded-[14px]",
            "gap-[4px]",
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            // Base dimensions and layout
            "h-[40px] flex-1 rounded-[10px] p-[10px]",
            "inline-flex items-center justify-center gap-[10px]",
            "whitespace-nowrap",
            // Typography - 12px Bold, tracking 0.12px
            "text-[12px] font-bold leading-normal tracking-[0.12px]",
            // Transitions
            "transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            // Inactive state (default) - cinza, transparent
            "text-[#9ca3af]",
            // Active state - verde, white background, shadow
            "data-[state=active]:bg-white",
            "data-[state=active]:text-[#00a859]",
            "data-[state=active]:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
        )}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
