"use client";

import { Icon } from "@/components/igreen/Icon";
import { icons } from "@/components/igreen/Icon/icons";
import { IconName } from "@/components/igreen/Icon/icon.types";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function IconPage() {
    const iconList = Object.keys(icons).sort() as IconName[];

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Icon"
                description="Componente para renderização de ícones SVG com suporte a tamanhos predefinidos e cores personalizadas."
                links={[
                    { label: "Figma Design", href: "#" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Icon } from "@/components/igreen/Icon";`}
                        exampleCode={`// <Icon name="line-id" size="md" />`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Tamanhos (Presets)">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Tamanhos seguem os tokens do design system: SM (16px), MD (20px), LG (24px), XL (32px).
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <div className="flex flex-wrap items-end gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <Icon name="line-id" size="sm" />
                                <code className="text-caption-sm text-fg-muted">size="sm" (16px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Icon name="line-id" size="md" />
                                <code className="text-caption-sm text-fg-muted">size="md" (20px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Icon name="line-id" size="lg" />
                                <code className="text-caption-sm text-fg-muted">size="lg" (24px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Icon name="line-id" size="xl" />
                                <code className="text-caption-sm text-fg-muted">size="xl" (32px)</code>
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Tamanho Arbitrário">
                    <StyleguideExample
                        title="Tamanho Customizado"
                        code={`<Icon name="line-id" size="48px" />`}
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <Icon name="line-id" size="48px" />
                            <code className="text-caption-sm text-fg-muted">size="48px"</code>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Cores">
                    <StyleguideExample
                        title="Cor Customizada"
                        code={`<div className="flex gap-4">
  <Icon name="line-help" size="lg" className="text-fg-primary" />
  <Icon name="line-help" size="lg" color="red" />
  <Icon name="line-help" size="lg" color="#10B981" />
</div>`}
                    >
                        <div className="flex gap-4 items-center">
                            <div className="flex flex-col items-center gap-2">
                                <Icon name="line-help" size="lg" className="text-fg-primary" />
                                <span className="text-caption-sm text-fg-muted">via className</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Icon name="line-help" size="lg" color="red" />
                                <span className="text-caption-sm text-fg-muted">prop color="red"</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Icon name="line-help" size="lg" color="#10B981" />
                                <span className="text-caption-sm text-fg-muted">prop color="#10B981"</span>
                            </div>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title={`Ícones Disponíveis (${iconList.length})`}>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {iconList.map((iconName) => (
                                <div key={iconName} className="flex flex-col gap-2 items-center">
                                    <Icon name={iconName} size="lg" />
                                    <code className="text-caption-sm text-fg-muted break-all text-center">{iconName}</code>
                                </div>
                            ))}
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "name",
                                type: "IconName",
                                defaultValue: "-",
                                description: "Nome do ícone (chave do mapa de ícones)."
                            },
                            {
                                prop: "size",
                                type: "'sm' | 'md' | 'lg' | 'xl' | string",
                                defaultValue: "'md'",
                                description: "Tamanho do ícone (preset ou valor CSS arbitrário)."
                            },
                            {
                                prop: "color",
                                type: "string",
                                defaultValue: "currentColor",
                                description: "Cor do ícone (CSS color). Se não passado, herda do pai (currentColor)."
                            },
                            {
                                prop: "className",
                                type: "string",
                                defaultValue: "-",
                                description: "Classes CSS adicionais."
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
