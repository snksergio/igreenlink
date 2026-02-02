"use client";

import { useState } from "react";
import { ScreenSteppers, useScreenSteppers } from "@/components/igreen/ScreenSteppers";
import { Button } from "@/components/shadcn/button";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

/**
 * Example child component that uses the context
 */
function StepContent() {
    const { currentStep, totalSteps, nextStep, prevStep, isFirstStep, isLastStep } = useScreenSteppers();

    return (
        <div className="bg-bg-surface border border-border rounded-base p-6 space-y-4">
            <h2 className="text-body-lg-semibold text-fg-strong">
                Etapa {currentStep} de {totalSteps}
            </h2>
            <p className="text-body-md-medium text-fg-muted">
                Este conteúdo é renderizado como children do ScreenSteppers.
                Ele acessa o contexto via <code className="text-fg-primary">useScreenSteppers()</code>.
            </p>
            <div className="flex gap-3 pt-2">
                <Button
                    variant="soft"
                    onClick={prevStep}
                    disabled={isFirstStep}
                >
                    Voltar
                </Button>
                <Button
                    variant="default"
                    onClick={nextStep}
                    disabled={isLastStep}
                >
                    {isLastStep ? "Concluir" : "Próximo"}
                </Button>
            </div>
        </div>
    );
}

export default function ScreenSteppersPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Screen Steppers"
                description="Layout responsivo para fluxos de múltiplas etapas com logo iGreen, indicador de progresso e controle de navegação via Context."
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ScreenSteppers, useScreenSteppers } from "@/components/igreen/ScreenSteppers";`}
                        exampleCode={`<ScreenSteppers totalSteps={5} initialStep={1}>
  <YourFormContent />
</ScreenSteppers>

// Dentro do children:
function YourFormContent() {
  const { currentStep, nextStep, prevStep } = useScreenSteppers();
  // Use os controles de navegação
}`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplo Interativo">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        O layout inclui o logo iGreen, o StepperProgress e área para children.
                        Redimensione a janela para ver o comportamento responsivo.
                    </p>
                    <StyleguideExample
                        code={`<ScreenSteppers totalSteps={5}>
  <StepContent />
</ScreenSteppers>

function StepContent() {
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useScreenSteppers();
  return (
    <div>
      <h2>Etapa {currentStep}</h2>
      <Button onClick={prevStep} disabled={isFirstStep}>Voltar</Button>
      <Button onClick={nextStep} disabled={isLastStep}>Próximo</Button>
    </div>
  );
}`}
                    >
                        <div className="bg-bg-inverse p-8 rounded-lg">
                            <ScreenSteppers totalSteps={5}>
                                <StepContent />
                            </ScreenSteppers>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Layout Responsivo">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente ajusta seu layout automaticamente. Abaixo estão as visualizações de cada breakpoint:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mobile Preview */}
                        <div className="space-y-3">
                            <h3 className="text-body-md-semibold text-fg-strong">📱 Mobile (&lt; 768px)</h3>
                            <p className="text-body-sm-medium text-fg-muted">
                                Logo inline com o stepper, layout horizontal
                            </p>
                            <div className="bg-bg-inverse p-6 rounded-lg max-w-[320px]">
                                <ScreenSteppers totalSteps={5} initialStep={3} forceLayout="mobile">
                                    <div className="bg-bg-surface border border-border rounded-base p-4 text-center">
                                        <p className="text-body-sm-medium text-fg-muted">Conteúdo</p>
                                    </div>
                                </ScreenSteppers>
                            </div>
                        </div>

                        {/* Desktop Preview */}
                        <div className="space-y-3">
                            <h3 className="text-body-md-semibold text-fg-strong">🖥️ Desktop (≥ 768px)</h3>
                            <p className="text-body-sm-medium text-fg-muted">
                                Logo acima do stepper, layout vertical
                            </p>
                            <div className="bg-bg-inverse p-6 rounded-lg">
                                <ScreenSteppers totalSteps={5} initialStep={3} forceLayout="desktop">
                                    <div className="bg-bg-surface border border-border rounded-base p-4 text-center">
                                        <p className="text-body-sm-medium text-fg-muted">Conteúdo</p>
                                    </div>
                                </ScreenSteppers>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-bg-muted rounded-lg">
                        <p className="text-body-sm-medium text-fg-muted">
                            💡 <strong>Dica:</strong> Redimensione a janela do navegador para ver a transição entre os layouts.
                            O breakpoint está em <code className="text-fg-primary">768px (md)</code>.
                        </p>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">ScreenSteppers</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "totalSteps", type: "number", defaultValue: "-", description: "Número total de etapas no processo" },
                                    { prop: "initialStep", type: "number", defaultValue: "1", description: "Etapa inicial (1-indexed)" },
                                    { prop: "children", type: "ReactNode", defaultValue: "-", description: "Conteúdo do formulário (acessa o contexto)" },
                                    { prop: "className", type: "string", defaultValue: "-", description: "Classe CSS adicional para o container" },
                                ]}
                            />
                        </div>

                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">useScreenSteppers()</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "currentStep", type: "number", defaultValue: "-", description: "Etapa atual (1-indexed)" },
                                    { prop: "totalSteps", type: "number", defaultValue: "-", description: "Total de etapas" },
                                    { prop: "goToStep", type: "(step: number) => void", defaultValue: "-", description: "Navegar para uma etapa específica" },
                                    { prop: "nextStep", type: "() => void", defaultValue: "-", description: "Avançar para próxima etapa" },
                                    { prop: "prevStep", type: "() => void", defaultValue: "-", description: "Voltar para etapa anterior" },
                                    { prop: "isFirstStep", type: "boolean", defaultValue: "-", description: "Se está na primeira etapa" },
                                    { prop: "isLastStep", type: "boolean", defaultValue: "-", description: "Se está na última etapa" },
                                ]}
                            />
                        </div>
                    </div>
                </StyleguideSection>
            </main>
        </div>
    );
}
