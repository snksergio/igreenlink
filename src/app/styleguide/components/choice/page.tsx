"use client";

import { ChoiceGroup, ChoiceItem } from "@/components/igreen/Choice";
import { User, FileText, Smartphone } from "lucide-react";
import { useState } from "react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function ChoicePage() {
    const [selected, setSelected] = useState<string>("boleto");
    const [isStandaloneActive, setIsStandaloneActive] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Choice Component"
                description="Componente de seleção rico com ícones e descrições, usado para Radio Groups ou Checkboxes complexos."
            />

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ChoiceItem, ChoiceGroup } from "@/components/igreen/Choice";`}
                        exampleCode={`<ChoiceGroup>
  <ChoiceItem
    title="Option 1"
    description="Description"
    active={selected === '1'}
    onClick={() => setSelected('1')}
  />
</ChoiceGroup>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Item Avulso (Standalone)">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Pode ser usado individualmente como um toggle ou checkbox rico.
                    </p>
                    <StyleguideExample
                        code={`<ChoiceItem
  title="Item Avulso"
  description="Descrição do item"
  icon={<User />}
  active={isActive}
  onClick={toggle}
/>`}
                    >
                        <div className="bg-bg-muted p-4 rounded-xl max-w-md">
                            <ChoiceItem
                                title="Item Avulso"
                                description="Este item não está dentro de um grupo. Clique para alternar."
                                icon={<User />}
                                active={isStandaloneActive}
                                onClick={() => setIsStandaloneActive(!isStandaloneActive)}
                            />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Grupo de Escolha (Interativo)">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Use o wrappers <code>ChoiceGroup</code> para agrupar opções. Ideal para seleção única (Radio).
                    </p>
                    <StyleguideExample
                        code={`<ChoiceGroup>
  <ChoiceItem
    title="Opção A"
    description="..."
    icon={<IconA />}
    active={selected === 'A'}
    onClick={() => setSelected('A')}
  />
  <ChoiceItem
    title="Opção B"
    description="..."
    icon={<IconB />}
    active={selected === 'B'}
    onClick={() => setSelected('B')}
  />
</ChoiceGroup>`}
                    >
                        <div className="flex flex-wrap gap-12 items-start">
                            <ChoiceGroup>
                                <ChoiceItem
                                    title="Boleto único"
                                    description="Pague apenas um único boleto para iGreen Energy"
                                    icon={<FileText />}
                                    active={selected === "boleto"}
                                    onClick={() => setSelected("boleto")}
                                />
                                <ChoiceItem
                                    title="Boleto separado"
                                    description="Contas da distribuidora e iGreen de formas separadas"
                                    icon={<FileText />}
                                    active={selected === "separado"}
                                    onClick={() => setSelected("separado")}
                                />
                                <ChoiceItem
                                    title="Cartão de Crédito"
                                    description="Cobrança automática na fatura do seu cartão"
                                    icon={<Smartphone />}
                                    active={selected === "cartao"}
                                    onClick={() => setSelected("cartao")}
                                />
                            </ChoiceGroup>

                            <div className="bg-bg-muted p-4 rounded-lg min-w-[200px]">
                                <p className="text-caption-sm text-fg-muted uppercase tracking-wider mb-2">Selecionado</p>
                                <code className="text-body-md-bold text-fg-primary">
                                    {selected}
                                </code>
                            </div>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Estados Visuais">
                    <div className="bg-bg-surface border border-border rounded-lg p-6 grid grid-cols-2 gap-8">
                        <div className="bg-bg-muted p-4 rounded-lg">
                            <p className="text-caption-md text-fg-muted mb-3">Ativo (Active)</p>
                            <ChoiceItem
                                title="Estado Ativo"
                                description="Descrição do item ativo."
                                icon={<User />}
                                active={true}
                            />
                        </div>
                        <div className="bg-bg-muted p-4 rounded-lg">
                            <p className="text-caption-md text-fg-muted mb-3">Inativo (Inactive)</p>
                            <ChoiceItem
                                title="Estado Inativo"
                                description="Descrição do item inativo."
                                icon={<User />}
                                active={false}
                            />
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">ChoiceGroup</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "children", type: "ReactNode", defaultValue: "-", description: "Conteúdo do grupo (ChoiceItems)" },
                                    { prop: "className", type: "string", defaultValue: "-", description: "Classe CSS adicional" },
                                ]}
                            />
                        </div>

                        <div>
                            <h3 className="text-body-lg-semibold text-fg-strong mb-4">ChoiceItem</h3>
                            <StyleguidePropsTable
                                data={[
                                    { prop: "title", type: "string", defaultValue: "-", description: "Título principal do item" },
                                    { prop: "description", type: "string", defaultValue: "-", description: "Descrição detalhada" },
                                    { prop: "icon", type: "ReactNode", defaultValue: "-", description: "Ícone ilustrativo (SVG ou Lucide)" },
                                    { prop: "active", type: "boolean", defaultValue: "false", description: "Estado de seleção (true = selecionado)" },
                                    { prop: "onClick", type: "() => void", defaultValue: "-", description: "Callback de clique" },
                                    { prop: "className", type: "string", defaultValue: "-", description: "Classe CSS adicional" },
                                ]}
                            />
                        </div>
                    </div>
                </StyleguideSection>
            </main>
        </div>
    );
}
