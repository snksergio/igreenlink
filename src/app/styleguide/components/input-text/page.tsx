"use client";

import { InputText } from "@/components/igreen/InputText";
import { ExternalLink, Mail, User, Lock, Search } from "lucide-react";

export default function InputTextPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* 1. HEADER */}
            <header className="border-b border-border bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">InputText</h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            iGreen Component
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted mb-6">
                        Campo de entrada de texto padronizado com suporte a status, ícones e estados de carregamento.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="flex items-center gap-1.5 text-body-sm-medium text-fg-brand hover:text-fg-brand-hover transition-colors"
                        >
                            Figma
                            <ExternalLink className="size-3.5" />
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">

                {/* 2. USAGE SECTION */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Uso Básico</h2>
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
                                    import &#123; InputText &#125; from "@/components/igreen/InputText";
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
                            <div className="p-4 bg-bg-muted">
                                <code className="text-caption-md text-fg-main block font-mono whitespace-pre text-sm leading-relaxed">
                                    {`<InputText
  label="Nome Completo"
  placeholder="Digite seu nome"
  helperText="Seu nome público"
  startIcon={<User />}
/>`}
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EXAMPLES / VARIANTS */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Variações e Exemplos</h2>

                    <div className="space-y-8">
                        {/* States */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Status</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText
                                    label="Default"
                                    placeholder="Placeholder..."
                                    helperText="Estado padrão do componente."
                                />
                                <InputText
                                    label="Error"
                                    status="error"
                                    startIcon={<Mail />}
                                    defaultValue="Valor inválido"
                                    helperText="Este campo é obrigatório."
                                />
                                <InputText
                                    label="Warning"
                                    status="warning"
                                    startIcon={<Lock />}
                                    defaultValue="Atenção necessária"
                                    helperText="A senha é fraca."
                                />
                                <InputText
                                    label="Completed"
                                    status="completed"
                                    startIcon={<User />}
                                    defaultValue="Valor válido"
                                    helperText="Tudo certo!"
                                />
                            </div>
                            <div className="p-4 bg-bg-muted rounded-md mt-4 border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre">
                                    {`<InputText label="Error" status="error" startIcon={<Mail />} helperText="..." />
<InputText label="Warning" status="warning" startIcon={<Lock />} helperText="..." />
<InputText label="Completed" status="completed" startIcon={<User />} helperText="..." />`}
                                </code>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Ícones e Loading</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText
                                    label="Com Start Icon"
                                    startIcon={<Mail />}
                                    placeholder="usuario@email.com"
                                />
                                <InputText
                                    label="Com End Icon"
                                    endIcon={<Search />}
                                    placeholder="Buscar..."
                                />
                                <InputText
                                    label="Loading State"
                                    isLoading
                                    startIcon={<Lock />}
                                    placeholder="Carregando dados..."
                                />
                                <InputText
                                    label="Disabled"
                                    disabled
                                    startIcon={<User />}
                                    defaultValue="Campo desabilitado"
                                />
                            </div>
                            <div className="p-4 bg-bg-muted rounded-md mt-4 border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre">
                                    {`<InputText label="Start Icon" startIcon={<Mail />} />
<InputText label="End Icon" endIcon={<Search />} />
<InputText label="Loading" isLoading startIcon={<Lock />} />`}
                                </code>
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Tamanhos</h3>
                            <div className="space-y-6 max-w-md">
                                <InputText
                                    label="Medium (Default - 46px)"
                                    size="md"
                                    placeholder="Tamanho médio"
                                />
                                <InputText
                                    label="Large (LG - 52px)"
                                    size="lg"
                                    placeholder="Tamanho grande"
                                />
                            </div>
                            <div className="p-4 bg-bg-muted rounded-md mt-4 border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre">
                                    {`<InputText size="md" label="Medium" />
<InputText size="lg" label="Large" />`}
                                </code>
                            </div>
                        </div>

                        {/* Data Types */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Tipos de Dado</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText
                                    label="E-mail"
                                    type="email"
                                    placeholder="exemplo@email.com"
                                />
                                <InputText
                                    label="Senha"
                                    type="password"
                                    startIcon={<Lock />}
                                    placeholder="••••••••"
                                />
                                <InputText
                                    label="Número"
                                    type="number"
                                    placeholder="123"
                                    defaultValue="0"
                                />
                                <InputText
                                    label="Data"
                                    type="date"
                                />
                            </div>
                            <div className="p-4 bg-bg-muted rounded-md mt-4 border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre">
                                    {`<InputText type="email" label="E-mail" /> {/* Auto Mail Icon */}
<InputText type="password" label="Senha" startIcon={<Lock />} />
<InputText type="number" label="Número" />
<InputText type="date" label="Data" />`}
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. PROPS TABLE */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Props</h2>
                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Prop</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Type</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Default</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="px-6 py-4"><code className="text-fg-primary">label</code></td>
                                    <td className="px-6 py-4"><code className="text-caption-md">string</code></td>
                                    <td className="px-6 py-4">-</td>
                                    <td className="px-6 py-4 text-body-sm-medium text-fg-muted">Rótulo exibido acima do campo.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4"><code className="text-fg-primary">helperText</code></td>
                                    <td className="px-6 py-4"><code className="text-caption-md">string</code></td>
                                    <td className="px-6 py-4">-</td>
                                    <td className="px-6 py-4 text-body-sm-medium text-fg-muted">Texto de suporte ou mensagem de erro.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4"><code className="text-fg-primary">status</code></td>
                                    <td className="px-6 py-4"><code className="text-caption-md">"default" | "error" | "warning" | "completed"</code></td>
                                    <td className="px-6 py-4"><code>"default"</code></td>
                                    <td className="px-6 py-4 text-body-sm-medium text-fg-muted">Define o estado visual e semântico.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4"><code className="text-fg-primary">isLoading</code></td>
                                    <td className="px-6 py-4"><code className="text-caption-md">boolean</code></td>
                                    <td className="px-6 py-4"><code>false</code></td>
                                    <td className="px-6 py-4 text-body-sm-medium text-fg-muted">Exibe um spinner no final do campo.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4"><code className="text-fg-primary">size</code></td>
                                    <td className="px-6 py-4"><code className="text-caption-md">"md" | "lg"</code></td>
                                    <td className="px-6 py-4"><code>"md"</code></td>
                                    <td className="px-6 py-4 text-body-sm-medium text-fg-muted">Altura do campo.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </main>
        </div>
    );
}
