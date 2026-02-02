"use client";

import { useState } from "react";
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex min-h-screen bg-bg-canvas">
            {/* Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-4 bg-bg-surface border-b border-border md:hidden">
                <Link href="/styleguide" className="flex items-center gap-2">
                    <span className="text-body-lg-semibold text-fg-strong">iGreen</span>
                    <span className="text-body-sm-medium text-fg-muted">Design System</span>
                </Link>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-lg hover:bg-bg-muted transition-colors"
                    aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isSidebarOpen ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                            <path d="M13.7237 4.27627C14.0362 4.58869 14.0362 5.09529 13.7237 5.40771L10.1315 9L13.7237 12.5923C14.0362 12.9047 14.0362 13.4113 13.7237 13.7237C13.4113 14.0362 12.9047 14.0362 12.5923 13.7237L9 10.1315L5.40771 13.7237C5.09529 14.0362 4.58869 14.0362 4.27627 13.7237C3.96386 13.4113 3.96386 12.9047 4.27627 12.5923L7.86852 9L4.27627 5.40771C3.96386 5.09529 3.96386 4.58869 4.27627 4.27627C4.58869 3.96386 5.09529 3.96386 5.40771 4.27627L9 7.86852L12.5923 4.27627C12.9047 3.96386 13.4113 3.96386 13.7237 4.27627Z" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="3" y1="5" x2="15" y2="5" />
                            <line x1="3" y1="9" x2="15" y2="9" />
                            <line x1="3" y1="13" x2="15" y2="13" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen w-64 bg-bg-surface border-r border-border overflow-y-auto z-50
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:z-auto
                `}
            >
                <div className="p-6 pt-20 md:pt-6">
                    <Link href="/styleguide" className="hidden md:block mb-8">
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
                                                    onClick={closeSidebar}
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

            {/* Main content */}
            <main className="flex-1 pt-14 md:pt-0 md:ml-64">
                {children}
            </main>
        </div>
    );
}
