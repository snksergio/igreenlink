"use client";

import React, { useState } from "react";
import { ToggleCard } from "@/components/igreen/ToggleCard";
import { InputText } from "@/components/igreen/InputText";
import { Sun, ShieldCheck, Home } from "lucide-react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function ToggleCardPage() {
    // Estado para exemplo interativo
    const [solar, setSolar] = useState(false);
    const [insurance, setInsurance] = useState(true);

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="ToggleCard"
                description="Card de seleção binária (Sim/Não) com suporte a conteúdo expansível condicional."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2568-6640&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                {/* USAGE */}
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ToggleCard } from "@/components/igreen/ToggleCard";`}
                        exampleCode={`// Estado controlado
const [checked, setChecked] = useState(false);

<ToggleCard
  title="Possui placas solares?"
  description="Pergunta apenas de cunho informativo"
  icon={<Sun />}
  checked={checked}
  onCheckedChange={setChecked}
>
  <InputText placeholder="Informe a potência..." />
</ToggleCard>`}
                    />
                </StyleguideSection>

                {/* VARIANTES */}
                <StyleguideSection title="Exemplos">
                    <StyleguideExample
                        title="Simples (Sem Conteúdo)"
                        code={`<ToggleCard
  title="Seguro Residencial"
  description="Deseja incluir proteção contra roubo?"
  icon={<ShieldCheck />}
  checked={checked}
  onCheckedChange={setChecked}
/>`}
                    >
                        <div className="max-w-[600px]">
                            <ToggleCard
                                title="Seguro Residencial"
                                description="Deseja incluir proteção contra roubo?"
                                icon={<ShieldCheck />}
                                checked={insurance}
                                onCheckedChange={setInsurance}
                            />
                        </div>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Com Conteúdo Expansível"
                        code={`<ToggleCard
  title="Possui placas solares?"
  description="Pergunta apenas de cunho informativo"
  icon={<Sun />}
  checked={checked}
  onCheckedChange={setChecked}
>
  <div className="space-y-4">
    <p className="text-body-sm-medium text-fg-muted">Detalhes do sistema:</p>
    <InputText placeholder="Potência instalada (kWp)" />
    <InputText placeholder="Data da instalação" type="date" />
  </div>
</ToggleCard>`}
                    >
                        <div className="max-w-[600px]">
                            <ToggleCard
                                title="Possui placas solares?"
                                description="Pergunta apenas de cunho informativo"
                                icon={<Sun />}
                                checked={solar}
                                onCheckedChange={setSolar}
                            >
                                <div className="space-y-4">
                                    <p className="text-body-sm-medium text-fg-muted">Detalhes do sistema:</p>
                                    <InputText placeholder="Potência instalada (kWp)" />
                                    <InputText placeholder="Data da instalação" type="date" />
                                </div>
                            </ToggleCard>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ESTADOS */}
                <StyleguideSection title="Layouts & Customização">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ToggleCard
                            title="Sem Ícone"
                            description="Card minimalista"
                            checked={false}
                        />
                        <ToggleCard
                            title="Labels Customizados"
                            description="Concorda com os termos?"
                            icon={<Home />}
                            fullLabel="Concordo"
                            offLabel="Discordo"
                            checked={true}
                        />
                        <ToggleCard
                            title="Desabilitado (Sim)"
                            description="Não é possível alterar"
                            icon={<Sun />}
                            checked={true}
                            disabled
                        />
                        <ToggleCard
                            title="Desabilitado (Não)"
                            description="Não é possível alterar"
                            icon={<Sun />}
                            checked={false}
                            disabled
                        />
                    </div>
                </StyleguideSection>

                {/* PROPS */}
                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "title",
                                type: "string",
                                defaultValue: "-",
                                description: "Título principal do card"
                            },
                            {
                                prop: "description",
                                type: "string",
                                defaultValue: "-",
                                description: "Texto auxiliar/instrução"
                            },
                            {
                                prop: "icon",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Ícone ilustrativo à esquerda"
                            },
                            {
                                prop: "checked",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Estado do toggle (true = Sim, false = Não)"
                            },
                            {
                                prop: "onCheckedChange",
                                type: "(checked: boolean) => void",
                                defaultValue: "-",
                                description: "Callback disparado ao clicar nas opções"
                            },
                            {
                                prop: "fullLabel",
                                type: "string",
                                defaultValue: "'Sim'",
                                description: "Label para o estado verdadeiro (checked)"
                            },
                            {
                                prop: "offLabel",
                                type: "string",
                                defaultValue: "'Não'",
                                description: "Label para o estado falso (unchecked)"
                            },
                            {
                                prop: "children",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Conteúdo que expande quando checked=true"
                            },
                            {
                                prop: "disabled",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Desabilita interações"
                            },
                        ]}
                    />
                </StyleguideSection>

            </div>
        </div>
    );
}
