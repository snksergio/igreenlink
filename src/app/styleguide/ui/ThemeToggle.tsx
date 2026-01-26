"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check initial theme from localStorage only
        // Force light mode as default, ignore system preference
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            // Ensure light mode is always the default
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-full h-11 rounded-xl bg-bg-muted animate-pulse" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="
                w-full flex items-center justify-between gap-3 
                px-4 py-2.5 rounded-xl
                bg-bg-muted hover:bg-bg-elevated
                border border-border-muted
                transition-all duration-300 ease-out
                group cursor-pointer
            "
            aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
        >
            <div className="flex items-center gap-3">
                <div className={`
                    relative w-8 h-8 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${isDark
                        ? "bg-brand-500/20 text-brand-400"
                        : "bg-warning-100 text-warning-600"
                    }
                `}>
                    <Sun
                        size={18}
                        className={`
                            absolute transition-all duration-300
                            ${isDark
                                ? "opacity-0 rotate-90 scale-0"
                                : "opacity-100 rotate-0 scale-100"
                            }
                        `}
                    />
                    <Moon
                        size={18}
                        className={`
                            absolute transition-all duration-300
                            ${isDark
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-0"
                            }
                        `}
                    />
                </div>
                <span className="text-body-sm-semibold text-fg-main">
                    {isDark ? "Modo Escuro" : "Modo Claro"}
                </span>
            </div>

            {/* Toggle Switch */}
            <div className={`
                relative w-11 h-6 rounded-full
                transition-colors duration-300
                ${isDark ? "bg-brand-600" : "bg-neutral-300"}
            `}>
                <div className={`
                    absolute top-1 w-4 h-4 rounded-full
                    bg-white shadow-sm
                    transition-all duration-300 ease-out
                    ${isDark ? "left-6" : "left-1"}
                `} />
            </div>
        </button>
    );
}
