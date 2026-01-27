"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shadcn/tabs";
import { User, Settings, CreditCard, Bell } from "lucide-react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function TabsPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Tabs"
                description="Componente de navegacao em abas para organizar conteudo em secoes alternaveis."
                links={[
                    { label: "Radix UI Tabs", href: "https://radix-ui.com/primitives/docs/components/tabs" },
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2485-1500&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shadcn/tabs";`}
                        exampleCode={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplo Padrao">
                    <StyleguideExample
                        title="Tabs com 2 opcoes"
                        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Conta</TabsTrigger>
    <TabsTrigger value="password">Senha</TabsTrigger>
  </TabsList>
</Tabs>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <Tabs defaultValue="account" className="w-full max-w-md">
                                <TabsList className="w-full">
                                    <TabsTrigger value="account">Conta</TabsTrigger>
                                    <TabsTrigger value="password">Senha</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">
                                    <p className="text-body-md-medium text-fg-main pt-4">
                                        Configuracoes da conta.
                                    </p>
                                </TabsContent>
                                <TabsContent value="password">
                                    <p className="text-body-md-medium text-fg-main pt-4">
                                        Alterar senha.
                                    </p>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Multiplas Abas">
                    <StyleguideExample
                        title="Tabs com 4 opcoes"
                        code={`<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Perfil</TabsTrigger>
    <TabsTrigger value="settings">Config</TabsTrigger>
    <TabsTrigger value="notifications">Alertas</TabsTrigger>
    <TabsTrigger value="security">Seguranca</TabsTrigger>
  </TabsList>
</Tabs>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <Tabs defaultValue="profile" className="w-full">
                                <TabsList className="w-full">
                                    <TabsTrigger value="profile">Perfil</TabsTrigger>
                                    <TabsTrigger value="settings">Config</TabsTrigger>
                                    <TabsTrigger value="notifications">Alertas</TabsTrigger>
                                    <TabsTrigger value="security">Seguranca</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Com Icones">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Ao usar icones, utilize <code className="text-caption-sm bg-bg-muted px-1.5 py-0.5 rounded">size-[18px]</code> e
                        <code className="text-caption-sm bg-bg-muted px-1.5 py-0.5 rounded ml-1">currentColor</code> para
                        que o icone siga a cor do texto (verde quando ativo, cinza quando inativo).
                    </p>

                    <StyleguideExample
                        title="Icone + Texto"
                        code={`<TabsTrigger value="account">
  <User className="size-[18px]" />
  Conta
</TabsTrigger>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <Tabs defaultValue="account" className="w-full max-w-lg">
                                <TabsList className="w-full">
                                    <TabsTrigger value="account">
                                        <User className="size-[18px]" />
                                        Conta
                                    </TabsTrigger>
                                    <TabsTrigger value="password">
                                        <CreditCard className="size-[18px]" />
                                        Pagamento
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">
                                    <p className="text-body-md-medium text-fg-main pt-4">
                                        Configuracoes da conta do usuario.
                                    </p>
                                </TabsContent>
                                <TabsContent value="password">
                                    <p className="text-body-md-medium text-fg-main pt-4">
                                        Metodos de pagamento.
                                    </p>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Multiplas abas com icones"
                        code={`<TabsList>
  <TabsTrigger value="profile">
    <User className="size-[18px]" />
    Perfil
  </TabsTrigger>
  <TabsTrigger value="settings">
    <Settings className="size-[18px]" />
    Config
  </TabsTrigger>
</TabsList>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <Tabs defaultValue="profile" className="w-full">
                                <TabsList className="w-full">
                                    <TabsTrigger value="profile">
                                        <User className="size-[18px]" />
                                        Perfil
                                    </TabsTrigger>
                                    <TabsTrigger value="settings">
                                        <Settings className="size-[18px]" />
                                        Config
                                    </TabsTrigger>
                                    <TabsTrigger value="payments">
                                        <CreditCard className="size-[18px]" />
                                        Pagamentos
                                    </TabsTrigger>
                                    <TabsTrigger value="notifications">
                                        <Bell className="size-[18px]" />
                                        Alertas
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </StyleguideExample>

                    <div className="bg-bg-muted border border-border rounded-lg p-4 mt-4">
                        <p className="text-body-sm-semibold text-fg-strong mb-2">Regras para icones:</p>
                        <ul className="list-disc pl-5 space-y-1 text-body-sm-medium text-fg-main">
                            <li>Tamanho fixo: <code className="text-caption-sm bg-bg-surface px-1.5 py-0.5 rounded">size-[18px]</code></li>
                            <li>Cor: herda automaticamente do texto via <code className="text-caption-sm bg-bg-surface px-1.5 py-0.5 rounded">currentColor</code></li>
                            <li>Ativo: icone fica verde (<code className="text-caption-sm bg-bg-surface px-1.5 py-0.5 rounded">fg-primary</code>)</li>
                            <li>Inativo: icone fica cinza (<code className="text-caption-sm bg-bg-surface px-1.5 py-0.5 rounded">fg-muted</code>)</li>
                        </ul>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Somente Icone">
                    <StyleguideExample
                        title="Tabs apenas com icones"
                        code={`<TabsTrigger value="profile">
  <User className="size-[18px]" />
</TabsTrigger>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6">
                            <Tabs defaultValue="profile" className="w-full max-w-xs">
                                <TabsList className="w-full">
                                    <TabsTrigger value="profile">
                                        <User className="size-[18px]" />
                                    </TabsTrigger>
                                    <TabsTrigger value="settings">
                                        <Settings className="size-[18px]" />
                                    </TabsTrigger>
                                    <TabsTrigger value="payments">
                                        <CreditCard className="size-[18px]" />
                                    </TabsTrigger>
                                    <TabsTrigger value="notifications">
                                        <Bell className="size-[18px]" />
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <h3 className="text-body-lg-semibold text-fg-strong mb-4">Tabs (Root)</h3>
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "defaultValue",
                                type: "string",
                                defaultValue: "-",
                                description: "Valor inicial da aba ativa"
                            },
                            {
                                prop: "value",
                                type: "string",
                                defaultValue: "-",
                                description: "Valor controlado da aba ativa"
                            },
                            {
                                prop: "onValueChange",
                                type: "(value: string) => void",
                                defaultValue: "-",
                                description: "Callback de mudanca"
                            },
                        ]}
                    />

                    <h3 className="text-body-lg-semibold text-fg-strong mt-8 mb-4">TabsTrigger</h3>
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "value",
                                type: "string",
                                defaultValue: "-",
                                description: "Valor unico da aba"
                            },
                            {
                                prop: "disabled",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Desabilita a aba"
                            },
                        ]}
                    />
                </StyleguideSection>

            </div>
        </div>
    );
}
