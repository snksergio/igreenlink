# Guia de Instalação de Componentes Shadcn UI

> **Última atualização**: Janeiro 2026
> **Localização destino**: `src/components/shadcn/[component].tsx`

Este guia define o procedimento **OBRIGATÓRIO** para adicionar novos componentes do Shadcn UI ao projeto iGreen Link.

---

## 🎯 Visão Geral do Processo

1. **Acessar documentação** via MCP Figma/URL
2. **Instalar componente** via CLI
3. **Refatorar estilos** para tokens semânticos
4. **Testar dark mode** e responsividade
5. **Criar documentação** no styleguide

---

## 📖 Passo 1: Acessar Documentação

Quando o usuário fornecer uma URL do Shadcn, use a ferramenta **read_url_content** para extrair informações:

```
URL: https://ui.shadcn.com/docs/components/[component-name]
```

**Extrair:**
- Nome do componente
- Variantes disponíveis
- Props e interfaces
- Dependências

---

## 📦 Passo 2: Instalação

### Comando de Instalação

```bash
npx shadcn@latest add [component-name]
```

**Importante:**
- O componente será instalado em: `src/components/ui/[component].tsx`
- Após instalação, **MOVER** para: `src/components/shadcn/[component].tsx`
- Atualizar imports se necessário

### Exemplos Comuns

```bash
# Componentes básicos
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs

# Múltiplos componentes
npx shadcn@latest add button input label
```

---

## 🎨 Passo 3: Refatoração de Estilos (CRITICAL)

Esta é a etapa **MAIS IMPORTANTE**. Todo componente instalado deve ser refatorado para usar tokens do design system.

### Regra Zero Arbitrary Values

```typescript
// ❌ PROIBIDO - Código original do Shadcn
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
            }
        }
    }
)

// ✅ OBRIGATÓRIO - Refatorado para tokens iGreen
const buttonVariants = cva(
    [
        "inline-flex items-center justify-center",
        "h-[var(--height-form-md)]",           // Token de altura
        "px-4",
        "text-button-sm",                       // Token tipográfico
        "rounded-[var(--radius-base)]",         // Token de radius
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-ring-primary",
        "disabled:pointer-events-none disabled:opacity-50"
    ].join(" "),
    {
        variants: {
            variant: {
                default: "bg-bg-primary text-fg-on-primary border-transparent hover:bg-bg-primary-hover",
            }
        }
    }
)
```

### Tabela de Mapeamento: Shadcn → iGreen

| Shadcn Original | Token iGreen |
|-----------------|--------------|
| `text-sm font-medium` | `text-body-sm-medium` |
| `text-sm font-semibold` | `text-body-sm-semibold` |
| `text-xs` | `text-caption-sm` |
| `rounded-md` | `rounded-[var(--radius-sm)]` |
| `rounded-lg` | `rounded-[var(--radius-base)]` |
| `rounded-xl` | `rounded-[var(--radius-lg)]` |
| `h-10` | `h-[var(--height-form-sm)]` |
| `h-11` | `h-[var(--height-form-md)]` |
| `h-12` | `h-[var(--height-form-lg)]` |
| `bg-primary` | `bg-bg-primary` |
| `text-primary-foreground` | `text-fg-on-primary` |
| `bg-secondary` | `bg-bg-secondary` |
| `text-secondary-foreground` | `text-fg-on-secondary` |
| `bg-destructive` | `bg-bg-critical` |
| `bg-muted` | `bg-bg-muted` |
| `text-muted-foreground` | `text-fg-muted` |
| `border-input` | `border-border` |
| `ring-offset-background` | Remover (não usado) |

### Padrão de Implementação com CVA

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variantes do componente
 * 
 * REGRAS:
 * - Usar tokens do design system para TODOS os valores
 * - Heights: var(--height-form-*)
 * - Radius: var(--radius-*)
 * - Typography: .text-* classes
 * - Colors: bg-bg-*, text-fg-*, border-*
 */
