"use client";

import { Checkbox } from "@/components/shadcn/checkbox";
import { Label } from "@/components/shadcn/label"; // Assuming we have Label, if not will fix
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function CheckboxPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Checkbox"
                description="Um controle de seleção binário ou múltiplo."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2574-11743&m=dev" },
                    { label: "Shadcn Component", href: "https://ui.shadcn.com/docs/components/radix/checkbox" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Checkbox } from "@/components/shadcn/checkbox";`}
                        exampleCode={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplos">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StyleguideExample
                            title="Sem Label (Raw)"
                            code={`<Checkbox />`}
                        >
                            <Checkbox />
                        </StyleguideExample>

                        <StyleguideExample
                            title="Básico"
                            code={`<Checkbox />`}
                        >
                            <div className="flex items-center gap-2">
                                <Checkbox id="basic" />
                                <label htmlFor="basic" className="text-body-sm-medium text-fg-strong">Opção Simples</label>
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Estado Checked"
                            code={`<Checkbox defaultChecked />`}
                        >
                            <div className="flex items-center gap-2">
                                <Checkbox id="checked" defaultChecked />
                                <label htmlFor="checked" className="text-body-sm-medium text-fg-strong">Selecionado</label>
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Desabilitado"
                            code={`<Checkbox disabled />`}
                        >
                            <div className="flex items-center gap-2">
                                <Checkbox id="disabled" disabled />
                                <label htmlFor="disabled" className="text-body-sm-medium text-fg-muted">Indisponível</label>
                            </div>
                        </StyleguideExample>

                        <StyleguideExample
                            title="Desabilitado Selecionado"
                            code={`<Checkbox disabled checked />`}
                        >
                            <div className="flex items-center gap-2">
                                <Checkbox id="disabled-checked" disabled checked />
                                <label htmlFor="disabled-checked" className="text-body-sm-medium text-fg-muted">Indisponível</label>
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "checked",
                                type: "boolean | 'indeterminate'",
                                defaultValue: "false",
                                description: "Estado controlado do checkbox."
                            },
                            {
                                prop: "defaultChecked",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Estado inicial do checkbox (uncontrolled)."
                            },
                            {
                                prop: "onCheckedChange",
                                type: "(checked: boolean | 'indeterminate') => void",
                                defaultValue: "-",
                                description: "Callback disparado quando o estado muda."
                            },
                            {
                                prop: "disabled",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Desabilita a interação com o checkbox."
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
