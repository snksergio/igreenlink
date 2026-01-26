import { ComponentProps, ReactNode } from "react";

export type InputTextStatus = "default" | "error" | "warning" | "completed";

export interface InputTextProps extends Omit<ComponentProps<"input">, "size"> {
    /**
     * Rótulo do campo
     */
    label?: string;

    /**
     * Texto de ajuda ou mensagem de validação
     */
    helperText?: string;

    /**
     * Estado visual e comportamental do campo
     * @default "default"
     */
    status?: InputTextStatus;

    /**
     * Tamanho do componente
     * @default "md"
     */
    size?: "md" | "lg";

    /**
     * Ícone ou elemento à esquerda
     */
    startIcon?: ReactNode;

    /**
     * Ícone ou elemento à direita
     */
    endIcon?: ReactNode;

    /**
     * Se verdadeiro, exibe um spinner de carregamento no final
     * @default false
     */
    isLoading?: boolean;
}
