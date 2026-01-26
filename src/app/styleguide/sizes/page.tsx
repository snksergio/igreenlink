export default function SizesPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Sizes & Spacing
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Foundation
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Tamanhos de formulários, border radius, breakpoints e espaçamentos do design system
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                {/* Breakpoints */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Breakpoints</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Pontos de quebra para responsividade. Definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/primitives/sizes.css</code>.
                        <br />
                        <span className="text-fg-warning">⚠️ CSS não suporta variáveis em media queries, use os valores diretamente.</span>
                    </p>

                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Nome</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Valor</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { name: "Mobile", var: "--breakpoint-mobile", value: "768px", use: "@media (max-width: 768px)" },
                                    { name: "Tablet", var: "--breakpoint-tablet", value: "1024px", use: "@media (max-width: 1024px)" },
                                    { name: "Desktop", var: "--breakpoint-desktop", value: "1280px", use: "@media (min-width: 1280px)" },
                                ].map((item) => (
                                    <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-body-md-semibold text-fg-strong">{item.name}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                {item.var}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-main font-mono">
                                                {item.value}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-caption-md text-fg-muted font-mono">{item.use}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Form Heights */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Form Heights</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Alturas padronizadas para inputs, buttons e outros elementos de formulário.
                        Valores ajustam automaticamente em mobile via media query.
                    </p>

                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Nome</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Desktop</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Mobile</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { name: "XXS", var: "--height-form-xxs", desktop: "26px", mobile: "22px", use: "Tags, badges" },
                                    { name: "XS", var: "--height-form-xs", desktop: "36px", mobile: "30px", use: "Inputs compactos" },
                                    { name: "SM", var: "--height-form-sm", desktop: "40px", mobile: "34px", use: "⭐ Inputs mobile" },
                                    { name: "MD", var: "--height-form-md", desktop: "46px", mobile: "38px", use: "⭐ Inputs desktop" },
                                    { name: "LG", var: "--height-form-lg", desktop: "52px", mobile: "44px", use: "Inputs grandes" },
                                    { name: "XL", var: "--height-form-xl", desktop: "60px", mobile: "52px", use: "Hero CTAs" },
                                ].map((item) => (
                                    <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <div
                                                style={{ height: item.desktop }}
                                                className="bg-bg-primary rounded-lg flex items-center justify-center px-4 w-32"
                                            >
                                                <span className="text-caption-sm text-fg-on-primary font-semibold">
                                                    {item.desktop}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-body-md-semibold text-fg-strong">{item.name}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                {item.var}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-main font-mono">
                                                {item.desktop}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-warning font-mono">
                                                {item.mobile}
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
                </section>

                {/* Border Radius */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Border Radius</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Valores de border-radius para elementos arredondados.
                        Valores ajustam automaticamente em mobile via media query.
                    </p>

                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Nome</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Variável CSS</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Desktop</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Mobile</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { name: "SM", var: "--radius-sm", desktop: "10px", mobile: "6px", use: "Badges, tags" },
                                    { name: "Base", var: "--radius-base", desktop: "14px", mobile: "8px", use: "⭐ Inputs, buttons" },
                                    { name: "LG", var: "--radius-lg", desktop: "18px", mobile: "10px", use: "Cards, modais" },
                                    { name: "XL", var: "--radius-xl", desktop: "32px", mobile: "14px", use: "Hero sections" },
                                ].map((item) => (
                                    <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <div
                                                style={{ borderRadius: item.desktop }}
                                                className="bg-bg-primary h-16 w-24 flex items-center justify-center"
                                            >
                                                <span className="text-caption-sm text-fg-on-primary font-semibold">
                                                    {item.desktop}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-body-md-semibold text-fg-strong">{item.name}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                {item.var}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-main font-mono">
                                                {item.desktop}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-warning font-mono">
                                                {item.mobile}
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
                </section>

                {/* Examples */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Exemplos de Uso</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Input Examples */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Inputs</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-caption-md text-fg-muted block mb-2">Small (40px)</label>
                                    <input
                                        type="text"
                                        placeholder="Input pequeno"
                                        className="w-full px-4 border border-border rounded-lg text-body-sm-medium bg-bg-background text-fg-main"
                                        style={{ height: '40px', borderRadius: 'var(--radius-base)' }}
                                    />
                                </div>
                                <div>
                                    <label className="text-caption-md text-fg-muted block mb-2">Medium (46px)</label>
                                    <input
                                        type="text"
                                        placeholder="Input médio"
                                        className="w-full px-4 border border-border rounded-lg text-body-md-medium bg-bg-background text-fg-main"
                                        style={{ height: '46px', borderRadius: 'var(--radius-base)' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Button Examples */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">Buttons</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-caption-md text-fg-muted block mb-2">Small (40px)</label>
                                    <button
                                        className="bg-bg-primary text-fg-on-primary text-button-sm px-6"
                                        style={{ height: '40px', borderRadius: 'var(--radius-base)' }}
                                    >
                                        Button Small
                                    </button>
                                </div>
                                <div>
                                    <label className="text-caption-md text-fg-muted block mb-2">Medium (46px)</label>
                                    <button
                                        className="bg-bg-primary text-fg-on-primary text-button-md px-6"
                                        style={{ height: '46px', borderRadius: 'var(--radius-base)' }}
                                    >
                                        Button Medium
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
