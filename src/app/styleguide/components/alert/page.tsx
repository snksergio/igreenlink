"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/shadcn/alert";
import { Info, AlertCircle, CheckCircle2, AlertTriangle, Terminal } from "lucide-react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function AlertPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Alert"
                description="Componente de alerta para exibir mensagens importantes ao usuário - Shadcn UI padrão"
                links={[
                    { label: "Documentação Shadcn UI", href: "https://ui.shadcn.com/docs/components/radix/alert" },
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Alert, AlertTitle, AlertDescription } from "@/components/shadcn/alert";`}
                        exampleCode={`<Alert>
  <Info />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Variantes">
                    <StyleguideExample
                        title="Default"
                        code={`<Alert>
  <Info />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert>
                            <Info />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components and dependencies to your app using the cli.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Destructive"
                        code={`<Alert variant="destructive">
  <AlertCircle />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert variant="destructive">
                            <AlertCircle />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Your session has expired. Please log in again.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Casos de Uso">
                    <StyleguideExample
                        title="Informativo"
                        code={`<Alert>
  <Info />
  <AlertTitle>Informação</AlertTitle>
  <AlertDescription>Nova versão disponível.</AlertDescription>
</Alert>`}
                    >
                        <Alert>
                            <Info />
                            <AlertTitle>Informação</AlertTitle>
                            <AlertDescription>
                                Uma nova versão do aplicativo está disponível. Atualize para ter acesso às últimas funcionalidades.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Sucesso"
                        code={`<Alert className="bg-success-50 border-success-200 text-success-950">
  <CheckCircle2 className="text-success-600" />
  <AlertTitle>Sucesso!</AlertTitle>
  <AlertDescription>Operação realizada.</AlertDescription>
</Alert>`}
                    >
                        <Alert className="bg-success-50 border-success-200 text-success-950 [&>svg]:text-success-600">
                            <CheckCircle2 />
                            <AlertTitle>Sucesso!</AlertTitle>
                            <AlertDescription>
                                Sua conta foi criada com sucesso. Bem-vindo ao iGreen!
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Aviso (Warning)"
                        code={`<Alert className="bg-warning-50 border-warning-200 text-warning-950">
  <AlertTriangle className="text-warning-600" />
  <AlertTitle>Atenção</AlertTitle>
  <AlertDescription>Verifique seus dados.</AlertDescription>
</Alert>`}
                    >
                        <Alert className="bg-warning-50 border-warning-200 text-warning-950 [&>svg]:text-warning-600">
                            <AlertTriangle />
                            <AlertTitle>Atenção</AlertTitle>
                            <AlertDescription>
                                Sua assinatura expira em 3 dias. Renove para continuar usando todos os recursos.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Terminal / CLI"
                        code={`<Alert>
  <Terminal />
  <AlertTitle>Terminal</AlertTitle>
  <AlertDescription>npx shadcn@latest add alert</AlertDescription>
</Alert>`}
                    >
                        <Alert>
                            <Terminal />
                            <AlertTitle>Comando CLI</AlertTitle>
                            <AlertDescription>
                                <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">
                                    npx shadcn@latest add alert
                                </code>
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Sem Ícone">
                    <StyleguideExample
                        title="Apenas Texto"
                        code={`<Alert>
  <AlertTitle>Título do Alerta</AlertTitle>
  <AlertDescription>Descrição do alerta sem ícone.</AlertDescription>
</Alert>`}
                    >
                        <Alert>
                            <AlertTitle>Título do Alerta</AlertTitle>
                            <AlertDescription>
                                Este é um alerta simples sem ícone, útil para mensagens menos importantes.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "variant", type: "default | destructive", defaultValue: "default", description: "Variante visual do alerta" },
                            { prop: "className", type: "string", defaultValue: "-", description: "Classes CSS adicionais para customização" },
                        ]}
                    />

                    <h4 className="text-body-lg-semibold text-fg-strong mt-6 mb-3">AlertTitle</h4>
                    <StyleguidePropsTable
                        data={[
                            { prop: "className", type: "string", defaultValue: "-", description: "Classes CSS adicionais" },
                        ]}
                    />

                    <h4 className="text-body-lg-semibold text-fg-strong mt-6 mb-3">AlertDescription</h4>
                    <StyleguidePropsTable
                        data={[
                            { prop: "className", type: "string", defaultValue: "-", description: "Classes CSS adicionais" },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
