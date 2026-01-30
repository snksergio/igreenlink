"use client";

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/shadcn/input-group";
import { Search, Mail, Eye, Key, CreditCard, ChevronDown } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function InputGroupPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* Header */}
            <header className="border-b border-border bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">Input Group</h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Component
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted mb-6">
                        Estende o Input padrão para permitir ícones, botões e texto adjacentes.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="https://ui.shadcn.com/docs/components/input-group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-body-sm-medium text-fg-brand hover:text-fg-brand-hover transition-colors"
                        >
                            Shadcn UI
                            <ExternalLink className="size-3.5" />
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">

                {/* Usage */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Usage</h2>
                    <div className="rounded-lg border border-border overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-bg-subtle border-b border-border">
                            <span className="text-caption-sm text-fg-muted font-medium">Import</span>
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-border" />
                                <div className="size-2.5 rounded-full bg-border" />
                                <div className="size-2.5 rounded-full bg-border" />
                            </div>
                        </div>
                        <div className="p-4 bg-bg-muted overflow-x-auto">
                            <code className="text-caption-md text-fg-main block font-mono">
                                import &#123; InputGroup, InputGroupInput, InputGroupAddon &#125; from "@/components/shadcn/input-group";
                            </code>
                        </div>
                    </div>
                </section>

                {/* Examples */}
                <section className="space-y-8">
                    <h2 className="text-section-title text-fg-strong">Exemplos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Search Icon (Start) */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Buscar..." />
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupAddon>
    <Search />
  </InputGroupAddon>
  <InputGroupInput />
</InputGroup>`}
                                </code>
                            </div>
                        </div>

                        {/* Email Icon (End) */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupInput placeholder="Email" />
                                <InputGroupAddon align="inline-end">
                                    <Mail />
                                </InputGroupAddon>
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupInput />
  <InputGroupAddon align="inline-end">
    <Mail />
  </InputGroupAddon>
</InputGroup>`}
                                </code>
                            </div>
                        </div>

                        {/* Mixed Addons */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupAddon>
                                    <span className="text-fg-muted">R$</span>
                                </InputGroupAddon>
                                <InputGroupInput placeholder="0,00" />
                                <InputGroupAddon align="inline-end">
                                    <span className="text-caption-sm text-fg-muted">BRL</span>
                                </InputGroupAddon>
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupAddon>R$</InputGroupAddon>
  <InputGroupInput />
  <InputGroupAddon align="inline-end">BRL</InputGroupAddon>
</InputGroup>`}
                                </code>
                            </div>
                        </div>

                        {/* Button Addon */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupInput placeholder="Senha" type="password" />
                                <InputGroupButton size="icon-lg">
                                    <Eye />
                                </InputGroupButton>
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupInput type="password" />
  <InputGroupButton size="icon-lg">
    <Eye />
  </InputGroupButton>
</InputGroup>`}
                                </code>
                            </div>
                        </div>

                        {/* Text Prefix */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupText>https://</InputGroupText>
                                <InputGroupInput placeholder="igreen.com.br" />
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupText>https://</InputGroupText>
  <InputGroupInput placeholder="..." />
</InputGroup>`}
                                </code>
                            </div>
                        </div>

                        {/* Dropdown Style */}
                        <div className="space-y-4">
                            <InputGroup>
                                <InputGroupButton size="lg-left">
                                    <CreditCard className="size-4" />
                                    Cartão
                                    <ChevronDown className="size-3 ml-1 opacity-50" />
                                </InputGroupButton>
                                <InputGroupInput placeholder="Número do cartão" />
                            </InputGroup>
                            <div className="p-4 bg-bg-muted rounded-md border border-border">
                                <code className="text-caption-sm font-mono text-fg-muted block whitespace-pre overflow-x-auto">
                                    {`<InputGroup>
  <InputGroupButton size="lg-left">
    <CreditCard /> Cartão <ChevronDown />
  </InputGroupButton>
  <InputGroupInput placeholder="..." />
</InputGroup>`}
                                </code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* States */}
                < section >
                    <h2 className="text-section-title text-fg-strong mb-6">Estados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Error State</span>
                            <div className="space-y-1">
                                <InputGroup status="error">
                                    <InputGroupAddon>
                                        <Key />
                                    </InputGroupAddon>
                                    <InputGroupInput placeholder="API Key" defaultValue="invalid_token" />
                                </InputGroup>
                                <p className="text-caption-sm text-fg-critical">Token inválido</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Warning State</span>
                            <div className="space-y-1">
                                <InputGroup status="warning">
                                    <InputGroupAddon>
                                        <Key />
                                    </InputGroupAddon>
                                    <InputGroupInput placeholder="API Key" defaultValue="expiring_token" />
                                </InputGroup>
                                <p className="text-caption-sm text-fg-warning">Token expira em breve</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Focus Ring (Coherence Test)</span>
                            <InputGroup>
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Clique para ver o ring verde..." />
                            </InputGroup>
                        </div>
                    </div>
                </section >

                {/* Sizes */}
                < section >
                    <h2 className="text-section-title text-fg-strong mb-6">Tamanhos (Sizes)</h2>
                    <div className="space-y-8">
                        {/* Default (LG) */}
                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Default (LG - 52px)</span>
                            <InputGroup size="default">
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Tamanho padrão (LG)" />
                            </InputGroup>
                        </div>

                        {/* MD */}
                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Medium (MD - 46px)</span>
                            <InputGroup size="md">
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Tamanho médio (MD)" />
                            </InputGroup>
                        </div>

                        {/* SM */}
                        <div className="space-y-2">
                            <span className="text-caption-sm text-fg-muted">Small (SM - 40px)</span>
                            <InputGroup size="sm">
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Tamanho pequeno (SM)" />
                            </InputGroup>
                        </div>
                    </div>
                </section >
            </main >
        </div >
    );
}
