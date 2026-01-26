export default function TypographyPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Typography
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Foundation
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Escala tipográfica, pesos e tamanhos de fonte do design system
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <p className="text-body-md-medium text-fg-muted">
                    Definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/semantic/typography.css</code>.
                    Valores ajustam automaticamente em mobile via media query.
                </p>

                <div className="space-y-8">
                    {/* Display */}
                    <div>
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Display</h3>
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-display-lg text-fg-strong">Display Large</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-lg - 26px / Bold / -4%</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 22px</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-display-md text-fg-strong">Display Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-md - 24px / Bold / -4%</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 20px</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-display-sm text-fg-strong">Display Small</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-sm - 18px / Bold / -4%</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 16px</span>
                            </div>
                        </div>
                    </div>

                    {/* Titles */}
                    <div>
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Títulos</h3>
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-page-title text-fg-strong">Page Title</p>
                                    <p className="text-caption-sm text-fg-muted">.text-page-title - 26px / Bold / -4%</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 22px</span>
                            </div>
                            <div>
                                <p className="text-page-subtitle text-fg-muted">Page Subtitle</p>
                                <p className="text-caption-sm text-fg-muted">.text-page-subtitle - 14px / Medium</p>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-section-title text-fg-strong">Section Title</p>
                                    <p className="text-caption-sm text-fg-muted">.text-section-title - 18px / Bold / -4%</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 16px</span>
                            </div>
                            <div>
                                <p className="text-modal-title text-fg-strong">Modal Title</p>
                                <p className="text-caption-sm text-fg-muted">.text-modal-title - 24px / Bold / -4%</p>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div>
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Body Text</h3>
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-body-lg-medium text-fg-main">Body Large Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-lg-medium - 14px / Medium</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 12px</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-body-md-semibold text-fg-main">Body Medium Semibold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-md-semibold - 13px / Semibold</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 11px</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-body-sm-medium text-fg-main">Body Small Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-sm-medium - 12px / Medium</p>
                                </div>
                                <span className="text-caption-xs text-fg-warning bg-bg-warning-subtle px-2 py-1 rounded">Mobile: 10px</span>
                            </div>
                        </div>
                    </div>

                    {/* Buttons & Labels */}
                    <div>
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Botões e Labels</h3>
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-3">
                            <div>
                                <p className="text-button-md text-fg-main">Button Medium Text</p>
                                <p className="text-caption-sm text-fg-muted">.text-button-md - 14px / Bold</p>
                            </div>
                            <div>
                                <p className="text-button-sm text-fg-main">Button Small Text</p>
                                <p className="text-caption-sm text-fg-muted">.text-button-sm - 13px / Semibold</p>
                            </div>
                            <div>
                                <p className="text-label text-fg-main">LABEL TEXT</p>
                                <p className="text-caption-sm text-fg-muted">.text-label - 11px / Bold / +1%</p>
                            </div>
                        </div>
                    </div>

                    {/* Captions */}
                    <div>
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Captions</h3>
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-3">
                            <div>
                                <p className="text-caption-md text-fg-main">Caption Medium - Texto auxiliar</p>
                                <p className="text-caption-sm text-fg-muted">.text-caption-md - 12px / Medium</p>
                            </div>
                            <div>
                                <p className="text-caption-sm text-fg-main">Caption Small - Texto pequeno</p>
                                <p className="text-caption-sm text-fg-muted">.text-caption-sm - 11px / Medium</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive Note */}
                <section className="bg-bg-warning-subtle border border-border-warning rounded-lg p-6">
                    <h3 className="text-body-lg-semibold text-fg-warning mb-2">📱 Responsividade</h3>
                    <p className="text-body-md-medium text-fg-warning">
                        Todos os tamanhos de fonte são reduzidos automaticamente em telas menores que <code className="bg-bg-warning px-1.5 py-0.5 rounded">768px</code> (--breakpoint-mobile).
                        Os valores mobile são mostrados nos badges amarelos.
                    </p>
                </section>
            </div>
        </div>
    );
}
