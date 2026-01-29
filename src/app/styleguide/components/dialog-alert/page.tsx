"use client";

import { DialogAlert } from "@/components/igreen/DialogAlert";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { useState } from "react";
import { Button } from "@/components/shadcn/button";

export default function DialogAlertPage() {
    const [openDefault, setOpenDefault] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [openCritical, setOpenCritical] = useState(false);

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Dialog Alert"
                description="Um componente de alerta modal estilizado para confirmações críticas e avisos importantes, seguindo o design do iGreen."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2563-8041&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { DialogAlert } from "@/components/igreen/DialogAlert";`}
                        exampleCode={`<DialogAlert
  open={isOpen}
  onOpenChange={setIsOpen}
  title="Apagar arquivo"
  description="Você realmente deseja apagar este arquivo? Não será possível recuperá-lo."
  variant="critical"
  confirmLabel="Confirmar"
  cancelLabel="Cancelar"
  onConfirm={handleConfirm}
  onCancel={() => setIsOpen(false)}
/>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Variantes">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente suporta três variantes principais: Critical (Padrão para ações destrutivas), Warning e Default/Success.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* CRITICAL */}
                        <StyleguideExample
                            title="Critical (Destructive)"
                            code={`<DialogAlert
  variant="critical"
  title="Apagar arquivo"
  description="..."
/>`}
                        >
                            <div className="flex flex-col gap-4 items-center">
                                <Button onClick={() => setOpenCritical(true)} color="critical">
                                    Abrir Critical Alert
                                </Button>
                                <DialogAlert
                                    open={openCritical}
                                    onOpenChange={setOpenCritical}
                                    variant="critical"
                                    title="Apagar arquivo"
                                    description="Você realmente deseja apagar este arquivo? Não será possível recuperá-lo e você perderá a análise."
                                    confirmLabel="Confirmar"
                                    cancelLabel="Cancelar"
                                    onConfirm={() => {
                                        alert("Confirmado!");
                                        setOpenCritical(false);
                                    }}
                                    onCancel={() => setOpenCritical(false)}
                                />
                            </div>
                        </StyleguideExample>

                        {/* WARNING */}
                        <StyleguideExample
                            title="Warning"
                            code={`<DialogAlert
  variant="warning"
  title="Atenção"
  description="..."
/>`}
                        >
                            <div className="flex flex-col gap-4 items-center">
                                <Button onClick={() => setOpenWarning(true)} color="warning">
                                    Abrir Warning Alert
                                </Button>
                                <DialogAlert
                                    open={openWarning}
                                    onOpenChange={setOpenWarning}
                                    variant="warning"
                                    title="Atenção necessária"
                                    description="Esta ação pode afetar o funcionamento do sistema."
                                    confirmLabel="Continuar"
                                    cancelLabel="Voltar"
                                    onConfirm={() => setOpenWarning(false)}
                                    onCancel={() => setOpenWarning(false)}
                                />
                            </div>
                        </StyleguideExample>

                        {/* DEFAULT */}
                        <StyleguideExample
                            title="Default (Success/Info)"
                            code={`<DialogAlert
  variant="default"
  title="Sucesso"
  description="..."
/>`}
                        >
                            <div className="flex flex-col gap-4 items-center">
                                <Button onClick={() => setOpenDefault(true)} color="primary">
                                    Abrir Default Alert
                                </Button>
                                <DialogAlert
                                    open={openDefault}
                                    onOpenChange={setOpenDefault}
                                    variant="default"
                                    title="Operação concluída"
                                    description="O arquivo foi processado com sucesso. Você já pode visualizá-lo."
                                    confirmLabel="Prosseguir"
                                    cancelLabel="Fechar"
                                    onConfirm={() => setOpenDefault(false)}
                                    onCancel={() => setOpenDefault(false)}
                                />
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "open",
                                type: "boolean",
                                defaultValue: "-",
                                description: "Controla a visibilidade do diálogo"
                            },
                            {
                                prop: "onOpenChange",
                                type: "(open: boolean) => void",
                                defaultValue: "-",
                                description: "Callback de alteração de visibilidade"
                            },
                            {
                                prop: "variant",
                                type: "'default' | 'warning' | 'critical'",
                                defaultValue: "'critical'",
                                description: "Define a aparência visual e o ícone padrão"
                            },
                            {
                                prop: "title",
                                type: "string",
                                defaultValue: "-",
                                description: "Título do alerta"
                            },
                            {
                                prop: "description",
                                type: "string",
                                defaultValue: "-",
                                description: "Texto descritivo do corpo do alerta"
                            },
                            {
                                prop: "confirmLabel",
                                type: "string",
                                defaultValue: "'Confirmar'",
                                description: "Texto do botão de confirmação"
                            },
                            {
                                prop: "cancelLabel",
                                type: "string",
                                defaultValue: "'Cancelar'",
                                description: "Texto do botão de cancelamento"
                            },
                            {
                                prop: "onConfirm",
                                type: "() => void",
                                defaultValue: "-",
                                description: "Função executada ao confirmar"
                            },
                            {
                                prop: "onCancel",
                                type: "() => void",
                                defaultValue: "-",
                                description: "Função executada ao cancelar"
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
