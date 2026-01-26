export default function ColorsPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Colors
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Foundation
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Paleta completa de cores primitivas e semânticas em formato OKLCH
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                {/* Cores Primitivas */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Cores Primitivas</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Tokens de baixo nível definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/primitives/colors.css</code>.
                        Não são usados diretamente nos componentes, apenas como base para tokens semânticos.
                    </p>

                    {/* Brand */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Brand (Verde Principal)</h3>
                        <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-bg-muted">
                                    <tr>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Valor OKLCH</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { shade: 50, value: "oklch(0.97 0.05 155)", use: "Backgrounds muito claros" },
                                        { shade: 100, value: "oklch(0.94 0.08 155)", use: "Backgrounds claros" },
                                        { shade: 200, value: "oklch(0.89 0.12 155)", use: "Hover states sutis" },
                                        { shade: 300, value: "oklch(0.82 0.15 155)", use: "Borders suaves" },
                                        { shade: 400, value: "oklch(0.74 0.17 155)", use: "Disabled states" },
                                        { shade: 500, value: "oklch(0.67 0.18 155)", use: "⭐ Brand principal" },
                                        { shade: 600, value: "oklch(0.62 0.18 155)", use: "Hover states" },
                                        { shade: 700, value: "oklch(0.52 0.15 155)", use: "Active states" },
                                        { shade: 800, value: "oklch(0.42 0.12 155)", use: "Text em fundos claros" },
                                        { shade: 900, value: "oklch(0.31 0.08 155)", use: "Text mais escuro" },
                                        { shade: 950, value: "oklch(0.18 0.04 155)", use: "Dark backgrounds" },
                                    ].map((item) => (
                                        <tr key={item.shade} className="hover:bg-bg-subtle transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        style={{ backgroundColor: `var(--color-brand-${item.shade})` }}
                                                        className="w-16 h-10 rounded border border-border shadow-sm"
                                                    />
                                                    <span className="text-body-sm-semibold text-fg-strong">{item.shade}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                    --color-brand-{item.shade}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-caption-md text-fg-main font-mono">
                                                    {item.value}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-body-sm-medium text-fg-muted">{item.use}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Neutral */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Neutral (Cinza)</h3>
                        <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-bg-muted">
                                    <tr>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Valor OKLCH</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { shade: 0, value: "oklch(1 0 0)", use: "⭐ Branco puro" },
                                        { shade: 50, value: "oklch(0.9846 0.0017 247.84)", use: "Backgrounds sutis" },
                                        { shade: 100, value: "oklch(0.967 0.0029 264.54)", use: "Muted backgrounds" },
                                        { shade: 200, value: "oklch(0.9368 0.0029 264.54)", use: "⭐ Borders principais" },
                                        { shade: 300, value: "oklch(0.8549 0.0078 241.68)", use: "Borders sutis" },
                                        { shade: 400, value: "oklch(0.7648 0.0145 258.35)", use: "Disabled text" },
                                        { shade: 500, value: "oklch(0.7137 0.0192 261.32)", use: "Placeholder text" },
                                        { shade: 600, value: "oklch(0.6248 0.021 248.16)", use: "⭐ Text principal" },
                                        { shade: 700, value: "oklch(0.522 0.024 248.29)", use: "Text secondary" },
                                        { shade: 800, value: "oklch(0.4008 0.0227 250.88)", use: "Text strong" },
                                        { shade: 900, value: "oklch(0.297 0.0184 248.45)", use: "Headings" },
                                        { shade: 950, value: "oklch(0.1776 0 0)", use: "⭐ Preto quase puro" },
                                    ].map((item) => (
                                        <tr key={item.shade} className="hover:bg-bg-subtle transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        style={{ backgroundColor: `var(--color-neutral-${item.shade})` }}
                                                        className="w-16 h-10 rounded border border-border shadow-sm"
                                                    />
                                                    <span className="text-body-sm-semibold text-fg-strong">{item.shade}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                    --color-neutral-{item.shade}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-caption-md text-fg-main font-mono">
                                                    {item.value}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-body-sm-medium text-fg-muted">{item.use}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Cores Semânticas */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Cores Semânticas</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Tokens de alto nível definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/semantic/colors.css</code>.
                        Use classes Tailwind como <code className="px-2 py-1 bg-bg-muted rounded">bg-bg-primary</code>.
                    </p>

                    {/* Backgrounds */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Background Colors</h3>
                        <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-bg-muted">
                                    <tr>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Classe Tailwind</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { name: "Canvas", var: "--color-bg-canvas", class: "bg-bg-canvas", use: "Background do app" },
                                        { name: "Surface", var: "--color-bg-surface", class: "bg-bg-surface", use: "⭐ Cards, modals" },
                                        { name: "Muted", var: "--color-bg-muted", class: "bg-bg-muted", use: "Backgrounds secundários" },
                                        { name: "Elevated", var: "--color-bg-elevated", class: "bg-bg-elevated", use: "Elementos elevados" },
                                        { name: "Primary", var: "--color-bg-primary", class: "bg-bg-primary", use: "⭐ Botões principais" },
                                        { name: "Secondary", var: "--color-bg-secondary", class: "bg-bg-secondary", use: "Botões secundários" },
                                        { name: "Success", var: "--color-bg-success", class: "bg-bg-success", use: "Sucesso" },
                                        { name: "Warning", var: "--color-bg-warning", class: "bg-bg-warning", use: "Aviso" },
                                        { name: "Critical", var: "--color-bg-critical", class: "bg-bg-critical", use: "Erro" },
                                        { name: "Info", var: "--color-bg-info", class: "bg-bg-info", use: "Informação" },
                                    ].map((item) => (
                                        <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                            <td className="px-6 py-4">
                                                <div
                                                    className={`${item.class} w-16 h-10 rounded border border-border shadow-sm`}
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                    {item.var}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-success bg-bg-success-subtle px-2 py-1 rounded">
                                                    {item.class}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-body-sm-medium text-fg-muted">{item.use}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Text Colors */}
                    <div className="mb-8">
                        <h3 className="text-body-lg-semibold text-fg-strong mb-4">Text (Foreground) Colors</h3>
                        <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-bg-muted">
                                    <tr>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Classe Tailwind</th>
                                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { name: "Strong", var: "--color-fg-strong", class: "text-fg-strong", use: "⭐ Títulos" },
                                        { name: "Main", var: "--color-fg-main", class: "text-fg-main", use: "⭐ Texto principal" },
                                        { name: "Muted", var: "--color-fg-muted", class: "text-fg-muted", use: "Texto secundário" },
                                        { name: "Subtle", var: "--color-fg-subtle", class: "text-fg-subtle", use: "Placeholders" },
                                        { name: "Primary", var: "--color-fg-primary", class: "text-fg-primary", use: "Links, CTAs" },
                                        { name: "Success", var: "--color-fg-success", class: "text-fg-success", use: "Sucesso" },
                                        { name: "Warning", var: "--color-fg-warning", class: "text-fg-warning", use: "Avisos" },
                                        { name: "Critical", var: "--color-fg-critical", class: "text-fg-critical", use: "Erros" },
                                    ].map((item) => (
                                        <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                            <td className="px-6 py-4">
                                                <span className={`${item.class} text-body-md-semibold`}>Aa</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                    {item.var}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-body-sm-medium text-fg-success bg-bg-success-subtle px-2 py-1 rounded">
                                                    {item.class}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-body-sm-medium text-fg-muted">{item.use}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Dark Mode */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Dark Mode</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Todos os tokens semânticos possuem variantes para dark mode definidas no bloco <code className="px-2 py-1 bg-bg-muted rounded">.dark</code>.
                        Use o toggle no menu lateral para alternar temas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Light Mode Preview */}
                        <div className="bg-neutral-0 border border-neutral-200 rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-neutral-950 mb-4">☀️ Light Mode</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-neutral-0 border border-neutral-200" />
                                    <span className="text-body-sm-medium text-neutral-600">bg-canvas: neutral-0</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200" />
                                    <span className="text-body-sm-medium text-neutral-600">bg-muted: neutral-100</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-body-sm-semibold text-neutral-950">Aa</span>
                                    <span className="text-body-sm-medium text-neutral-600">fg-strong: neutral-950</span>
                                </div>
                            </div>
                        </div>

                        {/* Dark Mode Preview */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-neutral-0 mb-4">🌙 Dark Mode</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800" />
                                    <span className="text-body-sm-medium text-neutral-300">bg-canvas: neutral-950</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800" />
                                    <span className="text-body-sm-medium text-neutral-300">bg-muted: neutral-900</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-body-sm-semibold text-neutral-0">Aa</span>
                                    <span className="text-body-sm-medium text-neutral-300">fg-strong: neutral-0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
