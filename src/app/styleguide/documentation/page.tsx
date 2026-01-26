import { Code2, FolderTree, Layers, Palette, Terminal, Play, FileCode, Box, Moon, Smartphone } from "lucide-react";


export default function DocumentationPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-border-muted bg-bg-surface sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">
                            Documentation
                        </h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Guide
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted">
                        Visão geral técnica, arquitetura detalhada e padrões do projeto iGreen Link
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">

                {/* 1. Tech Stack & Overview */}
                <section className="space-y-6">
                    <h2 className="text-section-title text-fg-strong flex items-center gap-2 border-b border-border pb-4">
                        <Code2 className="size-5 text-fg-primary" />
                        Tecnologias & Stack
                    </h2>
                    <p className="text-body-md-medium text-fg-muted max-w-4xl">
                        O projeto é construído sobre uma fundação moderna de React, focado em performance,
                        acessibilidade e manutenabilidade. Utilizamos o ecossistema Next.js
                        para renderização híbrida e rotas otimizadas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        <div className="bg-bg-surface p-4 rounded-lg border border-border shadow-sm">
                            <div className="text-caption-sm text-fg-muted mb-1 font-mono">Framework</div>
                            <div className="text-body-lg-semibold text-fg-strong">Next.js 16</div>
                            <div className="text-caption-sm text-fg-success mt-1">App Router</div>
                        </div>
                        <div className="bg-bg-surface p-4 rounded-lg border border-border shadow-sm">
                            <div className="text-caption-sm text-fg-muted mb-1 font-mono">Styling</div>
                            <div className="text-body-lg-semibold text-fg-strong">Tailwind CSS v4</div>
                            <div className="text-caption-sm text-fg-warning mt-1">Alpha / Oxide Engine</div>
                        </div>
                        <div className="bg-bg-surface p-4 rounded-lg border border-border shadow-sm">
                            <div className="text-caption-sm text-fg-muted mb-1 font-mono">UI Base</div>
                            <div className="text-body-lg-semibold text-fg-strong">Shadcn UI</div>
                            <div className="text-caption-sm text-fg-primary mt-1">Component Library</div>
                        </div>
                        <div className="bg-bg-surface p-4 rounded-lg border border-border shadow-sm">
                            <div className="text-caption-sm text-fg-muted mb-1 font-mono">Primitives</div>
                            <div className="text-body-lg-semibold text-fg-strong">Radix UI</div>
                            <div className="text-caption-sm text-fg-info mt-1">Headless UI</div>
                        </div>
                        <div className="bg-bg-surface p-4 rounded-lg border border-border shadow-sm">
                            <div className="text-caption-sm text-fg-muted mb-1 font-mono">Language</div>
                            <div className="text-body-lg-semibold text-fg-strong">TypeScript</div>
                            <div className="text-caption-sm text-fg-info mt-1">Strict Mode</div>
                        </div>
                    </div>
                </section>

                {/* 2. Arquitetura de Tokens */}
                <section className="space-y-8">
                    <h2 className="text-section-title text-fg-strong flex items-center gap-2 border-b border-border pb-4">
                        <Palette className="size-5 text-fg-warning" />
                        Arquitetura de Design Tokens
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Token Structure */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <h3 className="text-body-sm-bold text-fg-muted uppercase mb-4 tracking-wider">Estrutura de Tokens</h3>
                            <pre className="font-mono text-body-sm-medium text-fg-main leading-relaxed">
                                {`themes/default/
├── primitives/
│   ├── colors.css      → Escalas OKLCH (brand, neutral, etc)
│   └── sizes.css       → Heights, radius, breakpoints
│
└── semantic/
    ├── colors.css      → Tokens semânticos + .dark block
    ├── typography.css  → Classes tipográficas + mobile
    ├── utilities.css   → Shadows + dark variants
    ├── compatibility.css → Shadcn compatibility
    └── index.css       → Entry point`}
                            </pre>
                        </div>

                        {/* Token Philosophy */}
                        <div className="space-y-4">
                            <div className="bg-bg-subtle p-4 rounded-lg border border-border">
                                <h4 className="text-body-sm-bold text-fg-strong mb-2">🎨 Primitives</h4>
                                <p className="text-caption-md text-fg-muted">
                                    Valores de baixo nível (OKLCH, pixels). Nunca usados diretamente em componentes.
                                    Servem como base para tokens semânticos.
                                </p>
                            </div>
                            <div className="bg-bg-subtle p-4 rounded-lg border border-border">
                                <h4 className="text-body-sm-bold text-fg-strong mb-2">✨ Semantic</h4>
                                <p className="text-caption-md text-fg-muted">
                                    Tokens com significado contextual (bg-primary, fg-muted).
                                    Usados diretamente via classes Tailwind. Suportam dark mode automaticamente.
                                </p>
                            </div>
                            <div className="bg-bg-subtle p-4 rounded-lg border border-border">
                                <h4 className="text-body-sm-bold text-fg-strong mb-2">📦 Utilities</h4>
                                <p className="text-caption-md text-fg-muted">
                                    Classes utilitárias como shadows e typography.
                                    Aplicadas via className diretamente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Dark Mode & Responsiveness */}
                <section className="space-y-6">
                    <h2 className="text-section-title text-fg-strong flex items-center gap-2 border-b border-border pb-4">
                        <Moon className="size-5 text-fg-info" />
                        Dark Mode & Responsividade
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Dark Mode */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Moon className="size-4 text-fg-primary" />
                                <h3 className="text-body-lg-semibold text-fg-strong">Dark Mode</h3>
                            </div>
                            <p className="text-body-sm-medium text-fg-muted mb-4">
                                Implementado via classe <code className="text-fg-primary bg-bg-primary-subtle px-1.5 py-0.5 rounded">.dark</code> no <code className="text-fg-main">&lt;html&gt;</code>.
                            </p>
                            <div className="bg-bg-muted p-3 rounded font-mono text-xs text-fg-main">
                                {`// Ativar dark mode
document.documentElement.classList.add('dark');

// Desativar
document.documentElement.classList.remove('dark');`}
                            </div>
                            <p className="text-caption-sm text-fg-muted mt-3">
                                Use o ThemeToggle no sidebar para testar.
                            </p>
                        </div>

                        {/* Responsiveness */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Smartphone className="size-4 text-fg-warning" />
                                <h3 className="text-body-lg-semibold text-fg-strong">Responsividade</h3>
                            </div>
                            <p className="text-body-sm-medium text-fg-muted mb-4">
                                Breakpoints definidos como tokens CSS (não usáveis em media queries diretamente).
                            </p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-body-sm-medium">
                                    <span className="text-fg-muted">Mobile</span>
                                    <code className="text-fg-warning">&lt;768px</code>
                                </div>
                                <div className="flex justify-between text-body-sm-medium">
                                    <span className="text-fg-muted">Tablet</span>
                                    <code className="text-fg-info">&lt;1024px</code>
                                </div>
                                <div className="flex justify-between text-body-sm-medium">
                                    <span className="text-fg-muted">Desktop</span>
                                    <code className="text-fg-success">≥1280px</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Arquitetura de Pastas */}
                <section className="space-y-8">
                    <h2 className="text-section-title text-fg-strong flex items-center gap-2 border-b border-border pb-4">
                        <FolderTree className="size-5 text-fg-info" />
                        Arquitetura do Projeto
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Tree View */}
                        <div className="bg-bg-surface border border-border rounded-lg p-6 lg:col-span-1 h-fit sticky top-24">
                            <h3 className="text-body-sm-bold text-fg-muted uppercase mb-4 tracking-wider">Estrutura de Diretórios</h3>
                            <pre className="font-mono text-body-sm-medium text-fg-main leading-relaxed">
                                {`src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── styleguide/
│
├── components/
│   ├── igreen/
│   │   ├── Choice/
│   │   └── index.ts
│   │
│   ├── shadcn/
│   │   ├── button.tsx
│   │   └── index.ts
│   │
│   └── ui/ (Legacy)
│
├── lib/
│   ├── utils.ts
│   └── hooks/
│
└── prompts/ (AI)`}
                            </pre>
                        </div>

                        {/* Detailed Explanations */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* App Router */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-fg-strong">
                                    <Layers className="size-4" />
                                    <h3 className="text-body-lg-semibold">App Directory (src/app)</h3>
                                </div>
                                <p className="text-body-md-medium text-fg-muted">
                                    Seguimos o padrão <span className="text-fg-strong">App Router</span> do Next.js.
                                    Cada pasta representa uma rota.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-body-sm-medium text-fg-muted">
                                    <li>
                                        <code className="text-fg-primary">globals.css</code>: Importa os tokens do <code className="text-fg-main">themes/default</code> e configura Tailwind.
                                    </li>
                                    <li>
                                        <code className="text-fg-primary">layout.tsx</code>: Define a casca da aplicação (Root Layout), fontes e providers globais.
                                    </li>
                                    <li>
                                        <code className="text-fg-primary">styleguide/</code>: Área isolada para documentação viva do design system.
                                    </li>
                                </ul>
                            </div>

                            <hr className="border-border-muted" />

                            {/* Components Architecture */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-fg-strong">
                                    <Box className="size-4" />
                                    <h3 className="text-body-lg-semibold">Components Strategy</h3>
                                </div>
                                <p className="text-body-md-medium text-fg-muted">
                                    Adotamos uma estratégia de componentes híbrida para facilitar a manutenção e evolução:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-bg-subtle p-4 rounded-lg border border-border">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-body-sm-bold text-fg-strong">📁 components/shadcn</span>
                                            <span className="text-caption-xs bg-bg-surface border border-border px-1.5 rounded text-fg-muted">Base</span>
                                        </div>
                                        <p className="text-caption-md text-fg-muted">
                                            Componentes primitivos de baixo nível (Primitive UI).
                                            São extrações diretas ou customizações leves sobre Radix UI.
                                            Ex: <span className="font-mono text-fg-main">Button, Input, Dialog</span>.
                                        </p>
                                    </div>

                                    <div className="bg-bg-subtle p-4 rounded-lg border border-border">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-body-sm-bold text-fg-strong">📁 components/igreen</span>
                                            <span className="text-caption-xs bg-bg-surface border border-border px-1.5 rounded text-fg-success">Custom</span>
                                        </div>
                                        <p className="text-caption-md text-fg-muted">
                                            Componentes proprietários da iGreen Link.
                                            Geralmente são composições de primitivos shadcn.
                                            Ex: <span className="font-mono text-fg-main">Choice, UserCard</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border-muted" />

                            {/* Utilities & AI */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-fg-strong">
                                    <FileCode className="size-4" />
                                    <h3 className="text-body-lg-semibold">Support & Tooling</h3>
                                </div>
                                <ul className="list-disc pl-5 space-y-2 text-body-sm-medium text-fg-muted">
                                    <li>
                                        <span className="text-fg-strong font-semibold">prompts/</span>: Diretório contendo Guidelines para IA.
                                        Arquivos .md que instruem o Assistant sobre como criar páginas e componentes.
                                    </li>
                                    <li>
                                        <span className="text-fg-strong font-semibold">lib/utils.ts</span>: Utilitários essenciais, principalmente a função cn() para combinação de classes.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 5. CLI Commands */}
                <section className="space-y-6">
                    <h2 className="text-section-title text-fg-strong mb-6 flex items-center gap-2 border-b border-border pb-4">
                        <Terminal className="size-5 text-fg-critical" />
                        CLI Reference
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-bg-subtle border border-border rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Play className="size-4 text-fg-success" />
                                <span className="font-bold text-fg-strong">Dev Server</span>
                            </div>
                            <code className="block bg-bg-muted p-3 rounded font-mono text-sm border border-border text-fg-main">npm run dev</code>
                            <p className="text-caption-sm text-fg-muted mt-2">Inicia o servidor local em :3000</p>
                        </div>
                        <div className="bg-bg-subtle border border-border rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Code2 className="size-4 text-fg-info" />
                                <span className="font-bold text-fg-strong">Lint</span>
                            </div>
                            <code className="block bg-bg-muted p-3 rounded font-mono text-sm border border-border text-fg-main">npm run lint</code>
                            <p className="text-caption-sm text-fg-muted mt-2">Verifica erros de padrão de código</p>
                        </div>
                        <div className="bg-bg-subtle border border-border rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Layers className="size-4 text-fg-warning" />
                                <span className="font-bold text-fg-strong">Build</span>
                            </div>
                            <code className="block bg-bg-muted p-3 rounded font-mono text-sm border border-border text-fg-main">npm run build</code>
                            <p className="text-caption-sm text-fg-muted mt-2">Gera o bundle de produção otimizado</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
