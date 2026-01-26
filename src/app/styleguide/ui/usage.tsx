interface StyleguideUsageProps {
    importCode: string;
    exampleCode: string;
}

export function StyleguideUsage({ importCode, exampleCode }: StyleguideUsageProps) {
    return (
        <div className="space-y-6">
            {/* Import Block */}
            <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-bg-subtle border-b border-border">
                    <span className="text-caption-sm text-fg-muted font-medium">Import</span>
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-border" />
                        <div className="size-2.5 rounded-full bg-border" />
                        <div className="size-2.5 rounded-full bg-border" />
                    </div>
                </div>
                <div className="p-4 bg-bg-muted relative group">
                    <code className="text-caption-md text-fg-main block font-mono">
                        {importCode}
                    </code>
                </div>
            </div>

            {/* Example Block */}
            <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-bg-subtle border-b border-border">
                    <span className="text-caption-sm text-fg-muted font-medium">Example Code</span>
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-border" />
                        <div className="size-2.5 rounded-full bg-border" />
                        <div className="size-2.5 rounded-full bg-border" />
                    </div>
                </div>
                <div className="p-4 bg-bg-muted relative">
                    <code className="text-caption-md text-fg-main block font-mono whitespace-pre text-sm leading-relaxed">
                        {exampleCode}
                    </code>
                </div>
            </div>
        </div>
    );
}