const componentVariants = cva(
    // ===== BASE STYLES =====
    [
        // Layout
        "inline-flex items-center justify-center",
        "gap-2",
        // Typography (token)
        "text-body-sm-medium",
        // Colors (tokens semânticos)
        "text-fg-main",
        // Border
        "border",
        "rounded-[var(--radius-base)]",
        // Transitions
        "transition-colors duration-200",
        // Focus states
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50"
    ].join(" "),
    {
        variants: {
            // ===== VARIANT =====
            variant: {
                default: [
                    "bg-bg-primary",
                    "text-fg-on-primary",
                    "border-transparent",
                    "hover:bg-bg-primary-hover"
                ].join(" "),
                secondary: [
                    "bg-bg-secondary",
                    "text-fg-on-secondary",
                    "border-border",
                    "hover:bg-bg-secondary-hover"
                ].join(" "),
                ghost: [
                    "bg-transparent",
                    "text-fg-main",
                    "border-transparent",
                    "hover:bg-bg-subtle"
                ].join(" "),
                outline: [
                    "bg-transparent",
                    "text-fg-main",
                    "border-border",
                    "hover:bg-bg-muted"
                ].join(" "),
                destructive: [
                    "bg-bg-critical",
                    "text-fg-on-critical",
                    "border-transparent",
                    "hover:bg-bg-critical-hover"
                ].join(" "),
            },

            // ===== SIZE =====
            size: {
                sm: "h-[var(--height-form-xs)] px-3 text-body-sm-medium",   // 36px
                md: "h-[var(--height-form-sm)] px-4 text-body-sm-medium",   // 40px
                lg: "h-[var(--height-form-md)] px-5 text-button-sm",        // 46px
                xl: "h-[var(--height-form-lg)] px-6 text-button-md",        // 52px
            }
        },
        defaultVariants: {
            variant: "default",
            size: "lg",
        }
    }
);

// ===== COMPONENT =====
export interface ComponentProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
    asChild?: boolean;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(componentVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);

Component.displayName = "Component";

export { Component, componentVariants };
```

---

## 🌙 Passo 4: Verificar Dark Mode

Todos os tokens semânticos devem responder ao dark mode automaticamente.

**Verificar:**
1. Abrir a aplicação
2. Ativar dark mode via toggle no sidebar do styleguide
3. Confirmar que todas as cores invertem corretamente

**Tokens que auto-respondem ao dark mode:**
- `bg-bg-*` → Inverte para dark backgrounds
- `text-fg-*` → Inverte para light text
- `border-*` → Ajusta para dark borders
- `shadows-*` → Aumenta opacidade

---

## 📝 Passo 5: Documentação

### Criar Página no Styleguide

```
src/app/styleguide/components/[component]/page.tsx
```

Seguir: `prompts/create-styleguide-page.md`

### Atualizar Navegação

```typescript
// src/app/styleguide/navigation.ts
{
    title: "Component Name",
    href: "/styleguide/components/component-name",
}
```

---

## ✅ Checklist Final

### Instalação
- [ ] Componente instalado via CLI
- [ ] Movido para `src/components/shadcn/`
- [ ] Imports atualizados

### Refatoração de Estilos
- [ ] **ZERO** classes Tailwind arbitrárias
- [ ] Heights usam `var(--height-form-*)`
- [ ] Radius usam `var(--radius-*)`
- [ ] Typography usam `.text-*` classes
- [ ] Cores usam tokens semânticos (`bg-bg-*`, `text-fg-*`)
- [ ] Borders usam `border-*` tokens
- [ ] Shadows usam `.shadows-*` classes
- [ ] Rings usam `.ring-*` tokens

### Verificação
- [ ] Light mode funcionando
- [ ] Dark mode funcionando
- [ ] Estados hover/focus corretos
- [ ] Estados disabled corretos
- [ ] Responsividade OK

### Documentação
- [ ] Página do styleguide criada
- [ ] Navegação atualizada
- [ ] Exemplos de uso documentados
- [ ] Props table completa

---

## 📚 Referências

- **Shadcn UI Docs**: https://ui.shadcn.com/docs/components
- **Tokens de Cores**: `themes/default/semantic/colors.css`
- **Tokens de Tipografia**: `themes/default/semantic/typography.css`
- **Tokens de Tamanho**: `themes/default/primitives/sizes.css`
- **Mapeamento Figma**: `prompts/extract-component-figma.md`

---

## 🔧 Troubleshooting

### Componente não encontrado
```bash
# Listar componentes disponíveis
npx shadcn@latest add --list
```

### Conflito de dependências
```bash
# Forçar instalação
npx shadcn@latest add [component] --overwrite
```

### Import não funciona
Verificar se o path está correto em `tsconfig.json`:
```json
{
    "compilerOptions": {
        "paths": {
            "@/*": ["./src/*"]
        }
    }
}
```
