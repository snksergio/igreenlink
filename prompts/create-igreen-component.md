# Guia de Criação de Componentes iGreen (Custom Components)

> **Última atualização**: Janeiro 2026
> **Localização**: `src/components/igreen/[ComponentName]/`

Este guia define a arquitetura **OBRIGATÓRIA** para criação de componentes personalizados no iGreen Design System.

---

## 🎯 Princípios Fundamentais

### 1. Zero Arbitrary Values
```typescript
// ❌ PROIBIDO - Valores hardcoded
className="text-[14px] bg-[#F3F4F6] rounded-[12px] h-[46px]"

// ✅ OBRIGATÓRIO - Tokens semânticos
className="text-body-lg-medium bg-bg-muted rounded-base h-[var(--height-form-md)]"
```

### 2. Separation of Concerns
- **View (`.tsx`)**: Apenas lógica e composição. ZERO estilos inline.
- **Styles (`.styles.ts`)**: TODOS os estilos centralizados.
- **Types (`.types.ts`)**: Interfaces e tipos.
- **Hooks (`.hooks.ts`)**: Hooks específicos do componente (opcional).
- **Utils (`.utils.ts`)**: Helpers internos (opcional).

### 3. Semantic Token Mapping
Todo estilo DEVE vir de tokens definidos em `themes/default/`.

---

## 📂 Estrutura de Pastas OBRIGATÓRIA

```
src/components/igreen/
└── ComponentName/
    ├── index.ts              # Barrel export (OBRIGATÓRIO)
    ├── component.tsx         # View - Lógica e composição (OBRIGATÓRIO)
    ├── component.styles.ts   # Estilos centralizados (OBRIGATÓRIO)
    ├── component.types.ts    # Interfaces e tipos (OBRIGATÓRIO)
    ├── component.hooks.ts    # Hooks específicos (OPCIONAL)
    └── component.utils.ts    # Helpers internos (OPCIONAL)
```

---

## 📝 Detalhe de Cada Arquivo

### 1. `component.types.ts` - Definição de Tipos

Define TODAS as interfaces e tipos do componente.

```typescript
import { ReactNode, HTMLAttributes } from "react";

/**
 * Props do componente principal
 */
export interface ComponentNameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Título do componente */
    title: string;
    /** Descrição opcional */
    description?: string;
    /** Ícone a ser exibido */
    icon?: ReactNode;
    /** Variante visual do componente */
    variant?: 'default' | 'outlined' | 'filled';
    /** Estado ativo */
    active?: boolean;
    /** Estado de loading */
    loading?: boolean;
    /** Tamanho do componente */
    size?: 'sm' | 'md' | 'lg';
    /** Callback de clique */
    onClick?: () => void;
    /** Classes adicionais (aplicadas via cn()) */
    className?: string;
    /** Filhos do componente */
    children?: ReactNode;
}

/**
 * Props do sub-componente (se houver)
 */
export interface ComponentNameItemProps {
    title: string;
    value: string;
    selected?: boolean;
    onSelect?: (value: string) => void;
}
```

**Regras:**
- Use JSDoc para documentar cada prop
- Exporte apenas tipos, nunca valores
- Defina defaults na documentação quando aplicável
- Sempre inclua `className?: string` para extensibilidade

---

### 2. `component.styles.ts` - Estilos Centralizados (CRITICAL)

Este é o arquivo **MAIS IMPORTANTE**. Centraliza TODOS os estilos usando APENAS tokens semânticos.

