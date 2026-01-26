"use client";

import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function InputPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Input"
                description="Campos de entrada de texto com validação e múltiplos estados."
                links={[
                    { label: "Shadcn UI", href: "https://ui.shadcn.com/docs/components/input" }
                ]}
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Input } from "@/components/shadcn/input";`}
                        exampleCode={`<Input placeholder="Digite seu texto..." />`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Tamanhos">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StyleguideExample
                            title="Large (Default - 52px)"
                            subtitle='size="default" | "lg"'
                            code={`<Input size="default" placeholder="Input Large" />`}
                        >
                            <div className="space-y-2">
                                <Label>Large</Label>
                                <Input size="default" placeholder="Input Large" />
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Medium (46px)"
                            subtitle='size="md"'
                            code={`<Input size="md" placeholder="Input Medium" />`}
                        >
                            <div className="space-y-2">
                                <Label>Medium</Label>
                                <Input size="md" placeholder="Input Medium" />
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Small (40px)"
                            subtitle='size="sm"'
                            code={`<Input size="sm" placeholder="Input Small" />`}
                        >
                            <div className="space-y-2">
                                <Label>Small</Label>
                                <Input size="sm" placeholder="Input Small" />
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Estados de Validação">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <StyleguideExample
                            title="Default"
                            code={`<Input placeholder="Digite algo..." />`}
                        >
                            <div className="space-y-2">
                                <Label>Default</Label>
                                <Input placeholder="Digite algo..." />
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Disabled"
                            code={`<Input disabled placeholder="Desabilitado" />`}
                        >
                            <div className="space-y-2">
                                <Label>Disabled</Label>
                                <Input disabled placeholder="Desabilitado" />
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Error State"
                            code={`<div className="space-y-2">
  <Label className="text-fg-critical">Error State</Label>
  <Input status="error" defaultValue="Invalid" />
  <p className="text-fg-critical">Error message</p>
</div>`}
                        >
                            <div className="space-y-2">
                                <Label className="text-fg-critical">Error State</Label>
                                <Input status="error" placeholder="Erro..." defaultValue="Valor Invalido" />
                                <p className="text-caption-sm text-fg-critical">Mensagem de erro aqui</p>
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Warning State"
                            code={`<Input status="warning" placeholder="Aviso..." />`}
                        >
                            <div className="space-y-2">
                                <Label className="text-fg-warning">Warning State</Label>
                                <Input status="warning" placeholder="Aviso..." />
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Tipos de Dados">
                    <StyleguideExample
                        code={`<Input type="email" placeholder="Email" />`}
                    >
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="Senha" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="number">Number</Label>
                            <Input type="number" id="number" placeholder="123" />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "status", type: `"default" | "error" | "warning"`, defaultValue: `"default"`, description: "Estado visual de validação." },
                            { prop: "size", type: `"default" | "md" | "sm"`, defaultValue: `"default"`, description: "Altura do campo (52px, 46px, 40px)." },
                            { prop: "error", type: "boolean", defaultValue: "-", description: `Legacy prop (mapeia para status="error").` },
                        ]}
                    />
                </StyleguideSection>
            </main>
        </div>
    );
}
