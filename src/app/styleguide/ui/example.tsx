interface StyleguideExampleProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    code?: string;
}

export function StyleguideExample({ title, subtitle, children, code }: StyleguideExampleProps) {
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
            <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                {children}

                {code && (
                    <div className="p-4 bg-bg-muted rounded text-sm overflow-x-auto">
                        <code className="text-caption-md text-fg-main block font-mono whitespace-pre">
                            {code}
                        </code>
                    </div>
                )}
            </div>
        </div>
    );
}
