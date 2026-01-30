"use client";

import React, { useState } from "react";
import { ProgressCard } from "@/components/igreen/ProgressCard";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { ProgressCardStatus } from "@/components/igreen/ProgressCard/component.types";

export default function ProgressCardPage() {
    const [cards, setCards] = useState([
        { id: 1, title: "2025-inhafatura-luz.pdf", status: "loading" as ProgressCardStatus, progress: 0 },
        { id: 2, title: "contrato-final.pdf", status: "completed" as ProgressCardStatus, progress: 100 },
    ]);

    const removeCard = (id: number) => {
        setCards(cards.filter(c => c.id !== id));
    };

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Progress Card"
                description="Card de progresso utilizado para feedbacks de processos de longa duração como uploads, extrações e análises."
                links={[
                    { label: "Figma Design", href: "https://www.figma.com/design/2WqfX52j45tC2eXEcQqUKZ/Novo-Link-Cadastro-iGreen?node-id=2496-330&m=dev" }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ProgressCard } from "@/components/igreen/ProgressCard";`}
                        exampleCode={`<ProgressCard
    title="2025-inhafatura-luz.pdf"
    status="loading"
    onClose={() => console.log('closed')}
/>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Estados de Carregamento">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Feedback visual para diferentes etapas do processo. A barra de progresso é indeterminada por padrão nestes estados.
                    </p>

                    <StyleguideExample
                        title="Processo em Etapas"
                        code={`<ProgressCard title="documento.pdf" status="loading" />
<ProgressCard title="documento.pdf" status="extracting" />
<ProgressCard title="documento.pdf" status="analyzing" />
<ProgressCard title="documento.pdf" status="concluding" />`}
                    >
                        <div className="flex flex-col gap-4 max-w-lg">
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="loading"
                            />
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="extracting"
                            />
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="analyzing"
                            />
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="concluding"
                            />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Estados Finais">
                    <StyleguideExample
                        title="Conclusão e Erro"
                        code={`<ProgressCard title="concluido.pdf" status="completed" />
<ProgressCard title="erro.pdf" status="error" />`}
                    >
                        <div className="flex flex-col gap-4 max-w-lg">
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="completed"
                                onClose={() => alert('Delete action')}
                            />
                            <ProgressCard
                                title="2025-inhafatura-luz.pdf"
                                status="error"
                                statusMessage="Não foi possível ler alguns campos."
                                onClose={() => alert('Delete action')}
                            />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Tipos de Arquivo e Interação">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente suporta diferentes ícones baseados no tipo do arquivo e interação de clique no ícone.
                    </p>

                    <StyleguideExample
                        title="Tipos de Ícone e Clique"
                        code={`<ProgressCard title="documento.pdf" type="pdf" />
<ProgressCard title="imagem.png" type="image" />
<ProgressCard 
    title="clique-me.pdf" 
    type="pdf" 
    onClickIcon={() => alert('Preview')} 
/>`}
                    >
                        <div className="flex flex-col gap-4 max-w-lg">
                            <ProgressCard
                                title="contrato.pdf"
                                type="pdf"
                                status="completed"
                            />
                            <ProgressCard
                                title="foto-perfil.png"
                                type="image"
                                status="completed"
                            />
                            <ProgressCard
                                title="visualizar-documento.pdf"
                                type="pdf"
                                status="completed"
                                onClickIcon={() => alert('Abrir preview do documento')}
                            />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Playground Interativo">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Teste a interação de remoção.
                    </p>
                    <StyleguideExample
                        title="Lista Interativa"
                        code={`const [cards, setCards] = useState([
    { id: 1, title: "2025-inhafatura-luz.pdf", status: "loading" },
    { id: 2, title: "contrato-final.pdf", status: "completed" }
]);

return (
    <div className="flex flex-col gap-4">
        {cards.map(card => (
            <ProgressCard
                key={card.id}
                title={card.title}
                status={card.status}
                onClose={() => setCards(c => c.filter(i => i.id !== card.id))}
            />
        ))}
    </div>
);`}
                    >
                        <div className="flex flex-col gap-4 max-w-lg p-6 bg-bg-surface border border-border rounded-lg">
                            {cards.length === 0 ? (
                                <button
                                    onClick={() => setCards([
                                        { id: 1, title: "2025-inhafatura-luz.pdf", status: "loading", progress: 0 },
                                        { id: 2, title: "contrato-final.pdf", status: "completed", progress: 100 },
                                    ])}
                                    className="text-button-sm text-fg-primary hover:underline"
                                >
                                    Resetar Cards
                                </button>
                            ) : (
                                cards.map(card => (
                                    <ProgressCard
                                        key={card.id}
                                        title={card.title}
                                        status={card.status}
                                        onClose={() => removeCard(card.id)}
                                    />
                                ))
                            )}
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "title",
                                type: "string",
                                defaultValue: "-",
                                description: "Título do card, geralmente o nome do arquivo"
                            },
                            {
                                prop: "status",
                                type: "'loading' | 'extracting' | 'analyzing' | 'concluding' | 'completed' | 'error'",
                                defaultValue: "'loading'",
                                description: "Estado atual do processo"
                            },
                            {
                                prop: "type",
                                type: "'default' | 'pdf' | 'image'",
                                defaultValue: "'default'",
                                description: "Define o ícone principal baseado no tipo de arquivo"
                            },
                            {
                                prop: "statusMessage",
                                type: "string",
                                defaultValue: "-",
                                description: "Mensagem personalizada para o status. Se omitido, usa a padrão."
                            },
                            {
                                prop: "progress",
                                type: "number",
                                defaultValue: "-",
                                description: "Valor do progresso (0-100). Se omitido em loading states, exibe indeterminado."
                            },
                            {
                                prop: "onClickIcon",
                                type: "() => void",
                                defaultValue: "-",
                                description: "Callback ao clicar no ícone principal. Adiciona estilos de hover/cursor."
                            },
                            {
                                prop: "mainIcon",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Ícone personalizado para substituir a lógica padrão"
                            },
                            {
                                prop: "onClose",
                                type: "() => void",
                                defaultValue: "-",
                                description: "Callback para ação de fechar/deletar"
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
