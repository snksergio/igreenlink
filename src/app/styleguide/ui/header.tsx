import { ExternalLink } from "lucide-react";

interface StyleguideHeaderProps {
    title: string;
    description: string;
    links?: {
        label: string;
        href: string;
    }[];
}

export function StyleguideHeader({ title, description, links }: StyleguideHeaderProps) {
    return (
        <header className="border-b border-border bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-display-lg text-fg-strong">{title}</h1>
                    <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Component
                    </span>
                </div>
                <p className="text-body-lg-medium text-fg-muted mb-6">
                    {description}
                </p>

                {links && links.length > 0 && (
                    <div className="flex gap-6">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-body-sm-medium text-fg-brand hover:text-fg-brand-hover transition-colors"
                            >
                                {link.label}
                                <ExternalLink className="size-3.5" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
