"use client";

import { useRef, useState } from "react";
import { FileDropZone, FileDropZoneRef } from "@/components/igreen/FileDropZone";
import { Button } from "@/components/shadcn/button";
import { Image, CheckCircle2, Upload, XCircle } from "lucide-react";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function FileDropZonePage() {
    // Demo principal - controle imperativo via ref
    const fileDropRef = useRef<FileDropZoneRef>(null);
    const [workflow, setWorkflow] = useState<"idle" | "validated" | "extracting" | "done">("idle");

    const handleValidated = async (file: File, password?: string) => {
        setWorkflow("validated");

        // Usa setStatus para continuar loading com mensagem customizada
        fileDropRef.current?.setStatus("loading", "Extraindo dados...", "Aguarde alguns segundos");
        setWorkflow("extracting");

        // Simula extração com IA
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sucesso via setStatus
        fileDropRef.current?.setStatus("success", "Upload concluído!", file.name);
        setWorkflow("done");
    };

    const handleReset = () => {
        fileDropRef.current?.clear();
        setWorkflow("idle");
    };

    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="FileDropZone"
                description="Componente de upload com drag-and-drop e validação automática de PDF."
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                {/* ===== USAGE ===== */}
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { FileDropZone, FileDropZoneRef } from "@/components/igreen/FileDropZone";`}
                        exampleCode={`const ref = useRef<FileDropZoneRef>(null);

<FileDropZone
  ref={ref}
  title="Envie seu PDF"
  description="Arraste ou clique para selecionar"
  accept=".pdf"
  validatePdf
  onValidated={(file, password) => {
    console.log("Arquivo:", file.name);
    console.log("Senha:", password);
  }}
/>`}
                    />
                </StyleguideSection>

                {/* ===== DEMO PRINCIPAL ===== */}
                <StyleguideSection title="Demo: Fluxo Completo com Controle Imperativo">
                    <div className="p-6 bg-bg-subtle rounded-lg border border-border">

                        {/* Workflow Steps */}
                        <div className="flex items-center gap-4 mb-6">
                            <WorkflowStep
                                number={1}
                                label="Selecionar"
                                active={workflow === "idle"}
                                done={workflow !== "idle"}
                            />
                            <div className="h-px w-8 bg-border" />
                            <WorkflowStep
                                number={2}
                                label="Validar PDF"
                                active={workflow === "validated"}
                                done={workflow === "extracting" || workflow === "done"}
                            />
                            <div className="h-px w-8 bg-border" />
                            <WorkflowStep
                                number={3}
                                label="Extrair Dados"
                                active={workflow === "extracting"}
                                done={workflow === "done"}
                            />
                        </div>

                        {/* FileDropZone único - nunca desmonta! */}
                        <FileDropZone
                            ref={fileDropRef}
                            title="Envie seu PDF"
                            description="Arraste ou clique para selecionar"
                            accept=".pdf"
                            validatePdf
                            onValidated={handleValidated}
                        />

                        {/* Botão reset quando done */}
                        {workflow === "done" && (
                            <div className="mt-4 flex justify-center">
                                <Button variant="soft" color="primary" size="md" onClick={handleReset}>
                                    <Upload className="size-[18px]" />
                                    Enviar outro arquivo
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Código */}
                    <div className="mt-6">
                        <StyleguideExample
                            title="Código do exemplo acima"
                            code={`const ref = useRef<FileDropZoneRef>(null);

const handleValidated = async (file: File, password?: string) => {
    // 1. Muda para loading com mensagem personalizada (imperativo)
    ref.current?.setStatus("loading", "Extraindo dados...", "Aguarde alguns segundos");
    
    // 2. Simula chamada de API/IA
    await extractDataFromPdf(file);
    
    // 3. Sucesso! Define status final
    ref.current?.setStatus("success", "Upload concluído!", file.name);
};

<FileDropZone
    ref={ref}
    title="Envie seu PDF"
    validatePdf
    onValidated={handleValidated}
/>`}
                        >
                            <div className="text-body-sm-medium text-fg-muted">
                                💡 <strong>Teste:</strong> O componente agora expõe <code>setStatus</code> via ref, permitindo criar fluxos complexos sem desmontar o componente.
                            </div>
                        </StyleguideExample>
                    </div>
                </StyleguideSection>

                {/* ===== EXEMPLOS ===== */}
                <StyleguideSection title="Variantes">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Básico */}
                        <StyleguideExample
                            title="Básico (1 botão)"
                            code={`<FileDropZone 
  title="Arraste seu arquivo"
  onFile={(file) => console.log(file)} 
/>`}
                        >
                            <FileDropZone
                                title="Arraste seu arquivo"
                                description="Formatos: PDF, JPG, PNG"
                                onFile={(file) => alert(file.name)}
                            />
                        </StyleguideExample>

                        {/* Com Camera */}
                        <StyleguideExample
                            title="Com Câmera (2 botões)"
                            code={`<FileDropZone 
  onCameraClick={() => openCamera()} 
/>`}
                        >
                            <FileDropZone
                                title="Arraste seu arquivo"
                                description="Formatos: PDF, JPG, PNG"
                                onCameraClick={() => alert("Câmera aberta!")}
                            />
                        </StyleguideExample>

                        {/* Loading */}
                        <StyleguideExample
                            title="Status: loading"
                            code={`<FileDropZone status="loading" />`}
                        >
                            <FileDropZone
                                status="loading"
                                title="Processando arquivo..."
                                description="Aguarde"
                            />
                        </StyleguideExample>

                        {/* Error */}
                        <StyleguideExample
                            title="Status: error"
                            code={`<FileDropZone 
  status="error" 
  onRetry={() => reset()} 
/>`}
                        >
                            <FileDropZone
                                status="error"
                                title="Erro ao processar"
                                description="Arquivo inválido ou corrompido"
                                onRetry={() => alert("Retry!")}
                            />
                        </StyleguideExample>

                    </div>
                </StyleguideSection>

                {/* ===== CUSTOMIZAÇÃO ===== */}
                <StyleguideSection title="Customização">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Ícone customizado */}
                        <StyleguideExample
                            title="Ícone Customizado"
                            code={`<FileDropZone 
  icon={<Image />} 
  title="Envie sua foto" 
/>`}
                        >
                            <FileDropZone
                                icon={<Image className="size-full" />}
                                title="Envie sua foto"
                                description="JPG, PNG ou WEBP"
                            />
                        </StyleguideExample>

                        {/* Altura customizada */}
                        <StyleguideExample
                            title="Altura Customizada"
                            code={`<FileDropZone height={150} />`}
                        >
                            <FileDropZone
                                height={150}
                                title="Compacto"
                                description="height={150}"
                            />
                        </StyleguideExample>

                        {/* Children customizado */}
                        <StyleguideExample
                            title="Children Customizado"
                            code={`<FileDropZone title="Upload">
  <FileDropZone.Actions>
    <Button>Meu Botão</Button>
  </FileDropZone.Actions>
</FileDropZone>`}
                        >
                            <FileDropZone title="Upload personalizado">
                                <FileDropZone.Actions>
                                    <Button variant="soft" size="md">Cancelar</Button>
                                    <Button size="md">Enviar Agora</Button>
                                </FileDropZone.Actions>
                            </FileDropZone>
                        </StyleguideExample>

                    </div>
                </StyleguideSection>

                {/* ===== PROPS ===== */}
                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            { prop: "title", type: "string", defaultValue: "-", description: "Título (obrigatório)" },
                            { prop: "description", type: "string", defaultValue: "-", description: "Texto secundário" },
                            { prop: "accept", type: "string", defaultValue: "-", description: "Tipos aceitos (.pdf, image/*)" },
                            { prop: "onFile", type: "(file) => void", defaultValue: "-", description: "Callback quando arquivo é selecionado" },
                            { prop: "validatePdf", type: "boolean", defaultValue: "false", description: "Ativa validação automática de PDF" },
                            { prop: "onValidated", type: "(file, pwd?) => void", defaultValue: "-", description: "Callback após validação com sucesso" },
                            { prop: "height", type: "'auto' | number", defaultValue: "226", description: "Altura em pixels ou 'auto'" },
                            { prop: "status", type: "FileDropZoneStatus", defaultValue: "'idle'", description: "Controle manual do status" },
                            { prop: "onCameraClick", type: "() => void", defaultValue: "-", description: "Se definido, mostra 2 botões" },
                            { prop: "onRetry", type: "() => void", defaultValue: "-", description: "Callback do botão retry" },
                            { prop: "ref", type: "FileDropZoneRef", defaultValue: "-", description: "Acesso a getFile() e clear()" },
                        ]}
                    />
                </StyleguideSection>

                {/* ===== HOOKS ===== */}
                <StyleguideSection title="Hooks Reutilizáveis">
                    <StyleguideUsage
                        importCode={`import { 
  useFileDrop, 
  usePdfValidation, 
  useFileDropZone 
} from "@/components/igreen/FileDropZone";`}
                        exampleCode={`// Hook de drag-and-drop
const { isDragging, file, handlers } = useFileDrop({ 
  accept: ".pdf",
  onFile: (f) => console.log(f) 
});

// Hook de validação PDF
const { status, validate, submitPassword } = usePdfValidation({
  onValidated: (f) => upload(f)
});

// Hook combinado (usado internamente pelo FileDropZone)
const dropZone = useFileDropZone({ validatePdf: true });`}
                    />
                </StyleguideSection>

            </div >
        </div >
    );
}

// ===== COMPONENTE AUXILIAR =====
function WorkflowStep({
    number,
    label,
    active,
    done
}: {
    number: number;
    label: string;
    active: boolean;
    done: boolean;
}) {
    const bgColor = done
        ? "bg-bg-success text-fg-on-success"
        : active
            ? "bg-bg-primary text-fg-on-primary"
            : "bg-bg-muted text-fg-muted";

    return (
        <div className="flex items-center gap-2">
            <div className={`size-6 rounded-full flex items-center justify-center text-body-sm-medium ${bgColor}`}>
                {done ? <CheckCircle2 className="size-4" /> : number}
            </div>
            <span className={`text-body-sm-medium ${active || done ? "text-fg-strong" : "text-fg-muted"}`}>
                {label}
            </span>
        </div>
    );
}
