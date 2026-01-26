# Guia de Criação de Páginas do Styleguide

> **Última atualização**: Janeiro 2026
> **Localização**: `src/app/styleguide/components/[component-name]/page.tsx`

Este guia define o padrão **OBRIGATÓRIO** para criar páginas de documentação de componentes no iGreen Design System.

---

## 🎯 Objetivo

Criar documentação viva e interativa para cada componente, permitindo:
- Visualização de todas as variantes
- Cópia fácil de código
- Referência de props
- Exemplos de composição

---

## 📂 Estrutura de Arquivos

```
src/app/styleguide/
├── components/
│   └── [component-name]/
│       └── page.tsx          # Página de documentação
├── ui/
│   ├── header.tsx            # Componente de header reutilizável
│   ├── section.tsx           # Wrapper de seção
│   ├── usage.tsx             # Bloco de import/example
│   ├── example.tsx           # Card de exemplo com código
│   └── props-table.tsx       # Tabela de props
└── navigation.ts             # Array de navegação
```

---

## 📝 Template Completo da Página

```tsx
"use client";

import { ComponentName } from "@/components/igreen/ComponentName";
// ou
import { ComponentName } from "@/components/shadcn/component-name";

import { User, Check, AlertCircle } from "lucide-react"; // Ícones para demos
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function ComponentNamePage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* ========================================
                1. HEADER
                ======================================== */}
            <StyleguideHeader
                title="Component Name"
                description="Descrição breve do propósito e uso do componente no contexto da aplicação."
                links={[
                    { label: "Documentação Shadcn UI", href: "https://ui.shadcn.com/docs/components/component" },
                    { label: "Radix UI Primitives", href: "https://radix-ui.com/primitives/docs/components/component" },
                    { label: "Figma Design", href: "https://figma.com/..." }
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                
                {/* ========================================
                    2. USAGE (Import + Exemplo Básico)
                    ======================================== */}
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { ComponentName } from "@/components/igreen/ComponentName";`}
                        exampleCode={`<ComponentName
  title="Título"
  description="Descrição"
  variant="default"
  onClick={() => console.log('clicked')}
/>`}
                    />
                </StyleguideSection>

                {/* ========================================
                    3. VARIANTES
                    ======================================== */}
                <StyleguideSection title="Variantes">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        O componente suporta múltiplas variantes visuais para diferentes contextos.
                    </p>

                    <StyleguideExample
                        title="Variante Default"
                        code={`<ComponentName variant="default">Default</ComponentName>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <ComponentName variant="default">Default</ComponentName>
                            <ComponentName variant="secondary">Secondary</ComponentName>
                            <ComponentName variant="ghost">Ghost</ComponentName>
                        </div>
                    </StyleguideExample>

                    <StyleguideExample
                        title="Com Estados"
                        code={`<ComponentName active>Active State</ComponentName>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <ComponentName>Normal</ComponentName>
                            <ComponentName active>Active</ComponentName>
                            <ComponentName disabled>Disabled</ComponentName>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
                    4. TAMANHOS
                    ======================================== */}
                <StyleguideSection title="Tamanhos">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Tamanhos seguem os tokens do design system: SM (40px), MD (46px), LG (52px), XL (60px)
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <div className="flex flex-wrap items-end gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <ComponentName size="sm">Small</ComponentName>
                                <code className="text-caption-sm text-fg-muted">size="sm" (40px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <ComponentName size="md">Medium</ComponentName>
                                <code className="text-caption-sm text-fg-muted">size="md" (46px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <ComponentName size="lg">Large</ComponentName>
                                <code className="text-caption-sm text-fg-muted">size="lg" (52px)</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <ComponentName size="xl">X-Large</ComponentName>
                                <code className="text-caption-sm text-fg-muted">size="xl" (60px)</code>
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                {/* ========================================
                    5. COM ÍCONES
                    ======================================== */}
                <StyleguideSection title="Com Ícones">
                    <StyleguideExample
                        code={`<ComponentName icon={<User />}>Com Ícone</ComponentName>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <ComponentName icon={<User />}>Com Ícone à Esquerda</ComponentName>
                            <ComponentName startIcon={<User />} endIcon={<Check />}>
                                Com Dois Ícones
                            </ComponentName>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
                    6. COMPOSIÇÃO / CASOS DE USO
                    ======================================== */}
                <StyleguideSection title="Composição">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Exemplos de como compor o componente com outros elementos.
                    </p>

                    <StyleguideExample
                        title="Em um Formulário"
                        code={`<form>
  <ComponentName>Submit Form</ComponentName>
</form>`}
                    >
                        <div className="max-w-md space-y-4">
                            {/* Exemplo de composição real */}
                            <div className="bg-bg-surface border border-border rounded-lg p-6">
                                <h3 className="text-section-title text-fg-strong mb-4">
                                    Formulário de Exemplo
                                </h3>
                                <ComponentName className="w-full">
                                    Submit
                                </ComponentName>
                            </div>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
                    7. TABELA DE TODAS AS COMBINAÇÕES
                    ======================================== */}
                <StyleguideSection title="Todas as Combinações">
                    <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-bg-muted">
                                <tr>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">
                                        Variante
                                    </th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">
                                        Default
                                    </th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">
                                        Active
                                    </th>
                                    <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">
                                        Disabled
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {["default", "secondary", "ghost"].map((variant) => (
                                    <tr key={variant} className="hover:bg-bg-subtle">
                                        <td className="px-6 py-4 text-body-sm-semibold text-fg-strong capitalize">
                                            {variant}
                                        </td>
                                        <td className="px-6 py-4">
                                            <ComponentName variant={variant as any} size="md">
                                                Button
                                            </ComponentName>
                                        </td>
                                        <td className="px-6 py-4">
                                            <ComponentName variant={variant as any} size="md" active>
                                                Button
                                            </ComponentName>
                                        </td>
                                        <td className="px-6 py-4">
                                            <ComponentName variant={variant as any} size="md" disabled>
                                                Button
                                            </ComponentName>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </StyleguideSection>

                {/* ========================================
                    8. TABELA DE PROPS
                    ======================================== */}
                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "variant",
                                type: "'default' | 'secondary' | 'ghost' | 'outline'",
                                defaultValue: "'default'",
                                description: "Define a aparência visual do componente"
                            },
                            {
                                prop: "size",
                                type: "'sm' | 'md' | 'lg' | 'xl'",
                                defaultValue: "'lg'",
                                description: "Tamanho do componente (40px | 46px | 52px | 60px)"
                            },
                            {
                                prop: "active",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Estado ativo/selecionado"
                            },
                            {
                                prop: "disabled",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Desabilita interação"
                            },
                            {
                                prop: "loading",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Mostra indicador de loading"
                            },
                            {
                                prop: "icon",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Ícone a ser exibido"
                            },
                            {
                                prop: "startIcon",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Ícone à esquerda do conteúdo"
                            },
                            {
                                prop: "endIcon",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Ícone à direita do conteúdo"
                            },
                            {
                                prop: "onClick",
                                type: "() => void",
                                defaultValue: "-",
                                description: "Callback de clique"
                            },
                            {
                                prop: "className",
                                type: "string",
                                defaultValue: "-",
                                description: "Classes adicionais CSS"
                            },
                            {
                                prop: "children",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Conteúdo do componente"
                            },
                        ]}
                    />
                </StyleguideSection>

                {/* ========================================
                    9. ACESSIBILIDADE (Opcional)
                    ======================================== */}
                <StyleguideSection title="Acessibilidade">
                    <div className="bg-bg-surface border border-border rounded-lg p-6 space-y-4">
                        <ul className="list-disc pl-5 space-y-2 text-body-md-medium text-fg-main">
                            <li>
                                <strong>Keyboard Navigation:</strong> Tab para focar, Enter/Space para ativar
                            </li>
                            <li>
                                <strong>Focus Visible:</strong> Ring de foco visível usando tokens
                            </li>
                            <li>
                                <strong>Disabled State:</strong> Opacity reduzida + cursor-not-allowed
                            </li>
                            <li>
                                <strong>Screen Readers:</strong> Suporte a role e aria-labels apropriados
                            </li>
                        </ul>
                    </div>
                </StyleguideSection>

            </div>
        </div>
    );
}
```

---

## 🧱 Componentes Auxiliares do Styleguide

Os componentes em `src/app/styleguide/ui/` já existem e devem ser utilizados:

### `StyleguideHeader`
```tsx
interface StyleguideHeaderProps {
    title: string;
    description: string;
    links?: Array<{ label: string; href: string }>;
}
```

### `StyleguideSection`
```tsx
interface StyleguideSectionProps {
    title: string;
    children: ReactNode;
}
```

### `StyleguideUsage`
```tsx
interface StyleguideUsageProps {
    importCode: string;
    exampleCode: string;
}
```

### `StyleguideExample`
```tsx
interface StyleguideExampleProps {
    title?: string;
    code: string;
    children: ReactNode;
}
```

### `StyleguidePropsTable`
```tsx
interface StyleguidePropsTableProps {
    data: Array<{
        prop: string;
        type: string;
        defaultValue: string;
        description: string;
    }>;
}
```

---

## 🎨 Estilos Padrão

Todos os estilos devem usar tokens do design system:

### Typography
- Título da página: `text-display-lg text-fg-strong`
- Título de seção: `text-section-title text-fg-strong`
- Descrição: `text-body-lg-medium text-fg-muted`
- Labels de código: `text-caption-sm text-fg-muted`

### Containers
- Cards: `bg-bg-surface border border-border rounded-lg`
- Code blocks: `bg-bg-muted` com fonte mono
- Tables: `divide-y divide-border`

### Spacing
- Sections: `space-y-12`
- Internal: `p-6`, `gap-4`

---

## 📋 Seções Obrigatórias

1. **Header** - Título, descrição, links externos
2. **Usage** - Import e exemplo básico
3. **Variantes** - Todas as variantes visuais
4. **Tamanhos** - Todas as opções de tamanho
5. **Props** - Tabela completa de propriedades

## 📋 Seções Opcionais

- **Com Ícones** - Se aplicável
- **Composição** - Casos de uso complexos
- **Tabela de Combinações** - Grid de variantes
- **Estados** - Loading, disabled, active
- **Acessibilidade** - Notas de a11y

---

## ✅ Checklist

- [ ] Página criada em `styleguide/components/[name]/page.tsx`
- [ ] Usa componentes auxiliares do styleguide (`StyleguideHeader`, etc.)
- [ ] Todas as variantes documentadas com exemplos visuais
- [ ] Todos os tamanhos documentados
- [ ] Props table completa e precisa
- [ ] Código de exemplo correto e copiável
- [ ] Usa tokens do design system (não hardcoded)
- [ ] Dark mode testado
- [ ] Navegação atualizada em `navigation.ts`

---

## 🔄 Após Criar a Página

1. **Atualizar navegação**:
```typescript
// src/app/styleguide/navigation.ts
export const navigation = [
    // ... outros
    {
        title: "Component Name",
        href: "/styleguide/components/component-name",
    }
];
```

2. **Testar localmente**:
```bash
npm run dev
# Acessar http://localhost:3000/styleguide/components/component-name
```

3. **Verificar Dark Mode**:
Toggle o tema e confirmar que tudo funciona
