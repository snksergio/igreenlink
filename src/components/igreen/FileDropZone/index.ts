// ===== COMPONENTE PRINCIPAL =====
export { FileDropZone } from "./FileDropZone";
export type { FileDropZoneRef } from "./FileDropZone.types";

// ===== SUB-COMPONENTES =====
export { Actions } from "./components/Actions";
export { IconBox } from "./components/IconBox";
export { DefaultActions } from "./components/DefaultActions";

// ===== TIPOS =====
export type {
    FileDropZoneProps,
    FileDropZoneStatus,
    FileDropZoneActionsProps,
    IconBoxProps
} from "./FileDropZone.types";

// ===== HOOKS (reutilizáveis) =====
export { useFileDrop, usePdfValidation, useFileDropZone } from "./hooks";
export type {
    UseFileDropOptions,
    UseFileDropReturn,
    UsePdfValidationOptions,
    UsePdfValidationReturn,
    PdfValidationStatus,
    PdfValidationMessages,
    UseFileDropZoneOptions,
    UseFileDropZoneReturn,
} from "./hooks";

// ===== CONFIGURAÇÃO =====
export {
    statusIcons,
    buttonIcons,
    pdfMessages,
    buttonLabels,
    placeholders
} from "./FileDropZone.config";

// ===== UTILITÁRIOS =====
export { validatePdf, isPdfJsLoaded, loadPdfJs } from "./utils/pdfValidator";
export type { PdfValidationResult } from "./utils/pdfValidator";

// ===== ESTILOS =====
export { fileDropZoneStyles } from "./FileDropZone.styles";
