"use client";

import { Button } from "@/components/shadcn/button";
import { User, Check, AlertCircle, X } from "lucide-react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function ButtonPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Button"
                description="Componente de botão com múltiplas variantes - extraído do Figma com tokens do design system"
                links={[
                    { label: "Documentação Shadcn UI", href: "https://ui.shadcn.com/docs/components/button" },
                    { label: "Radix UI Slot", href: "https://radix-ui.com/primitives/docs/components/slot" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Button } from "@/components/shadcn/button";`}
                        exampleCode={`<Button variant="default">Button</Button>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Variantes de Cores">
                    <StyleguideExample
                        title="Default (Sólido)"
                        code={`<Button color="primary" variant="default">Primary</Button>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <Button color="primary" variant="default" size="lg" startIcon={<User />} endIcon={<User />}>
                                Primary
                            </Button>
                            <Button color="secondary" variant="default" size="lg" startIcon={<User />} endIcon={<User />}>
                                Secondary
                            </Button>
                            <Button color="warning" variant="default" size="lg" startIcon={<AlertCircle />} endIcon={<User />}>
                                Warning
                            </Button>
                            <Button color="critical" variant="default" size="lg" startIcon={<X />} endIcon={<User />}>
                                Critical
                            </Button>
                        </div>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Soft (Sutil)"
                        code={`<Button color="primary" variant="soft">Primary</Button>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <Button color="primary" variant="soft" size="lg" startIcon={<User />} endIcon={<User />}>
                                Primary
                            </Button>
                            <Button color="secondary" variant="soft" size="lg" startIcon={<User />} endIcon={<User />}>
                                Secondary
                            </Button>
                            <Button color="warning" variant="soft" size="lg" startIcon={<AlertCircle />} endIcon={<User />}>
                                Warning
                            </Button>
                            <Button color="critical" variant="soft" size="lg" startIcon={<X />} endIcon={<User />}>
                                Critical
                            </Button>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Tamanhos">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Tamanhos extraídos do Figma: MD (46px), LG (52px), XL (60px)
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <div className="flex flex-wrap items-start gap-4">
                            <div className="flex flex-col gap-2">
                                <Button color="primary" size="md" startIcon={<User />} endIcon={<User />}>
                                    Medium (46px)
                                </Button>
                                <code className="text-caption-sm text-fg-muted">size="md"</code>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button color="primary" size="lg" startIcon={<User />} endIcon={<User />}>
                                    Large (52px)
                                </Button>
                                <code className="text-caption-sm text-fg-muted">size="lg"</code>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button color="primary" size="xl" startIcon={<User />} endIcon={<User />}>
                                    X-Large (60px)
                                </Button>
                                <code className="text-caption-sm text-fg-muted">size="xl"</code>
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Com Ícones">
                    <StyleguideExample
                        code={`<Button startIcon={<User />} endIcon={<Check />}>Both Icons</Button>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <Button color="primary" size="lg" startIcon={<User />}>
                                Start Icon
                            </Button>
                            <Button color="primary" size="lg" endIcon={<Check />}>
                                End Icon
                            </Button>
                            <Button color="primary" size="lg" startIcon={<User />} endIcon={<Check />}>
                                Both Icons
                            </Button>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Icon Buttons (onlyIcon)">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Botões quadrados apenas com ícone: MD (46×46), LG (52×52), XL (60×60)
                    </p>
                    <StyleguideExample
                        code={`<Button size="lg" onlyIcon><User /></Button>`}
                    >
                        <div className="flex flex-wrap items-start gap-4">
                            <div className="flex flex-col gap-2 items-center">
                                <Button color="primary" size="md" onlyIcon>
                                    <User />
                                </Button>
                                <code className="text-caption-sm text-fg-muted">MD (46×46)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Button color="primary" size="lg" onlyIcon>
                                    <User />
                                </Button>
                                <code className="text-caption-sm text-fg-muted">LG (52×52)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Button color="primary" size="xl" onlyIcon>
                                    <User />
                                </Button>
                                <code className="text-caption-sm text-fg-muted">XL (60×60)</code>
                            </div>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Estado de Loading">
                    <StyleguideExample
                        code={`<Button loading>Loading...</Button>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <Button color="primary" size="lg" loading>
                                Loading...
                            </Button>
                            <Button color="secondary" size="lg" loading>
                                Loading...
                            </Button>
                            <Button color="warning" size="lg" loading>
                                Loading...
                            </Button>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Todas as Combinações">
                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Cor</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Default</th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Soft</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-bg-subtle">
                                    <td className="px-6 py-4 text-body-sm-semibold text-fg-strong">Primary</td>
                                    <td className="px-6 py-4">
                                        <Button color="primary" variant="default" size="md">Button</Button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button color="primary" variant="soft" size="md">Button</Button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-bg-subtle">
                                    <td className="px-6 py-4 text-body-sm-semibold text-fg-strong">Secondary</td>
                                    <td className="px-6 py-4">
                                        <Button color="secondary" variant="default" size="md">Button</Button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button color="secondary" variant="soft" size="md">Button</Button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-bg-subtle">
                                    <td className="px-6 py-4 text-body-sm-semibold text-fg-strong">Warning</td>
                                    <td className="px-6 py-4">
                                        <Button color="warning" variant="default" size="md">Button</Button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button color="warning" variant="soft" size="md">Button</Button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-bg-subtle">
                                    <td className="px-6 py-4 text-body-sm-semibold text-fg-strong">Critical</td>
                                    <td className="px-6 py-4">
                                        <Button color="critical" variant="default" size="md">Button</Button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button color="critical" variant="soft" size="md">Button</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "color", type: "primary | secondary | warning | critical", defaultValue: "primary", description: "Cor do botão" },
                            { prop: "variant", type: "default | soft", defaultValue: "default", description: "Variante visual" },
                            { prop: "size", type: "md | lg | xl", defaultValue: "lg", description: "Tamanho (46px | 52px | 60px)" },
                            { prop: "onlyIcon", type: "boolean", defaultValue: "false", description: "Botão quadrado apenas com ícone" },
                            { prop: "startIcon", type: "ReactNode", defaultValue: "-", description: "Ícone à esquerda" },
                            { prop: "endIcon", type: "ReactNode", defaultValue: "-", description: "Ícone à direita" },
                            { prop: "loading", type: "boolean", defaultValue: "false", description: "Mostra spinner de loading" },
                            { prop: "disabled", type: "boolean", defaultValue: "false", description: "Desabilita o botão" },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
