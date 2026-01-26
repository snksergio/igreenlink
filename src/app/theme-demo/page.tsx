export default function StyleguideDemo() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <h1 className="text-display-lg text-fg-strong mb-2">
                        iGreen Design System
                    </h1>
                    <p className="text-body-lg-medium text-fg-muted">
                        Styleguide completo - Cores, Tipografia, Componentes e Utilitários
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-16">
                {/* ========== CORES PRIMITIVAS ========== */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-section-title text-fg-strong mb-2">
                            01. Cores Primitivas
                        </h2>
                        <p className="text-body-md-medium text-fg-muted">
                            Escalas de cores base do design system (OKLCH format)
                        </p>
                    </div>

                    {/* Brand Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Brand (Verde Principal)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-brand-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                        <p className="text-caption-sm text-fg-muted font-mono">
                                            brand-{shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Neutral Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Neutral (Cinza)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-neutral-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Success (Verde Feedback)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-success-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Warning Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Warning (Laranja)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-warning-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Critical Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Critical (Vermelho)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-critical-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Scale */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Info (Azul)
                        </h3>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        style={{ backgroundColor: `var(--color-info-${shade})` }}
                                        className="h-20 rounded-lg border border-border shadow-sm"
                                    />
                                    <div className="text-center">
                                        <p className="text-caption-sm text-fg-strong font-semibold">
                                            {shade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== CORES SEMÂNTICAS ========== */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-section-title text-fg-strong mb-2">
                            02. Cores Semânticas
                        </h2>
                        <p className="text-body-md-medium text-fg-muted">
                            Cores com significado contextual. Use classes Tailwind: <code className="text-caption-sm px-2 py-1 bg-bg-muted rounded">bg-bg-primary</code>
                        </p>
                    </div>

                    {/* Backgrounds */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Backgrounds
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { name: "Canvas", class: "bg-bg-canvas", text: "text-fg-strong" },
                                { name: "Background", class: "bg-bg-background", text: "text-fg-strong" },
                                { name: "Surface", class: "bg-bg-surface", text: "text-fg-strong" },
                                { name: "Muted", class: "bg-bg-muted", text: "text-fg-strong" },
                                { name: "Subtle", class: "bg-bg-subtle", text: "text-fg-strong" },
                                { name: "Elevated", class: "bg-bg-elevated", text: "text-fg-strong" },
                                { name: "Fill", class: "bg-bg-fill", text: "text-fg-on-primary" },
                                { name: "Inverse", class: "bg-bg-inverse", text: "text-fg-on-inverted" },

                                // Primary
                                { name: "Primary", class: "bg-bg-primary", text: "text-fg-on-primary" },
                                { name: "Primary Hover", class: "bg-bg-primary-hover", text: "text-fg-on-primary" },
                                { name: "Primary Subtle", class: "bg-bg-primary-subtle", text: "text-fg-primary" },

                                // Secondary
                                { name: "Secondary", class: "bg-bg-secondary", text: "text-fg-secondary" },
                                { name: "Secondary Hover", class: "bg-bg-secondary-hover", text: "text-fg-secondary" },
                                { name: "Secondary Subtle", class: "bg-bg-secondary-subtle", text: "text-fg-secondary" },

                                // Success
                                { name: "Success", class: "bg-bg-success", text: "text-fg-on-success" },
                                { name: "Success Hover", class: "bg-bg-success-hover", text: "text-fg-on-success" },
                                { name: "Success Subtle", class: "bg-bg-success-subtle", text: "text-fg-success" },
                                { name: "Success Muted", class: "bg-bg-success-muted", text: "text-fg-success-muted" },

                                // Warning
                                { name: "Warning", class: "bg-bg-warning", text: "text-fg-on-warning" },
                                { name: "Warning Hover", class: "bg-bg-warning-hover", text: "text-fg-on-warning" },
                                { name: "Warning Subtle", class: "bg-bg-warning-subtle", text: "text-fg-warning" },
                                { name: "Warning Muted", class: "bg-bg-warning-muted", text: "text-fg-warning-muted" },

                                // Critical
                                { name: "Critical", class: "bg-bg-critical", text: "text-fg-on-critical" },
                                { name: "Critical Hover", class: "bg-bg-critical-hover", text: "text-fg-on-critical" },
                                { name: "Critical Subtle", class: "bg-bg-critical-subtle", text: "text-fg-critical" },
                                { name: "Critical Muted", class: "bg-bg-critical-muted", text: "text-fg-critical-muted" },

                                // Info
                                { name: "Info", class: "bg-bg-info", text: "text-fg-on-info" },
                                { name: "Info Hover", class: "bg-bg-info-hover", text: "text-fg-on-info" },
                                { name: "Info Subtle", class: "bg-bg-info-subtle", text: "text-fg-info" },
                                { name: "Info Muted", class: "bg-bg-info-muted", text: "text-fg-info-muted" },
                            ].map((item) => (
                                <div key={item.name} className="space-y-2">
                                    <div className={`${item.class} h-20 rounded-lg flex items-center justify-center border border-border px-2`}>
                                        <span className={`text-body-sm-semibold ${item.text} text-center`}>
                                            {item.name}
                                        </span>
                                    </div>
                                    <p className="text-caption-sm text-fg-muted truncate" title={item.class}>{item.class}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Foregrounds (Text) */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Foregrounds (Texto)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Base Foregrounds */}
                            <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-3">
                                <p className="text-caption-sm text-fg-muted mb-3 font-semibold">Base</p>
                                <p className="text-body-md-medium text-fg-strong">text-fg-strong</p>
                                <p className="text-body-md-medium text-fg-moderate">text-fg-moderate</p>
                                <p className="text-body-md-medium text-fg-main">text-fg-main</p>
                                <p className="text-body-md-medium text-fg-muted">text-fg-muted</p>
                                <p className="text-body-md-medium text-fg-subtle">text-fg-subtle</p>
                                <p className="text-body-md-medium text-fg-interactive">text-fg-interactive</p>
                            </div>

                            {/* Status Foregrounds */}
                            <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-3">
                                <p className="text-caption-sm text-fg-muted mb-3 font-semibold">Status</p>
                                <p className="text-body-md-medium text-fg-primary">text-fg-primary</p>
                                <p className="text-body-md-medium text-fg-success">text-fg-success</p>
                                <p className="text-body-md-medium text-fg-success-muted">text-fg-success-muted</p>
                                <p className="text-body-md-medium text-fg-success-strong">text-fg-success-strong</p>
                                <p className="text-body-md-medium text-fg-warning">text-fg-warning</p>
                                <p className="text-body-md-medium text-fg-warning-muted">text-fg-warning-muted</p>
                                <p className="text-body-md-medium text-fg-warning-strong">text-fg-warning-strong</p>
                                <p className="text-body-md-medium text-fg-critical">text-fg-critical</p>
                                <p className="text-body-md-medium text-fg-critical-muted">text-fg-critical-muted</p>
                                <p className="text-body-md-medium text-fg-critical-strong">text-fg-critical-strong</p>
                                <p className="text-body-md-medium text-fg-info">text-fg-info</p>
                                <p className="text-body-md-medium text-fg-info-muted">text-fg-info-muted</p>
                            </div>

                            {/* On Color Foregrounds */}
                            <div className="bg-bg-inverse border border-border-inverted rounded-lg p-6 space-y-3">
                                <p className="text-caption-sm text-fg-on-inverted mb-3 font-semibold">On Colors (Dark BG)</p>
                                <p className="text-body-md-medium text-fg-on-inverted">text-fg-on-inverted</p>
                                <p className="text-body-md-medium text-fg-muted-on-inverted">text-fg-muted-on-inverted</p>
                                <p className="text-body-md-medium text-fg-on-dark">text-fg-on-dark</p>
                            </div>

                            {/* On Colored Backgrounds */}
                            <div className="space-y-3">
                                <div className="bg-bg-primary rounded-lg p-4">
                                    <p className="text-body-sm-semibold text-fg-on-primary">text-fg-on-primary</p>
                                </div>
                                <div className="bg-bg-success rounded-lg p-4">
                                    <p className="text-body-sm-semibold text-fg-on-success">text-fg-on-success</p>
                                </div>
                                <div className="bg-bg-warning rounded-lg p-4">
                                    <p className="text-body-sm-semibold text-fg-on-warning">text-fg-on-warning</p>
                                </div>
                                <div className="bg-bg-critical rounded-lg p-4">
                                    <p className="text-body-sm-semibold text-fg-on-critical">text-fg-on-critical</p>
                                </div>
                                <div className="bg-bg-info rounded-lg p-4">
                                    <p className="text-body-sm-semibold text-fg-on-info">text-fg-on-info</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Borders */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">
                            Borders
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { name: "Default", class: "border-border" },
                                { name: "Muted", class: "border-border-muted" },
                                { name: "Strong", class: "border-border-strong" },
                                { name: "Moderate", class: "border-border-moderate" },
                                { name: "Inverted", class: "border-border-inverted" },
                                { name: "Primary", class: "border-border-primary" },
                                { name: "Primary Muted", class: "border-border-primary-muted" },
                                { name: "Secondary", class: "border-border-secondary" },
                                { name: "Success", class: "border-border-success" },
                                { name: "Success Muted", class: "border-border-success-muted" },
                                { name: "Warning", class: "border-border-warning" },
                                { name: "Warning Muted", class: "border-border-warning-muted" },
                                { name: "Critical", class: "border-border-critical" },
                                { name: "Critical Muted", class: "border-border-critical-muted" },
                                { name: "Info", class: "border-border-info" },
                                { name: "Info Muted", class: "border-border-info-muted" },
                            ].map((item) => (
                                <div key={item.name} className={`p-4 border-2 ${item.class} rounded-lg bg-bg-surface`}>
                                    <p className="text-body-sm-semibold text-fg-strong">{item.name}</p>
                                    <p className="text-caption-sm text-fg-muted mt-1">{item.class}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== TIPOGRAFIA ========== */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-section-title text-fg-strong mb-2">
                            03. Tipografia
                        </h2>
                        <p className="text-body-md-medium text-fg-muted">
                            Estilos de texto do design system Figma
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Display */}
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Display</h3>
                            <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                                <div>
                                    <p className="text-display-lg text-fg-strong">Display Large</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-lg - 26px / Bold / -4%</p>
                                </div>
                                <div>
                                    <p className="text-display-md text-fg-strong">Display Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-md - 24px / Bold / -4%</p>
                                </div>
                                <div>
                                    <p className="text-display-sm text-fg-strong">Display Small</p>
                                    <p className="text-caption-sm text-fg-muted">.text-display-sm - 18px / Bold / -4%</p>
                                </div>
                            </div>
                        </div>

                        {/* Titles */}
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Títulos</h3>
                            <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                                <div>
                                    <p className="text-page-title text-fg-strong">Page Title</p>
                                    <p className="text-caption-sm text-fg-muted">.text-page-title - 26px / Bold / -4%</p>
                                </div>
                                <div>
                                    <p className="text-section-title text-fg-strong">Section Title</p>
                                    <p className="text-caption-sm text-fg-muted">.text-section-title - 18px / Bold / -4%</p>
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
                                <div>
                                    <p className="text-body-lg-medium text-fg-main">Body Large Medium - Texto principal</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-lg-medium - 14px / Medium</p>
                                </div>
                                <div>
                                    <p className="text-body-lg-semibold text-fg-main">Body Large Semibold - Destaque</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-lg-semibold - 14px / Semibold</p>
                                </div>
                                <div>
                                    <p className="text-body-md-bold text-fg-main">Body Medium Bold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-md-bold - 13px / Bold</p>
                                </div>
                                <div>
                                    <p className="text-body-md-semibold text-fg-main">Body Medium Semibold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-md-semibold - 13px / Semibold</p>
                                </div>
                                <div>
                                    <p className="text-body-md-medium text-fg-main">Body Medium Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-md-medium - 13px / Medium</p>
                                </div>
                                <div>
                                    <p className="text-body-sm-bold text-fg-main">Body Small Bold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-sm-bold - 12px / Bold</p>
                                </div>
                                <div>
                                    <p className="text-body-sm-semibold text-fg-main">Body Small Semibold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-sm-semibold - 12px / Semibold</p>
                                </div>
                                <div>
                                    <p className="text-body-sm-medium text-fg-main">Body Small Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-sm-medium - 12px / Medium</p>
                                </div>
                                <div>
                                    <p className="text-body-xs-medium text-fg-main">Body XSmall Medium</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-xs-medium - 11px / Medium</p>
                                </div>
                                <div>
                                    <p className="text-body-xs-semibold text-fg-main">Body XSmall Semibold</p>
                                    <p className="text-caption-sm text-fg-muted">.text-body-xs-semibold - 11px / Semibold</p>
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
                </section>

                {/* ========== UTILITÁRIOS ========== */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-section-title text-fg-strong mb-2">
                            04. Utilitários
                        </h2>
                    </div>

                    {/* Shadows */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Sombras</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-xs">
                                <p className="text-body-sm-semibold text-fg-strong">Shadow XS</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-xs</p>
                            </div>
                            <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-sm">
                                <p className="text-body-sm-semibold text-fg-strong">Shadow SM</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-sm</p>
                            </div>
                            <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-base">
                                <p className="text-body-sm-semibold text-fg-strong">Shadow Base</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-base</p>
                            </div>
                            <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-xl">
                                <p className="text-body-sm-semibold text-fg-strong">Shadow XL</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-xl</p>
                            </div>
                        </div>
                    </div>

                    {/* Rings */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Rings (Focus)</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-bg-surface p-6 rounded-lg rings-ring-primary">
                                <p className="text-body-sm-semibold text-fg-primary">Ring Primary</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.rings-ring-primary</p>
                            </div>
                            <div className="bg-bg-surface p-6 rounded-lg rings-ring-warning">
                                <p className="text-body-sm-semibold text-fg-warning">Ring Warning</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.rings-ring-warning</p>
                            </div>
                            <div className="bg-bg-surface p-6 rounded-lg rings-ring-critical">
                                <p className="text-body-sm-semibold text-fg-critical">Ring Critical</p>
                                <p className="text-caption-sm text-fg-muted mt-1">.rings-ring-critical</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== EXEMPLOS DE COMPONENTES ========== */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-section-title text-fg-strong mb-2">
                            05. Exemplos de Componentes
                        </h2>
                        <p className="text-body-md-medium text-fg-muted">
                            Demonstrações de uso do design system
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Buttons */}
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Botões</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-bg-primary hover:bg-bg-primary-hover text-fg-on-primary text-button-md rounded-lg transition-colors">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 bg-bg-secondary hover:bg-bg-secondary-hover text-fg-secondary text-button-md rounded-lg border border-border transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 bg-bg-success hover:bg-bg-success-hover text-fg-on-success text-button-md rounded-lg transition-colors">
                                    Success Button
                                </button>
                                <button className="px-6 py-3 bg-bg-critical hover:bg-bg-critical-hover text-fg-on-critical text-button-md rounded-lg transition-colors">
                                    Critical Button
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Cards</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-bg-surface border border-border rounded-lg p-6 shadows-boxshadow-sm">
                                    <h4 className="text-body-lg-semibold text-fg-strong mb-2">Card Título</h4>
                                    <p className="text-body-md-medium text-fg-muted mb-4">
                                        Descrição do card com informações importantes
                                    </p>
                                    <button className="text-button-sm text-fg-primary">Ação →</button>
                                </div>

                                <div className="bg-bg-success-subtle border border-border-success rounded-lg p-6">
                                    <div className="flex items-start gap-3">
                                        <div style={{ backgroundColor: 'var(--color-success-600)' }} className="w-3 h-3 rounded-full mt-1" />
                                        <div>
                                            <h4 className="text-body-lg-semibold text-fg-success-strong mb-2">Status Success</h4>
                                            <p className="text-body-sm-medium text-fg-success">Operação concluída com sucesso!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-bg-warning-subtle border border-border-warning rounded-lg p-6">
                                    <div className="flex items-start gap-3">
                                        <div style={{ backgroundColor: 'var(--color-warning-600)' }} className="w-3 h-3 rounded-full mt-1" />
                                        <div>
                                            <h4 className="text-body-lg-semibold text-fg-warning-strong mb-2">Atenção</h4>
                                            <p className="text-body-sm-medium text-fg-warning">Ação requer confirmação</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badges */}
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Badges</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-primary-subtle text-fg-primary text-caption-md rounded-full border border-border-primary">
                                    <div style={{ backgroundColor: 'var(--color-brand-600)' }} className="w-2 h-2 rounded-full" />
                                    Primary
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-success-subtle text-fg-success text-caption-md rounded-full border border-border-success">
                                    <div style={{ backgroundColor: 'var(--color-success-600)' }} className="w-2 h-2 rounded-full" />
                                    Success
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-warning-subtle text-fg-warning text-caption-md rounded-full border border-border-warning">
                                    <div style={{ backgroundColor: 'var(--color-warning-600)' }} className="w-2 h-2 rounded-full" />
                                    Warning
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-bg-critical-subtle text-fg-critical text-caption-md rounded-full border border-border-critical">
                                    <div style={{ backgroundColor: 'var(--color-critical-500)' }} className="w-2 h-2 rounded-full" />
                                    Critical
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="border-t border-border-muted bg-bg-surface mt-16">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <p className="text-body-sm-medium text-fg-muted text-center">
                        iGreen Design System • Tailwind CSS v4 • Next.js • OKLCH Colors
                    </p>
                </div>
            </footer>
        </div>
    );
}
