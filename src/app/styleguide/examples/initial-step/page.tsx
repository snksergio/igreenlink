"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/shadcn/button";
import { FileDropZone, FileDropZoneRef } from "@/components/igreen/FileDropZone";
import { ProgressCard } from "@/components/igreen/ProgressCard";
import { DialogAlert } from "@/components/igreen/DialogAlert";
import { InputText } from "@/components/igreen/InputText";
import { Check, Copy, ChevronDown } from "lucide-react";
import { Icon } from "@/components/igreen/Icon";

type Step = 'upload' | 'success';

export default function InitialStepPage() {
    const fileDropRef = useRef<FileDropZoneRef>(null);
    const [step, setStep] = useState<Step>('upload');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleValidated = async (file: File, password?: string) => {
        setFileName(file.name);
        // 1. Muda para loading com mensagem personalizada
        fileDropRef.current?.setStatus("loading", "Extraindo dados...", "Aguarde alguns segundos");

        // 2. Simula chamada de API/IA
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. Sucesso! Define status final e muda de passo
        fileDropRef.current?.setStatus("success", "Upload concluído!", file.name);
        setStep('success');
    };

    const handleReset = () => {
        setStep('upload');
        setDialogOpen(false);
        setFileName("");
        // Reset dropzone logic if needed (it re-renders so it should be fresh)
    };

    return (
        <div className="min-h-screen bg-bg-surface flex flex-col items-center pt-8 pb-8 px-6">
            <div className="w-full max-w-[480px] flex flex-col gap-6">

                {/* Header */}
                <div className="flex flex-col items-start gap-6">
                    <div className="inline-flex items-center justify-center bg-bg-muted rounded-full h-[26px] px-3">
                        <span className="text-[11px] font-bold text-fg-main uppercase leading-[18px] tracking-[-0.16px]">
                            PASSO 1 DE 5
                        </span>
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <h1 className="text-page-title text-fg-strong">
                            Comece enviando <span className="text-fg-success">sua conta de luz</span>
                        </h1>

                        <p className="text-page-subtitle text-fg-muted">
                            Com ela, analisamos seu perfil de consumo e agilizamos todo o processo
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-6 w-full">

                    {step === 'upload' ? (
                        <>
                            {/* Dropzone Area */}
                            <div className="w-full">
                                <FileDropZone
                                    ref={fileDropRef}
                                    title="Solte aqui o arquivo da sua última conta"
                                    description="Formatos aceitos: PDF, JPG ou PNG"
                                    accept=".pdf, .jpg, .jpeg, .png"
                                    validatePdf
                                    onValidated={handleValidated}
                                    className="w-full"
                                />
                            </div>

                            {/* Alternative Action */}
                            <div className="flex justify-center">
                                <Button variant="link">
                                    Não tenho a fatura para enviar neste momento
                                </Button>
                            </div>

                            {/* Tips Section */}
                            <div className="flex flex-col gap-2 w-full mt-2">
                                <h3 className="text-label text-fg-main">
                                    DICAS PARA UM ENVIO SEM ERROS
                                </h3>

                                <div className="bg-bg-muted border border-border rounded-[18px] p-3 flex flex-col gap-2 w-full">
                                    <TipItem text="Certifique-se que os dados da conta estão legíveis" />
                                    <TipItem text="O arquivo deve conter a conta completa (frente e verse se houver)" />
                                    <TipItem text="O arquivo Fotos devem ser tiradas em local de boa iluminação" />
                                </div>
                            </div>
                        </>
                    ) : (
                        /* Success View */
                        <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Progress Card */}
                            <ProgressCard
                                title={fileName || "2025-inhafatura-luz.pdf"}
                                type="pdf"
                                status="completed"
                                statusMessage="Concluído • 12.6 MB"
                                onClose={() => setDialogOpen(true)}
                                onClickIcon={() => alert('Preview documento')}
                            />

                            {/* Installation Number */}
                            <div className="flex flex-col gap-2">
                                <InputText
                                    label="NÚMERO DA INSTALAÇÃO"
                                    defaultValue="3006251232"
                                    status="completed"
                                    readOnly
                                    size="lg"
                                />
                                <div className="flex justify-end">
                                    <Button variant="link" className="text-button-xs h-auto p-0 text-fg-main">Onde encontrar minha UC?</Button>
                                </div>
                            </div>

                            {/* Distributor Card */}
                            <div className="bg-bg-surface border border-border rounded-base pl-3 pt-3 pr-3 pb-[18px] flex items-center justify-between shadows-boxshadow-base">
                                <div className="flex flex-col gap-4 w-full">
                                    {/* Header */}
                                    <div className="bg-bg-success-subtle rounded-base p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-bg-success rounded-sm size-9 flex items-center justify-center">
                                                <Icon name="fill-eletric" className="size-5 text-white" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-fg-success text-body-xs-semibold uppercase">
                                                    DISTRIBUIDORA PARA SUA REGIÃO
                                                </span>
                                                <span className="text-body-lg-semibold text-fg-strong">
                                                    CEMIG MG
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronDown className="size-5 text-fg-success" />
                                    </div>

                                    {/* Address */}
                                    <div className="flex justify-between px-1 items-center">
                                        <div className="flex flex-col">
                                            <span className="text-body-sm-bold text-fg-strong">Avenida Princesa Isabel</span>
                                            <span className="text-body-xs-medium text-fg-muted">Boca da Barra</span>
                                            <span className="text-body-xs-medium text-fg-muted">Uberlândia, MG - 38400-192</span>
                                        </div>
                                        <Button variant="default" color="secondary" className="h-10 w-10 text-fg-muted rounded-xl border border-border flex items-center justify-center p-0">
                                            <Copy className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Enhance Analysis */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-label text-fg-muted uppercase">APRIMORE A SUA ANÁLISE</h3>

                                <div className="bg-bg-muted rounded-base p-3 flex flex-col gap-4 border boder-border">
                                    <div className="bg-bg-surface rounded-base p-3 flex items-center gap-3 shadows-boxshadow-sm">
                                        <div className="bg-bg-success-subtle rounded-sm size-[42px] flex items-center justify-center">
                                            <Icon name="fill-energy-link" className="size-5 text-fg-success" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-body-md-semibold text-fg-strong">Conectar a distribuidora</span>
                                            <span className="text-body-xs-medium text-fg-muted">Informe seu login para agilizar a aprovação de forma automática</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <InputText
                                            label="LOGIN"
                                            placeholder="Usuário para acesso"
                                        />
                                        <InputText
                                            label="SENHA"
                                            type="password"
                                            placeholder="Senha"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-auto w-full pt-8 flex gap-3">
                    {step === 'success' ? (
                        <>
                            <Button variant="soft" color="secondary" className="w-1/3 h-14 rounded-xl text-button-md font-bold" onClick={handleReset}>
                                Voltar
                            </Button>
                            <Button variant="default" className="w-2/3 h-14 rounded-xl text-button-md font-bold bg-bg-success hover:bg-bg-success-hover text-white">
                                Prosseguir
                            </Button>
                        </>
                    ) : (
                        <Button variant="default" color="secondary" size="lg" className="w-full text-button-md font-bold">
                            Voltar
                        </Button>
                    )}
                </div>
            </div>

            {/* Reset Dialog */}
            <DialogAlert
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                title="Remover arquivo?"
                description="Ao remover o arquivo, todos os dados preenchidos serão perdidos. Deseja continuar?"
                variant="critical"
                confirmLabel="Sim, remover"
                cancelLabel="Cancelar"
                onConfirm={handleReset}
                onCancel={() => setDialogOpen(false)}
            />
        </div>
    );
}

// Helper Component for Tips
function TipItem({ text }: { text: string }) {
    return (
        <div className="bg-bg-surface px-3.5 py-2.5 rounded-[var(--radius-base)] shadows-boxshadow-sm flex items-center w-full">
            <span className="text-body-xs-semibold text-fg-main tracking-[0.055px]">
                {text}
            </span>
        </div>
    );
}
