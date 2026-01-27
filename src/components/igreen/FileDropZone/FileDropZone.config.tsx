/**
 * Configuração centralizada do FileDropZone
 * 
 * Contém ícones, textos e labels para facilitar customização e tradução.
 */

import React from "react";
import {
    Upload,
    AlertTriangle,
    Lock,
    Loader2,
    CheckCircle2,
    File,
    Camera,
    RefreshCw,
    ArrowRight
} from "lucide-react";
import { FileDropZoneStatus } from "./FileDropZone.types";

// ===== ÍCONES POR STATUS =====
export const statusIcons: Record<FileDropZoneStatus, React.ReactNode> = {
    idle: <Upload className="size-full" />,
    dragging: <Upload className="size-full" />,
    loading: <Loader2 className="size-full" />,
    success: <CheckCircle2 className="size-full" />,
    error: <AlertTriangle className="size-full" />,
    warning: <Lock className="size-full" />,
};

// ===== ÍCONES DE BOTÕES =====
export const buttonIcons = {
    file: <File className="size-[18px]" />,
    camera: <Camera className="size-[18px]" />,
    retry: <RefreshCw className="size-[18px]" />,
    submit: <ArrowRight className="size-[18px]" />,
};

// ===== TEXTOS DE VALIDAÇÃO PDF =====
export const pdfMessages = {
    loading: {
        title: "Validando PDF...",
        description: "Aguarde enquanto verificamos o arquivo",
    },
    error: {
        title: "Erro ao processar PDF",
    },
    passwordRequired: {
        title: "PDF protegido por senha",
        description: "Digite a senha para continuar",
    },
    passwordWrong: {
        title: "Senha incorreta",
        description: "Tente novamente",
    },
};

// ===== LABELS DE BOTÕES =====
export const buttonLabels = {
    selectFile: "Selecionar Arquivo",
    useCamera: "Usar Câmera",
    retry: "Tentar novamente",
};

// ===== PLACEHOLDERS =====
export const placeholders = {
    password: "Senha do PDF",
};
