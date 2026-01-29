"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { CheckCircle, AlertTriangle, XCircle, Info, Terminal } from "lucide-react";

export default function AlertPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Alert"
                description="Exibe uma chamada de atenção para o usuário sobre informações importantes."
                links={[
                    {
                        label: "Documentação Shadcn UI",
                        href: "https://ui.shadcn.com/docs/components/alert",
                    },
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert"`}
                        exampleCode={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Variantes iGreen">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Variantes mapeadas do design system (Figma Node 2617-4223).
                    </p>

                    <StyleguideExample
                        title="Warning (Padrão)"
                        code={`<Alert variant="warning">
  <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-warning shrink-0">
     <AlertTriangle className="size-[18px] text-white" />
  </div>
  <AlertDescription>
    Para titulares com mais de 75 anos, é necessário informar um contato de um responsável.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert variant="warning" className="max-w-[420px]">
                            <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-warning shrink-0">
                                <AlertTriangle className="size-[18px] text-white" />
                            </div>
                            <AlertDescription>
                                Para titulares com mais de 75 anos, é necessário informar um contato de um responsável.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Success"
                        code={`<Alert variant="success">
  <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-success shrink-0">
     <CheckCircle className="size-[18px] text-white" />
  </div>
  <AlertDescription>
    Operação realizada com sucesso.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert variant="success" className="max-w-[420px]">
                            <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-success shrink-0">
                                <CheckCircle className="size-[18px] text-white" />
                            </div>
                            <AlertDescription>
                                Operação realizada com sucesso.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Critical"
                        code={`<Alert variant="critical">
  <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-critical shrink-0">
     <XCircle className="size-[18px] text-white" />
  </div>
  <AlertDescription>
    Não foi possível processar sua solicitação.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert variant="critical" className="max-w-[420px]">
                            <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-critical shrink-0">
                                <XCircle className="size-[18px] text-white" />
                            </div>
                            <AlertDescription>
                                Não foi possível processar sua solicitação.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Shadcn Default Style (Fallback)">
                    <StyleguideExample
                        title="Default (Simples)"
                        code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
                    >
                        <Alert>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components to your app using the cli.
                            </AlertDescription>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Uso Simplificado (Props)">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Você pode passar o título e a descrição diretamente via props para uma sintaxe mais limpa.
                    </p>
                    <StyleguideExample
                        title="Com Props"
                        code={`<Alert 
  variant="warning"
  description="Este alerta foi construído passando apenas description como propriedade."
>
  <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-warning shrink-0">
     <AlertTriangle className="size-[18px] text-white" />
  </div>
</Alert>`}
                    >
                        <Alert
                            variant="warning"
                            description="Este alerta foi construído passando apenas description como propriedade."
                            className="max-w-[420px]"
                        >
                            <div data-slot="icon-wrapper" className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] bg-bg-warning shrink-0">
                                <AlertTriangle className="size-[18px] text-white" />
                            </div>
                        </Alert>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "variant",
                                type: '"default" | "destructive" | "success" | "warning" | "critical"',
                                defaultValue: "default",
                                description: "Estilo visual do alerta.",
                            },
                            {
                                prop: "title",
                                type: "string",
                                defaultValue: "-",
                                description: "Título do alerta (opcional).",
                            },
                            {
                                prop: "description",
                                type: "string",
                                defaultValue: "-",
                                description: "Descrição do alerta (opcional).",
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