```typescript
/**
 * Estilos do ComponentName
 * 
 * REGRAS:
 * 1. NUNCA use valores hardcoded (text-[14px], bg-[#fff], etc.)
 * 2. SEMPRE use tokens semânticos do design system
 * 3. Organize estilos por elemento/área do componente
 * 
 * @see themes/default/semantic/colors.css - Cores semânticas
 * @see themes/default/semantic/typography.css - Classes tipográficas
 * @see themes/default/primitives/sizes.css - Heights e radius
 * @see themes/default/semantic/utilities.css - Shadows e rings
 */

export const componentStyles = {
    // ===== CONTAINER PRINCIPAL =====
    container: {
        // Base: sempre aplicado
        base: "flex items-center gap-3 h-[var(--height-form-md)] p-3 rounded-[var(--radius-base)] transition-all duration-200 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-ring-primary",

        // Variantes visuais
        variants: {
            default: "bg-bg-surface border border-border hover:bg-bg-subtle hover:border-border-moderate",
            outlined: "bg-transparent border border-border-moderate hover:bg-bg-subtle",
            filled: "bg-bg-primary border border-transparent text-fg-on-primary hover:bg-bg-primary-hover",
        },

        // Estados
        states: {
            active: "bg-bg-primary-subtle border-border-primary ring-1 ring-border-primary-muted",
            disabled: "opacity-50 cursor-not-allowed pointer-events-none",
            loading: "cursor-wait",
        },

        // Tamanhos
        sizes: {
            sm: "h-[var(--height-form-sm)] p-2 gap-2",      // 40px
            md: "h-[var(--height-form-md)] p-3 gap-3",      // 46px
            lg: "h-[var(--height-form-lg)] p-4 gap-4",      // 52px
        }
    },

    // ===== ÍCONE =====
    icon: {
        wrapper: {
            base: "shrink-0 flex items-center justify-center rounded-[var(--radius-sm)] transition-all duration-200",
            sizes: {
                sm: "size-8",    // 32px
                md: "size-10",   // 40px
                lg: "size-12",   // 48px
            },
            variants: {
                default: "bg-bg-muted text-fg-strong",
                active: "bg-bg-primary-subtle text-fg-primary",
            }
        },
        // Inner controla o tamanho do SVG
        inner: "size-6 flex items-center justify-center [&_svg]:size-full",
    },

    // ===== CONTEÚDO DE TEXTO =====
    content: {
        container: "flex flex-col gap-0.5 flex-1 min-w-0",
        
        // Tipografia usando classes semânticas do design system
        // @see themes/default/semantic/typography.css
        title: "text-body-md-semibold text-fg-strong truncate",
        description: "text-body-xs-medium text-fg-muted truncate",
        
        // Variantes de cor para diferentes estados
        titleActive: "text-fg-primary",
        descriptionActive: "text-fg-main",
    },

    // ===== INDICADOR DE SELEÇÃO =====
    indicator: {
        base: "shrink-0 size-[18px] transition-transform duration-200 ease-out",
        active: "text-fg-primary scale-100",
        inactive: "text-fg-muted scale-95 group-hover:scale-100",
    },

    // ===== SOMBRAS (via classes utilitárias) =====
    // @see themes/default/semantic/utilities.css
    shadows: {
        subtle: "shadows-boxshadow-sm",
        elevated: "shadows-boxshadow-base",
        prominent: "shadows-boxshadow-xl",
    }
};

// ===== LOOKUP TABLE: Figma → Token =====
// Use esta tabela para mapear valores do Figma
/**
 * | Figma Property    | Figma Value        | Token/Class                          |
 * |-------------------|--------------------|--------------------------------------|
 * | Font Size         | 11px Bold Upper    | text-label                           |
 * | Font Size         | 11px Medium        | text-caption-sm                      |
 * | Font Size         | 12px Medium        | text-body-sm-medium                  |
 * | Font Size         | 13px Semibold      | text-body-md-semibold                |
 * | Font Size         | 14px Medium        | text-body-lg-medium                  |
 * | Font Size         | 18px Bold          | text-section-title                   |
 * | Height (Input)    | 40px               | h-[var(--height-form-sm)]            |
 * | Height (Input)    | 46px               | h-[var(--height-form-md)]            |
 * | Height (Input)    | 52px               | h-[var(--height-form-lg)]            |
 * | Height (Input)    | 60px               | h-[var(--height-form-xl)]            |
 * | Border Radius     | 10px               | rounded-[var(--radius-sm)]           |
 * | Border Radius     | 14px               | rounded-[var(--radius-base)]         |
 * | Border Radius     | 18px               | rounded-[var(--radius-lg)]           |
 * | Border Radius     | 32px               | rounded-[var(--radius-xl)]           |
 * | Background        | White/Card         | bg-bg-surface                        |
 * | Background        | Gray Light         | bg-bg-muted                          |
 * | Background        | Brand Green        | bg-bg-primary                        |
 * | Text Color        | Dark/Title         | text-fg-strong                       |
 * | Text Color        | Body               | text-fg-main                         |
 * | Text Color        | Muted/Placeholder  | text-fg-muted                        |
 * | Border            | Default            | border-border                        |
 * | Border            | Muted              | border-border-muted                  |
 * | Shadow            | Small              | shadows-boxshadow-sm                 |
 * | Shadow            | Base               | shadows-boxshadow-base               |
 */
```

---

### 3. `component.tsx` - View/Lógica

Componente funcional. **ZERO estilos inline**. Tudo vem do arquivo `.styles.ts`.

