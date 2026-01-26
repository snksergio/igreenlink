"use client";

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldLegend,
    FieldSeparator,
    FieldTitle
} from "@/components/shadcn/field";
import { Input } from "@/components/shadcn/input";
// import { Switch } from "@/components/shadcn/switch"; // Component doesn't exist yet
import { Button } from "@/components/shadcn/button";
import { ExternalLink, CreditCard } from "lucide-react";

export default function FieldPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* Header */}
            <header className="border-b border-border bg-bg-surface/80 backdrop-blur-md sticky top-0 z-10 transition-all">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-display-lg text-fg-strong">Field</h1>
                        <span className="bg-bg-primary-subtle text-fg-primary text-caption-sm font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Component
                        </span>
                    </div>
                    <p className="text-body-lg-medium text-fg-muted mb-6">
                        Primitives de formulário para construção de layouts flexíveis e acessíveis.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">

                {/* Basic Usage */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Uso Básico</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Vertical (Padrão)</h3>
                            <div className="p-6 border border-border rounded-lg bg-bg-surface">
                                <Field>
                                    <FieldLabel>Nome Completo</FieldLabel>
                                    <Input placeholder="João da Silva" />
                                    <FieldDescription>Seu nome público.</FieldDescription>
                                </Field>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-body-md-semibold text-fg-strong">Horizontal</h3>
                            <div className="p-6 border border-border rounded-lg bg-bg-surface">
                                <Field orientation="horizontal">
                                    <FieldLabel>Notificações</FieldLabel>
                                    <FieldContent>
                                        <FieldDescription>Receber update por email.</FieldDescription>
                                    </FieldContent>
                                    <div className="flex items-center h-[var(--height-form-md)]">
                                        <input type="checkbox" className="size-5 accent-brand-500 cursor-pointer" />
                                    </div>
                                </Field>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Field Group & Separator */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Agrupamento</h2>
                    <div className="p-6 border border-border rounded-lg bg-bg-surface max-w-xl">
                        <FieldSet>
                            <FieldLegend variant="label">Dados de Acesso</FieldLegend>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input type="email" placeholder="usuario@exemplo.com" />
                                </Field>
                                <Field>
                                    <FieldLabel>Senha</FieldLabel>
                                    <Input type="password" placeholder="••••••••" />
                                </Field>

                                <FieldSeparator>Ou continue com</FieldSeparator>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="soft" color="secondary" size="md" className="w-full">Google</Button>
                                    <Button variant="soft" color="secondary" size="md" className="w-full">GitHub</Button>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                    </div>
                </section>

                {/* Validation */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Validação</h2>
                    <div className="p-6 border border-border rounded-lg bg-bg-surface max-w-xl">
                        <Field>
                            <FieldLabel className="text-destructive">Username</FieldLabel>
                            <Input defaultValue="admin" aria-invalid="true" className="border-destructive focus-visible:ring-destructive" />
                            <FieldError className="block">Este nome de usuário já está em uso.</FieldError>
                        </Field>
                    </div>
                </section>

                {/* Field Content & Title */}
                <section>
                    <h2 className="text-section-title text-fg-strong mb-6">Conteúdo Complexo</h2>
                    <div className="p-6 border border-border rounded-lg bg-bg-surface max-w-2xl">
                        <Field orientation="horizontal" className="items-start">
                            <div className="p-2 bg-bg-muted rounded-md mt-1">
                                <CreditCard className="size-5 text-fg-muted" />
                            </div>
                            <FieldContent>
                                <FieldTitle>Cartão Corporativo</FieldTitle>
                                <FieldDescription>Usado para despesas da empresa.</FieldDescription>
                            </FieldContent>
                            <Button variant="soft" color="secondary" size="md">Editar</Button>
                        </Field>
                    </div>
                </section>

            </main>
        </div>
    );
}
