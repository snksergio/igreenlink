"use client";

import { useState } from "react";
import { ScreenStep } from "@/components/igreen/ScreenStep";
import { Button } from "@/components/shadcn/button";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function ScreenStepPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isFormValid, setIsFormValid] = useState(false);

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Screen Step"
                description="Layout interno para cada etapa de um fluxo multi-step. Inclui step label, título rico, subtítulo, área de conteúdo e botões de ação."
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ScreenStep } from "@/components/igreen/ScreenStep";`}
                        exampleCode={`<ScreenStep
  stepLabel="PASSO 1 DE 5"
  title={<>Comece enviando <span className="text-fg-primary">sua conta de luz</span></>}
  subtitle="Com ela, analisamos seu perfil de consumo"
  actions={{ onBack: handleBack, onNext: handleNext, nextDisabled: !isValid }}
>
  <FormContent />
</ScreenStep>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplo Interativo">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Demonstração com controle de validação de formulário.
                    </p>
                    <StyleguideExample
                        code={`<ScreenStep
  stepLabel={\`PASSO \${step} DE 5\`}
  title={<>Comece enviando <span className="text-fg-primary">sua conta de luz</span></>}
  actions={{ 
    onBack: () => setStep(s => s - 1),
    onNext: () => setStep(s => s + 1),
    backDisabled: step === 1,
    nextDisabled: !isFormValid 
  }}
/>`}
                    >
                        <div className="bg-bg-surface border border-border rounded-lg p-6 max-w-[480px]">
                            <ScreenStep
                                stepLabel={`PASSO ${currentStep} DE 5`}
                                title={
                                    <>
                                        Comece enviando{" "}
                                        <span className="text-fg-primary">sua conta de luz</span>
                                    </>
                                }
                                subtitle="Com ela, analisamos seu perfil de consumo e agilizamos todo o processo"
                                actions={{
                                    onBack: () => setCurrentStep((s) => Math.max(1, s - 1)),
                                    onNext: () => setCurrentStep((s) => Math.min(5, s + 1)),
                                    backDisabled: currentStep === 1,
                                    nextDisabled: !isFormValid,
                                }}
                            >
                                <div className="bg-bg-muted border border-border-muted rounded-base p-8 text-center">
                                    <p className="text-body-md-medium text-fg-muted mb-4">
                                        Área para formulário
                                    </p>
                                    <label className="flex items-center justify-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={isFormValid}
                                            onChange={(e) => setIsFormValid(e.target.checked)}
                                            className="size-4"
                                        />
                                        <span className="text-body-sm-medium text-fg-main">
                                            Simular formulário preenchido
                                        </span>
                                    </label>
                                </div>
                            </ScreenStep>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Actions - Layouts">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O prop <code>actions</code> aceita um objeto de configuração ou ReactNode customizado.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Dual Layout */}
                        <div className="space-y-3">
                            <h3 className="text-body-md-semibold text-fg-strong">
                                layout=&quot;dual&quot; (default)
                            </h3>
                            <p className="text-body-sm-medium text-fg-muted">
                                Botão Voltar + Prosseguir
                            </p>
                            <div className="bg-bg-surface border border-border rounded-lg p-4">
                                <ScreenStep
                                    title="Exemplo"
                                    actions={{ onBack: () => { }, onNext: () => { } }}
                                >
                                    <div className="h-12" />
                                </ScreenStep>
                            </div>
                        </div>

                        {/* Single Back Layout */}
                        <div className="space-y-3">
                            <h3 className="text-body-md-semibold text-fg-strong">
                                layout=&quot;single-back&quot;
                            </h3>
                            <p className="text-body-sm-medium text-fg-muted">
                                Apenas botão Voltar (fullwidth)
                            </p>
                            <div className="bg-bg-surface border border-border rounded-lg p-4">
                                <ScreenStep
                                    title="Exemplo"
                                    actions={{ layout: "single-back", onBack: () => { } }}
                                >
                                    <div className="h-12" />
                                </ScreenStep>
                            </div>
                        </div>

                        {/* Custom Layout */}
                        <div className="space-y-3">
                            <h3 className="text-body-md-semibold text-fg-strong">
                                Custom (ReactNode)
                            </h3>
                            <p className="text-body-sm-medium text-fg-muted">
                                Liberdade total com children
                            </p>
                            <div className="bg-bg-surface border border-border rounded-lg p-4">
                                <ScreenStep
                                    title="Exemplo"
                                    actions={
                                        <div className="flex gap-3 w-full">
                                            <Button variant="soft" size="lg">
                                                Cancelar
                                            </Button>
                                            <Button variant="soft" size="lg" className="flex-1">
                                                Salvar
                                            </Button>
                                            <Button size="lg">
                                                Enviar
                                            </Button>
                                        </div>
                                    }
                                >
                                    <div className="h-12" />
                                </ScreenStep>
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">ScreenStep</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "stepLabel", type: "string", defaultValue: "-", description: "Label do step (ex: 'PASSO 1 DE 5')" },
                                    { prop: "title", type: "ReactNode", defaultValue: "-", description: "Título principal (pode ter texto destacado)" },
                                    { prop: "subtitle", type: "string", defaultValue: "-", description: "Subtítulo/descrição" },
                                    { prop: "children", type: "ReactNode", defaultValue: "-", description: "Conteúdo do formulário" },
                                    { prop: "actions", type: "ScreenStepActionsConfig | ReactNode", defaultValue: "-", description: "Objeto config ou ReactNode customizado" },
                                    { prop: "className", type: "string", defaultValue: "-", description: "Classe CSS adicional" },
                                ]}
                            />
                        </div>

                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">ScreenStepActionsConfig</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "layout", type: '"dual" | "single-back"', defaultValue: '"dual"', description: "Layout dos botões" },
                                    { prop: "onBack", type: "() => void", defaultValue: "-", description: "Callback do botão Voltar" },
                                    { prop: "backLabel", type: "string", defaultValue: '"Voltar"', description: "Label do botão Voltar" },
                                    { prop: "backDisabled", type: "boolean", defaultValue: "false", description: "Desabilita Voltar" },
                                    { prop: "onNext", type: "() => void", defaultValue: "-", description: "Callback do botão Prosseguir" },
                                    { prop: "nextLabel", type: "string", defaultValue: '"Prosseguir"', description: "Label do botão Prosseguir" },
                                    { prop: "nextDisabled", type: "boolean", defaultValue: "false", description: "Desabilita Prosseguir" },
                                ]}
                            />
                        </div>
                    </div>
                </StyleguideSection>
            </main>
        </div>
    );
}
