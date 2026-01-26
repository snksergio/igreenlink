export default function RadiusPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Border Radius
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Foundation
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Valores de arredondamento para suavizar elementos da interface
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Tokens de Radius</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/primitives/sizes.css</code>.
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
                                    { name: "Base", var: "--radius-base", desktop: "14px", mobile: "8px", use: "⭐ Inputs, buttons padrão" },
                                    { name: "LG", var: "--radius-lg", desktop: "18px", mobile: "10px", use: "Cards, modais" },
                                    { name: "XL", var: "--radius-xl", desktop: "32px", mobile: "14px", use: "Cards grandes, hero" },
                                ].map((item) => (
                                    <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <div
                                                style={{ borderRadius: item.desktop }}
                                                className="bg-bg-primary h-16 w-24 flex items-center justify-center border border-border-primary"
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

                {/* Visual Examples */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Exemplos Visuais</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div
                                className="bg-bg-primary h-24 w-full mb-3"
                                style={{ borderRadius: 'var(--radius-sm)' }}
                            />
                            <p className="text-body-sm-semibold text-fg-strong">radius-sm</p>
                            <p className="text-caption-sm text-fg-muted">Badges, chips</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-bg-primary h-24 w-full mb-3"
                                style={{ borderRadius: 'var(--radius-base)' }}
                            />
                            <p className="text-body-sm-semibold text-fg-strong">radius-base</p>
                            <p className="text-caption-sm text-fg-muted">Inputs, buttons</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-bg-primary h-24 w-full mb-3"
                                style={{ borderRadius: 'var(--radius-lg)' }}
                            />
                            <p className="text-body-sm-semibold text-fg-strong">radius-lg</p>
                            <p className="text-caption-sm text-fg-muted">Cards, modais</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-bg-primary h-24 w-full mb-3"
                                style={{ borderRadius: 'var(--radius-xl)' }}
                            />
                            <p className="text-body-sm-semibold text-fg-strong">radius-xl</p>
                            <p className="text-caption-sm text-fg-muted">Hero sections</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
