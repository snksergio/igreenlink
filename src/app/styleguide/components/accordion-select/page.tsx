"use client";

import { useState } from "react";
import { AccordionSelect } from "@/components/igreen/AccordionSelect";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { Car, Home, Wallet, CreditCard } from "lucide-react";

export default function AccordionSelectPage() {
    const [value, setValue] = useState<string | undefined>(undefined);

    const options = [
        {
            id: "cnh",
            title: "CNH",
            description: "Carteira de motorista com validade nacional",
            icon: <Car className="size-6" />,
        },
        {
            id: "rg",
            title: "RG / Identidade",
            description: "Registro Geral emitido por órgão oficial",
            icon: <Home className="size-6" />,
        },
        {
            id: "passport",
            title: "Passaporte",
            description: "Documento oficial para viagens internacionais",
            icon: <Wallet className="size-6" />,
        }
    ];

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Accordion Select"
                description="Um componente de seleção que expande para mostrar opções e colapsa para exibir apenas a seleção escolhida, permitindo edição fácil."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2532-7496&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { AccordionSelect } from "@/components/igreen/AccordionSelect";`}
                        exampleCode={`// Controlled Component
const [selected, setSelected] = useState<string | undefined>("cnh");

<AccordionSelect
  value={selected}
  onValueChange={setSelected}
  options={[
    { id: "cnh", title: "CNH", description: "...", icon: <Car /> },
    { id: "rg", title: "RG", description: "...", icon: <User /> },
  ]}
/>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplos">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente gerencia a transição entre lista expandida e item selecionado.
                    </p>

                    <div className="flex flex-col gap-6 max-w-[600px]">
                        <StyleguideExample
                            title="Seleção de Documento"
                            code={`<AccordionSelect
    value={value}
    onValueChange={setValue}
    options={options}
/>`}
                        >
                            <AccordionSelect
                                value={value}
                                onValueChange={setValue}
                                options={options}
                            />

                            <div className="mt-4 p-4 bg-bg-subtle rounded text-caption-md text-fg-muted">
                                Selected Value: <span className="text-fg-strong font-mono">{value || "undefined"}</span>
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "options",
                                type: "AccordionSelectOption[]",
                                defaultValue: "-",
                                description: "Array de opções { id, title, description, icon }"
                            },
                            {
                                prop: "value",
                                type: "string | undefined",
                                defaultValue: "undefined",
                                description: "ID da opção selecionada (Controlled)"
                            },
                            {
                                prop: "onValueChange",
                                type: "(value: string | undefined) => void",
                                defaultValue: "-",
                                description: "Callback de alteração. Retorna undefined ao clicar em editar."
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
