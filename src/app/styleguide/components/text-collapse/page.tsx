"use client";

import { TextCollapse } from "@/components/igreen/TextCollapse";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function TextCollapsePage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Text Collapse"
                description="Um componente colapsável para exibir conteúdo oculto, ideal para perguntas frequentes ou detalhes adicionais."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2573-11648&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { TextCollapse } from "@/components/igreen/TextCollapse";`}
                        exampleCode={`<TextCollapse
  title="Certifique-se que os dados da conta estão legíveis"
  description="Você receberá um boleto separado da iGreen, com 10% de desconto sobre a energia fornecida em seu WhatsApp e Email."
/>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Exemplos">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Exemplos de uso com texto simples e conteúdo complexo.
                    </p>

                    <div className="flex flex-col gap-6 max-w-[600px]">
                        <StyleguideExample
                            inverseColor
                            title="Básico (Texto)"
                            code={`<TextCollapse
  title="Pergunta Frequente"
  description="Resposta detalhada..."
/>`}
                        >
                            <TextCollapse
                                title="Certifique-se que os dados da conta estão legíveis"
                                description="Você receberá um boleto separado da iGreen, com 10% de desconto sobre a energia fornecida em seu WhatsApp e Email."
                            />
                        </StyleguideExample>

                        <StyleguideExample
                            inverseColor
                            title="Com Children (Custom Content)"
                            code={`<TextCollapse title="Detalhes Avançados">
  <div className="flex flex-col gap-2">
    <p>Parágrafo 1</p>
    <Button variant="outline">Ação</Button>
  </div>
</TextCollapse>`}
                        >
                            <TextCollapse title="Detalhes Avançados">
                                <div className="flex flex-col gap-3">
                                    <p>
                                        É possível renderizar qualquer conteúdo aqui dentro, como listas ou botões.
                                    </p>
                                    <ul className="list-disc pl-5">
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                    </ul>
                                </div>
                            </TextCollapse>
                        </StyleguideExample>

                        <StyleguideExample
                            inverseColor
                            title="Aberto por padrão"
                            code={`<TextCollapse defaultOpen title="..." description="..." />`}
                        >
                            <TextCollapse
                                defaultOpen
                                title="Esta seção já inicia aberta"
                                description="O conteúdo é visível imediatamente ao carregar a página."
                            />
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "title",
                                type: "string",
                                defaultValue: "-",
                                description: "Título exibido no cabeçalho do colapsável"
                            },
                            {
                                prop: "description",
                                type: "string | ReactNode",
                                defaultValue: "-",
                                description: "Conteúdo textual ou elementos a serem exibidos quando expandido"
                            },
                            {
                                prop: "defaultOpen",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Define se o componente inicia expandido"
                            },
                            {
                                prop: "children",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Conteúdo alternativo ao description (alias)"
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
