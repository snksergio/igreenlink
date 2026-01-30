"use client";

import { Dialog } from "@/components/igreen/Dialog";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { useState } from "react";
import { Button } from "@/components/shadcn/button";

export default function DialogPage() {
    const [openDefault, setOpenDefault] = useState(false);
    const [openIcon, setOpenIcon] = useState(false);
    const [openActions, setOpenActions] = useState(false);
    const [openCustom, setOpenCustom] = useState(false);
    const [openScroll, setOpenScroll] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
        setOpenActions(false);
    };

    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* ========================================
                1. HEADER
                ======================================== */}
            <StyleguideHeader
                title="Dialog"
                description="Uma janela modal sobreposta que foca a atenção do usuário em uma tarefa ou informação crítica. Baseada no Radix UI Dialog."
                links={[
                    { label: "Documentação Shadcn UI", href: "https://ui.shadcn.com/docs/components/dialog" },
                    { label: "Radix UI Primitives", href: "https://www.radix-ui.com/primitives/docs/components/dialog" },
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2508-8998&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                {/* ========================================
                    2. USAGE (Import + Exemplo Básico)
                    ======================================== */}
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { Dialog } from "@/components/igreen/Dialog";`}
                        exampleCode={`<Dialog
  open={isOpen}
  onOpenChange={setIsOpen}
  title="Buscador de CEP"
  description="Encontre seu CEP pelo endereço."
>
  <div className="py-4">Conteúdo...</div>
</Dialog>`}
                    />
                </StyleguideSection>

                {/* ========================================
                    3. EXEMPLOS E VARIANTES
                    ======================================== */}
                <StyleguideSection title="Exemplos">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente Dialog suporta ícones de cabeçalho, ações de rodapé (cancelar/confirmar) e lógica personalizada.
                    </p>

                    <StyleguideExample
                        title="Com Ícone e Ações"
                        code={`<Dialog 
  title="Buscador de CEP"
  description="Encontre o seu CEP pelo endereço."
  icon="fill-pin"
  onCancel={true}
  onConfirm={handleConfirm}
  loading={loading}
>
  ...
</Dialog>`}
                    >
                        <Button onClick={() => setOpenActions(true)}>Abrir com Ações</Button>
                        <Dialog
                            open={openActions}
                            onOpenChange={setOpenActions}
                            title="Buscador de CEP"
                            description="Encontre o seu CEP pelo endereço de onde possui instalação."
                            icon="fill-pin"
                            onCancel={true}
                            onConfirm={handleConfirm}
                            loading={loading}
                            confirmText="Confirmar"
                            cancelText="Cancelar"
                        >
                            <div className="bg-bg-primary-subtle border-2 border-dashed border-border-primary/50 h-32 rounded-lg flex items-center justify-center text-fg-primary mb-2 font-medium">
                                Conteúdo do modal...
                            </div>
                        </Dialog>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Básico"
                        code={`<Button onClick={() => setOpen(true)}>Abrir Básico</Button>

<Dialog 
    open={open} 
    onOpenChange={setOpen}
    title="Título do Diálogo"
    description="Descrição simples do que este diálogo faz."
>
    Conteúdo...
</Dialog>`}
                    >
                        <Button onClick={() => setOpenDefault(true)}>Abrir Básico</Button>
                        <Dialog
                            open={openDefault}
                            onOpenChange={setOpenDefault}
                            title="Título do Diálogo"
                            description="Descrição simples do que este diálogo faz."
                        >
                            <div className="bg-bg-subtle p-4 rounded text-center text-fg-muted border border-border-dashed">
                                Slot para children
                            </div>
                        </Dialog>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Custom Close Logic"
                        code={`<Dialog 
  onCloseButton={() => {
     if (confirm("Fechar?")) setOpen(false);
  }}
  ...
/>`}
                    >
                        <Button onClick={() => setOpenCustom(true)}>Custom Close</Button>
                        <Dialog
                            open={openCustom}
                            // Note: não passamos onOpenChange para controlar totalmente o fechamento
                            // ou passamos mas controlamos o botão X via onCloseButton
                            onOpenChange={(val) => {
                                if (!val) {
                                    // Tentativa de fechar via overlay/ESC
                                    if (confirm("Deseja fechar (Overlay)?")) setOpenCustom(false);
                                } else {
                                    setOpenCustom(true);
                                }
                            }}
                            title="Lógica Personalizada"
                            description="Tente fechar pelo X ou clicando fora."
                            icon="fill-alert"
                            onCloseButton={() => {
                                if (confirm("Deseja fechar (Botão X)?")) setOpenCustom(false);
                            }}
                        >
                            <p>Este modal intercepta o fechamento.</p>
                        </Dialog>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Conteúdo Longo (Scroll)"
                        code={`<Button onClick={() => setOpen(true)}>Abrir Conteúdo Longo</Button>

<Dialog 
    title="Termos de Uso" 
    open={open}
    onOpenChange={setOpen}
    ...
>
  <div className="space-y-4">
    <p>Lorem ipsum...</p>
    ...
  </div>
</Dialog>`}
                    >
                        <Button variant="default" color="secondary" onClick={() => setOpenScroll(true)}>Abrir Conteúdo Longo</Button>
                        <Dialog
                            open={openScroll}
                            onOpenChange={setOpenScroll}
                            title="Termos de Uso e Política de Privacidade"
                            description="Por favor, leia atentamente os termos abaixo."
                            onCancel={true}
                            onConfirm={true}
                            confirmText="Aceitar"
                        >
                            <div className="space-y-4 text-fg-secondary">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <p>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                </p>
                                <p>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                </p>
                                <p>
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                </p>
                            </div>
                        </Dialog>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
                    4. TAMANHOS
                    ======================================== */}
                <StyleguideSection title="Layout">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        O Dialog tem largura fixa de 550px por padrão, seguindo o design system.
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <ul className="list-disc pl-5 space-y-2 text-body-md-medium text-fg-main">
                            <li>Width: 550px</li>
                            <li>Padding: X=36px, Y=40px</li>
                            <li>Radius: 32px (XL)</li>
                        </ul>
                    </div>
                </StyleguideSection>

                {/* ========================================
                    5. PROPS
                    ======================================== */}
                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "open",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Controla a visibilidade do diálogo (Controlled)"
                            },
                            {
                                prop: "onOpenChange",
                                type: "(open: boolean) => void",
                                defaultValue: "-",
                                description: "Callback de alteração de visibilidade"
                            },
                            {
                                prop: "title",
                                type: "string | ReactNode",
                                defaultValue: "-",
                                description: "Título exibido no cabeçalho"
                            },
                            {
                                prop: "description",
                                type: "string | ReactNode",
                                defaultValue: "-",
                                description: "Descrição exibida abaixo do título"
                            },
                            {
                                prop: "icon",
                                type: "IconName",
                                defaultValue: "-",
                                description: "Nome do ícone exibido à esquerda do cabeçalho (ex: 'fill-pin')"
                            },
                            {
                                prop: "onCloseButton",
                                type: "boolean | () => void",
                                defaultValue: "true",
                                description: "Exibe/Oculta botão X ou define função customizada ao clicar"
                            },
                            {
                                prop: "onCancel",
                                type: "boolean | () => void",
                                defaultValue: "false",
                                description: "Habilita botão de cancelar no rodapé"
                            },
                            {
                                prop: "onConfirm",
                                type: "boolean | () => void",
                                defaultValue: "false",
                                description: "Habilita botão de confirmar no rodapé"
                            },
                            {
                                prop: "loading",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Estado de carregamento do botão Confirmar"
                            },
                            {
                                prop: "width",
                                type: "string",
                                defaultValue: "-",
                                description: "Largura personalizada (ex: '800px')"
                            },
                        ]}
                    />
                </StyleguideSection>

                {/* ========================================
                    6. ACESSIBILIDADE
                    ======================================== */}
                <StyleguideSection title="Acessibilidade">
                    <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                        <ul className="list-disc pl-5 space-y-2 text-body-md-medium text-fg-main">
                            <li>
                                <strong>Focus Management:</strong> O foco é movido para o primeiro elemento focalizável quando aberto.
                            </li>
                            <li>
                                <strong>Keyboard Interaction:</strong> ESC fecha o diálogo, Tab navega entre elementos.
                            </li>
                            <li>
                                <strong>Screen Readers:</strong> Título e Descrição são automaticamente associados via aria-labelledby e aria-describedby.
                            </li>
                        </ul>
                    </div>
                </StyleguideSection>

            </div>
        </div>
    );
}
