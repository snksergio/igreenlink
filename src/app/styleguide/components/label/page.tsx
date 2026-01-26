"use client";

import { Label } from "@/components/shadcn/label";
import { Input } from "@/components/shadcn/input";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function LabelPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Label"
                description="Componente de rótulo acessível para formulários, estilizado conforme Figma (11px Uppercase)."
                links={[
                    { label: "Shadcn UI", href: "https://ui.shadcn.com/docs/components/label" },
                    { label: "Radix UI", href: "https://radix-ui.com/primitives/docs/components/label" }
                ]}
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Label } from "@/components/shadcn/label";`}
                        exampleCode={`<Label htmlFor="email">Email address</Label>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Examples">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <StyleguideExample title="Default">
                            <div className="p-8 border border-border-muted border-dashed rounded flex flex-col items-center justify-center gap-4">
                                <Label>Número da Instalação</Label>
                            </div>
                        </StyleguideExample>

                        <StyleguideExample title="Com Input">
                            <div className="p-8 border border-border-muted border-dashed rounded flex flex-col justify-center gap-4">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="email-2">Email</Label>
                                    <Input type="email" id="email-2" placeholder="Email" />
                                </div>
                            </div>
                        </StyleguideExample>
                    </div>

                    <div className="mt-8">
                        <StyleguideExample
                            title="Cores Customizadas"
                            subtitle="O Label aceita classes utilitárias para sobrescrever a cor padrão (#7e8994)."
                            code={`<Label className="text-fg-critical">Critical Label</Label>`}
                        >
                            <div className="p-8 border border-border-muted border-dashed rounded flex flex-wrap gap-8 items-center">
                                <div className="space-y-1">
                                    <Label className="text-fg-primary">Primary Color</Label>
                                    <p className="text-xs text-muted-foreground">text-fg-primary</p>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-fg-success">Success Color</Label>
                                    <p className="text-xs text-muted-foreground">text-fg-success</p>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-fg-critical">Critical Color</Label>
                                    <p className="text-xs text-muted-foreground">text-fg-critical</p>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-blue-500">Arbitrary Blue</Label>
                                    <p className="text-xs text-muted-foreground">text-blue-500</p>
                                </div>
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "asChild", type: "boolean", defaultValue: "false", description: "Muda o elemento renderizado para o filho (Slot pattern)." },
                            { prop: "htmlFor", type: "string", defaultValue: "-", description: "ID do elemento de input associado." },
                        ]}
                    />
                </StyleguideSection>

            </main>
        </div>
    );
}