```typescript
"use client";

import React from "react";
import { ComponentNameProps } from "./component.types";
import { componentStyles } from "./component.styles";
import { cn } from "@/lib/utils";

/**
 * ComponentName
 * 
 * Descrição do componente e seu propósito.
 * 
 * @example
 * <ComponentName
 *   title="Título"
 *   description="Descrição"
 *   variant="default"
 * />
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
    title,
    description,
    icon,
    variant = "default",
    active = false,
    loading = false,
    size = "md",
    onClick,
    className,
    children,
    ...props
}) => {
    // ===== Composição de classes =====
    const containerClasses = cn(
        // Base (sempre aplicado)
        componentStyles.container.base,
        // Variante visual
        componentStyles.container.variants[variant],
        // Tamanho
        componentStyles.container.sizes[size],
        // Estados condicionais
        active && componentStyles.container.states.active,
        loading && componentStyles.container.states.loading,
        // Classes externas (extensibilidade)
        className
    );

    const iconWrapperClasses = cn(
        componentStyles.icon.wrapper.base,
        componentStyles.icon.wrapper.sizes[size],
        active 
            ? componentStyles.icon.wrapper.variants.active 
            : componentStyles.icon.wrapper.variants.default
    );

    // ===== Render =====
    return (
        <button
            type="button"
            className={containerClasses}
            onClick={onClick}
            disabled={loading}
            {...props}
        >
            {/* Ícone */}
            {icon && (
                <div className={iconWrapperClasses}>
                    <div className={componentStyles.icon.inner}>
                        {icon}
                    </div>
                </div>
            )}

            {/* Conteúdo */}
            <div className={componentStyles.content.container}>
                <span className={cn(
                    componentStyles.content.title,
                    active && componentStyles.content.titleActive
                )}>
                    {title}
                </span>
                {description && (
                    <span className={cn(
                        componentStyles.content.description,
                        active && componentStyles.content.descriptionActive
                    )}>
                        {description}
                    </span>
                )}
            </div>

            {/* Indicador de seleção */}
            <div className={cn(
                componentStyles.indicator.base,
                active 
                    ? componentStyles.indicator.active 
                    : componentStyles.indicator.inactive
            )}>
                {/* SVG do indicador */}
            </div>

            {/* Children se houver */}
            {children}
        </button>
    );
};

ComponentName.displayName = "ComponentName";
```

---

### 4. `index.ts` - Barrel Export

```typescript
// Componente principal
export { ComponentName } from "./component";

// Tipos exportados
export type { ComponentNameProps } from "./component.types";

// Sub-componentes (se houver)
// export { ComponentNameItem } from "./component";
// export type { ComponentNameItemProps } from "./component.types";
```

---

### 5. `component.hooks.ts` - Hooks Específicos (OPCIONAL)

```typescript
import { useState, useCallback } from "react";

/**
 * Hook para gerenciar estado de seleção do ComponentName
 */
export function useComponentNameSelection(initialValue?: string) {
    const [selected, setSelected] = useState(initialValue);

    const handleSelect = useCallback((value: string) => {
        setSelected(value);
    }, []);

    const clearSelection = useCallback(() => {
        setSelected(undefined);
    }, []);

    return {
        selected,
        handleSelect,
        clearSelection,
        isSelected: (value: string) => selected === value,
    };
}
```

---

### 6. `component.utils.ts` - Helpers Internos (OPCIONAL)

```typescript
/**
 * Helper para formatar labels
 */
export function formatLabel(label: string, uppercase = false): string {
    const trimmed = label.trim();
    return uppercase ? trimmed.toUpperCase() : trimmed;
}

/**
 * Helper para validar props
 */
export function validateProps(props: Record<string, unknown>): boolean {
    // Lógica de validação
    return true;
}
```

---

## ✅ Checklist de Validação

Antes de considerar o componente pronto:

### Arquitetura
- [ ] Estrutura de pastas correta (`ComponentName/`)
- [ ] Todos os arquivos obrigatórios criados
- [ ] Barrel export funcionando (`index.ts`)

### Estilos
- [ ] **ZERO valores hardcoded** (text-[14px], bg-[#fff], rounded-[12px])
- [ ] Todas as cores são semânticas (`text-fg-*`, `bg-bg-*`, `border-*`)
- [ ] Tipografia usa classes do design system (`text-label`, `text-body-*`)
- [ ] Heights usam CSS vars (`h-[var(--height-form-md)]`)
- [ ] Radius usam CSS vars (`rounded-[var(--radius-base)]`)
- [ ] Shadows usam classes utilitárias (`shadows-boxshadow-*`)

### Código
- [ ] Componente usa `cn()` para composição de classes
- [ ] Props `className` permite extensibilidade
- [ ] Tipos bem definidos com JSDoc
- [ ] DisplayName definido

### Acessibilidade
- [ ] Elementos interativos focáveis
- [ ] Estados de focus visíveis
- [ ] Disabled state implementado

---

## 📚 Referências

- **Tokens de Cores**: `themes/default/semantic/colors.css`
- **Tokens de Tipografia**: `themes/default/semantic/typography.css`
- **Tokens de Tamanho**: `themes/default/primitives/sizes.css`
- **Utilitários**: `themes/default/semantic/utilities.css`
- **Mapeamento Figma**: `prompts/extract-component-figma.md`

---

## 🔄 Após Criar o Componente

1. **Atualizar barrel export geral**:
   ```typescript
   // src/components/igreen/index.ts
   export * from "./ComponentName";
   ```

2. **Criar página no Styleguide**:
   Siga `prompts/create-styleguide-page.md`

3. **Testar Dark Mode**:
   Verificar se todos os tokens respondem corretamente
