"use client";

import { useState, useRef, useCallback } from "react";
import { validatePdf as validatePdfUtil } from "../utils/pdfValidator";
import { pdfMessages } from "../FileDropZone.config";

export type PdfValidationStatus = "idle" | "loading" | "password" | "error";

export interface PdfValidationMessages {
    loading?: { title: string; description: string };
    error?: { title: string };
    passwordRequired?: { title: string; description: string };
    passwordWrong?: { title: string; description: string };
}

export interface UsePdfValidationOptions {
    /** Delay mínimo do loading (ms) */
    minLoadingDelay?: number;
    /** Callback quando PDF é validado com sucesso */
    onValidated?: (file: File, password?: string) => void;
    /** Mensagens customizadas (override defaults) */
    messages?: PdfValidationMessages;
}

export interface UsePdfValidationReturn {
    status: PdfValidationStatus;
    passwordError: boolean;
    title: string | null;
    description: string | null;
    validate: (file: File, password?: string) => Promise<void>;
    submitPassword: (password: string) => Promise<void>;
    reset: () => void;
    passwordInputRef: React.RefObject<HTMLInputElement | null>;
}

/**
 * Hook para validação de PDF com detecção de senha
 */
export function usePdfValidation(options: UsePdfValidationOptions = {}): UsePdfValidationReturn {
    const {
        minLoadingDelay = 1500,
        onValidated,
        messages = {}
    } = options;

    // Merge mensagens custom com defaults
    const msg = {
        loading: messages.loading ?? pdfMessages.loading,
        error: messages.error ?? pdfMessages.error,
        passwordRequired: messages.passwordRequired ?? pdfMessages.passwordRequired,
        passwordWrong: messages.passwordWrong ?? pdfMessages.passwordWrong,
    };

    const [status, setStatus] = useState<PdfValidationStatus>("idle");
    const [passwordError, setPasswordError] = useState(false);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const currentFileRef = useRef<File | null>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const reset = useCallback(() => {
        setStatus("idle");
        setPasswordError(false);
        setTitle(null);
        setDescription(null);
        currentFileRef.current = null;
    }, []);

    const validate = useCallback(async (file: File, password?: string) => {
        currentFileRef.current = file;

        // Reset e inicia loading
        setPasswordError(false);
        setStatus("loading");
        setTitle(msg.loading.title);
        setDescription(msg.loading.description);

        // Delay mínimo para evitar flickering
        const minDelay = new Promise(resolve => setTimeout(resolve, minLoadingDelay));

        const [result] = await Promise.all([
            validatePdfUtil(file, password),
            minDelay
        ]);

        if (result.error) {
            setStatus("error");
            setTitle(msg.error.title);
            setDescription(result.error);
            return;
        }

        if (result.isPasswordProtected && !result.isPasswordCorrect) {
            setStatus("password");
            setPasswordError(!!password);

            if (password) {
                setTitle(msg.passwordWrong.title);
                setDescription(msg.passwordWrong.description);
            } else {
                setTitle(msg.passwordRequired.title);
                setDescription(msg.passwordRequired.description);
            }
            return;
        }

        // PDF válido
        reset();
        onValidated?.(file, password);
    }, [minLoadingDelay, onValidated, reset, msg]);

    const submitPassword = useCallback(async (password: string) => {
        if (currentFileRef.current) {
            await validate(currentFileRef.current, password);
        }
    }, [validate]);

    return {
        status,
        passwordError,
        title,
        description,
        validate,
        submitPassword,
        reset,
        passwordInputRef,
    };
}
