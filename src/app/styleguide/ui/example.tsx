import { cn } from "@/lib/utils";

interface StyleguideExampleProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    code?: string;
    className?: string;
    inverseColor?: boolean;
}

export function StyleguideExample({ title, subtitle, children, code, className, inverseColor }: StyleguideExampleProps) {
    return (
        <div className="mb-8 last:mb-0">
            {title && (
                <h3 className="text-body-lg-semibold text-fg-strong mb-4">{title}</h3>
            )}
            {subtitle && (
                <p className="text-body-md-medium text-fg-muted mb-4">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "border border-border rounded-lg p-6 space-y-4",
                inverseColor ? "bg-bg-muted" : "bg-bg-surface",
                className
            )}>
                {children}

                {code && (
                    <div className={cn(
                        "p-4 rounded text-sm overflow-x-auto",
                        inverseColor ? "bg-bg-surface" : "bg-bg-muted"
                    )}>
                        <code className="text-caption-md text-fg-main block font-mono whitespace-pre">
                            {code}
                        </code>
                    </div>
                )}
            </div>
        </div>
    );
}
