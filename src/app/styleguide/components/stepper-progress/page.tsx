"use client";

import { useState } from "react";
import { StepperProgress } from "@/components/igreen/StepperProgress";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { Button } from "@/components/shadcn/button";

export default function StepperProgressPage() {
    const [currentStep, setCurrentStep] = useState(2);
    const totalSteps = 5;

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Stepper Progress"
                description="Indicador de progresso visual para processos de múltiplas etapas. Mostra quais etapas estão ativas e quais estão pendentes."
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { StepperProgress } from "@/components/igreen/StepperProgress";`}
                        exampleCode={`<StepperProgress
  totalSteps={5}
  currentStep={3}
/>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplo Interativo">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Use os botões para navegar entre as etapas.
                    </p>
                    <StyleguideExample
                        code={`const [currentStep, setCurrentStep] = useState(2);

<StepperProgress
  totalSteps={5}
  currentStep={currentStep}
/>

<Button onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}>
  Voltar
</Button>
<Button onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}>
  Avançar
</Button>`}
                    >
                        <div className="space-y-6 max-w-md">
                            <StepperProgress
                                totalSteps={totalSteps}
                                currentStep={currentStep}
                            />
                            <div className="flex gap-3 items-center">
                                <Button
                                    variant="soft"
                                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                                    disabled={currentStep === 0}
                                >
                                    Voltar
                                </Button>
                                <span className="text-body-md-medium text-fg-muted">
                                    Etapa {currentStep} de {totalSteps}
                                </span>
                                <Button
                                    variant="default"
                                    onClick={() => setCurrentStep((prev) => Math.min(totalSteps, prev + 1))}
                                    disabled={currentStep === totalSteps}
                                >
                                    Avançar
                                </Button>
                            </div>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Variações de Etapas">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        O componente suporta qualquer número de etapas.
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-6">
                        <div>
                            <p className="text-caption-md text-fg-muted mb-3">3 etapas (1 ativa)</p>
                            <div className="max-w-md">
                                <StepperProgress totalSteps={3} currentStep={1} />
                            </div>
                        </div>
                        <div>
                            <p className="text-caption-md text-fg-muted mb-3">4 etapas (2 ativas)</p>
                            <div className="max-w-md">
                                <StepperProgress totalSteps={4} currentStep={2} />
                            </div>
                        </div>
                        <div>
                            <p className="text-caption-md text-fg-muted mb-3">5 etapas (todas ativas)</p>
                            <div className="max-w-md">
                                <StepperProgress totalSteps={5} currentStep={5} />
                            </div>
                        </div>
                        <div>
                            <p className="text-caption-md text-fg-muted mb-3">5 etapas (nenhuma ativa)</p>
                            <div className="max-w-md">
                                <StepperProgress totalSteps={5} currentStep={0} />
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "totalSteps", type: "number", defaultValue: "-", description: "Número total de etapas no indicador" },
                            { prop: "currentStep", type: "number", defaultValue: "-", description: "Etapa atual (1 a totalSteps). Etapas de 1 até currentStep serão exibidas como ativas." },
                            { prop: "className", type: "string", defaultValue: "-", description: "Classe CSS adicional para o container" },
                        ]}
                    />
                </StyleguideSection>
            </main>
        </div>
    );
}
