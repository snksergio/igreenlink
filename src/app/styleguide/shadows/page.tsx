export default function ShadowsPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Shadows
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Foundation
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Sistema de sombras e elevação para hierarquia visual
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                {/* Box Shadows */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Box Shadows</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Definidos em <code className="px-2 py-1 bg-bg-muted rounded">themes/default/semantic/utilities.css</code>.
                        Utilize sombras para criar profundidade e destacar elementos.
                    </p>

                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden mb-8">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Preview</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Classe CSS</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Uso</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { name: "XS", class: "shadows-boxshadow-xs", use: "Elementos sutis" },
                                    { name: "SM", class: "shadows-boxshadow-sm", use: "Inputs, badges" },
                                    { name: "Base", class: "shadows-boxshadow-base", use: "⭐ Cards, botões" },
                                    { name: "XL", class: "shadows-boxshadow-xl", use: "Modais, dropdowns" },
                                ].map((item) => (
                                    <tr key={item.name} className="hover:bg-bg-subtle transition-colors">
                                        <td className="px-6 py-4">
                                            <div className={`bg-bg-surface p-4 rounded-lg ${item.class} border border-border-muted w-24 h-16 flex items-center justify-center`}>
                                                <span className="text-caption-sm text-fg-main font-semibold">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="text-body-sm-medium text-fg-primary bg-bg-primary-subtle px-2 py-1 rounded">
                                                .{item.class}
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

                    {/* Visual Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-xs border border-border-muted">
                            <p className="text-body-sm-semibold text-fg-strong">Shadow XS</p>
                            <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-xs</p>
                        </div>
                        <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-sm border border-border-muted">
                            <p className="text-body-sm-semibold text-fg-strong">Shadow SM</p>
                            <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-sm</p>
                        </div>
                        <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-base border border-border-muted">
                            <p className="text-body-sm-semibold text-fg-strong">Shadow Base</p>
                            <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-base</p>
                        </div>
                        <div className="bg-bg-surface p-6 rounded-lg shadows-boxshadow-xl border border-border-muted">
                            <p className="text-body-sm-semibold text-fg-strong">Shadow XL</p>
                            <p className="text-caption-sm text-fg-muted mt-1">.shadows-boxshadow-xl</p>
                        </div>
                    </div>
                </section>

                {/* Dark Mode */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Dark Mode Shadows</h2>
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        No dark mode, as sombras precisam de maior opacidade para serem visíveis em fundos escuros.
                        O sistema aplica automaticamente variantes mais intensas via <code className="px-2 py-1 bg-bg-muted rounded">.dark .shadows-*</code>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Light Mode */}
                        <div className="bg-neutral-0 border border-neutral-200 rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-neutral-950 mb-4">☀️ Light Mode</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-neutral-200" style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' }}>
                                    <p className="text-caption-sm text-neutral-600">SM: 5% opacity</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-neutral-200" style={{ boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                                    <p className="text-caption-sm text-neutral-600">XL: 10% opacity</p>
                                </div>
                            </div>
                        </div>

                        {/* Dark Mode */}
                        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
                            <h3 className="text-body-lg-semibold text-neutral-0 mb-4">🌙 Dark Mode</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800" style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                    <p className="text-caption-sm text-neutral-400">SM: 50% opacity</p>
                                </div>
                                <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800" style={{ boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                                    <p className="text-caption-sm text-neutral-400">XL: 50% opacity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usage */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Como Usar</h2>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <pre className="bg-bg-muted p-4 rounded-lg font-mono text-sm text-fg-main overflow-x-auto">
                            {`/* Aplique a classe diretamente no elemento */
<div class="shadows-boxshadow-base">
  Card com sombra
</div>

/* Combine com outras classes */
<div class="bg-bg-surface rounded-lg shadows-boxshadow-xl">
  Modal elevado
</div>`}
                        </pre>
                    </div>
                </section>
            </div>
        </div>
    );
}
