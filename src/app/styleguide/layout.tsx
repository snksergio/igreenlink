"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./navigation";
import { ThemeToggle } from "./ui/ThemeToggle";

export default function StyleguideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-bg-canvas">
            {/* Sidebar - Fixed */}
            <aside className="w-64 border-r border-border bg-bg-surface fixed top-0 left-0 h-screen overflow-y-auto">
                <div className="p-6">
                    <Link href="/styleguide" className="block mb-8">
                        <h1 className="text-page-title text-fg-strong">iGreen</h1>
                        <p className="text-body-sm-medium text-fg-muted">Design System</p>
                    </Link>

                    <nav className="flex flex-col gap-6">
                        {navigation.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-label text-fg-moderate mb-3 uppercase">
                                    {section.title}
                                </h3>
                                <ul className="flex flex-col gap-1">
                                    {section.items.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={`
                            flex items-center justify-between px-3 py-2 rounded-lg text-body-sm-semibold transition-colors
                            ${isActive
                                                            ? "bg-bg-primary text-fg-on-primary"
                                                            : "text-fg-main hover:bg-bg-muted hover:text-fg-strong"
                                                        }
                          `}
                                                >
                                                    <span>{item.name}</span>
                                                    {item.badge && (
                                                        <span className={`
                                                            text-[10px] uppercase font-bold px-1.5 py-0.5 rounded
                                                            ${isActive
                                                                ? "text-fg-on-primary/50"
                                                                : "text-fg-subtle"
                                                            }
                                                        `}>
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>

                    {/* Theme Toggle */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <ThemeToggle />
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-4">
                        <p className="text-caption-sm text-fg-muted">
                            Tailwind CSS v4
                            <br />
                            Next.js 16
                            <br />
                            OKLCH Colors
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main content - offset by sidebar width */}
            <main className="flex-1 ml-64">
                {children}
            </main>
        </div>
    );
}

