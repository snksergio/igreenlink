# Guia de Extração de Componentes do Figma (Master Prompt)

> **Última atualização**: Janeiro 2026
> **Criticidade**: 🔴 MÁXIMA - Este é o guia mais importante do projeto

Este guia define o protocolo **OBRIGATÓRIO E EXAUSTIVO** para extração de design do Figma e implementação fiel no iGreen Link. O Figma é a **fonte da verdade** para o design, e TODOS os valores extraídos devem ser mapeados para tokens existentes.

---

## 🎯 Arquitetura do Sistema de Design

O Figma do iGreen Link é **espelhado** com o código:

```
┌─────────────────────────────────────────────────────────────────────┐
│                           FIGMA                                     │
│                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐ │
│  │    Variáveis    │    │     Estilos     │    │   Componentes   │ │
│  │  (Variables)    │    │   (Styles)      │    │   (Components)  │ │
│  │                 │    │                 │    │                 │ │
│  │ bg-primary      │    │ text-label      │    │ Button          │ │
│  │ fg-muted        │    │ shadows-base    │    │ Input           │ │
│  │ radius-base     │    │ text-body-md    │    │ Choice          │ │
│  └────────┬────────┘    └────────┬────────┘    └────────┬────────┘ │
│           │                      │                      │          │
└───────────┼──────────────────────┼──────────────────────┼──────────┘
            │                      │                      │
            ▼                      ▼                      ▼
┌───────────┴──────────────────────┴──────────────────────┴──────────┐
│                           CÓDIGO                                    │
│                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐ │
│  │ primitives/     │    │ semantic/       │    │ components/     │ │
│  │   colors.css    │    │   typography.css│    │   igreen/       │ │
│  │   sizes.css     │    │   utilities.css │    │   shadcn/       │ │
│  │                 │    │   colors.css    │    │                 │ │
│  │ --color-brand-* │    │ .text-label     │    │ <Button />      │ │
│  │ --radius-base   │    │ .shadows-base   │    │ <Input />       │ │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Implicação**: Se o Figma usa `bg-primary`, o código usa `bg-bg-primary`. Se usa estilo `text-label`, o código usa classe `.text-label`. **NÃO INVENTAR ESTILOS**.

---

## 🔴 REGRA FUNDAMENTAL: Zero Arbitrary Values

É **ESTRITAMENTE PROIBIDO** usar valores hardcoded no código:

```typescript
// ❌ PROIBIDO ABSOLUTO
className="text-[14px] font-medium"     // Use .text-body-lg-medium
className="bg-[#4ADE80]"                 // Use bg-bg-primary
className="rounded-[12px]"               // Use rounded-[var(--radius-base)]
className="h-[46px]"                     // Use h-[var(--height-form-md)]
className="shadow-md"                    // Use .shadows-boxshadow-base

// ✅ OBRIGATÓRIO
className="text-body-lg-medium"          // Token tipográfico
className="bg-bg-primary"                // Token de cor
className="rounded-[var(--radius-base)]" // CSS variable
className="h-[var(--height-form-md)]"    // CSS variable
className="shadows-boxshadow-base"       // Classe utilitária
```

---

## 📋 Processo de Extração (Step-by-Step)

### Passo 1: Acessar o Componente no Figma

Quando o usuário fornecer um link do Figma:
```
https://www.figma.com/design/{file-id}/{file-name}?node-id={node-id}&m=dev
```

Use a ferramenta **Figma MCP** para extrair:
- Estrutura do componente (layers)
- Propriedades de cada layer (fill, stroke, effects, text)
- Variantes e seus estados
- Auto Layout configuration
- Estilos aplicados (nome do estilo!)

### Passo 2: Identificar e Mapear Tokens

Para CADA propriedade visual, identifique o token correspondente:

#### 2.1 Cores (CRITICAL)

**No Figma, procure por:**
- Nome da variável (se usar Variables): `bg-primary`, `fg-muted`, etc.
- Nome do estilo de cor aplicado
- O valor hex/RGB é irrelevante - foque no NOME

| Variável/Estilo Figma | Token CSS Code |
|-----------------------|----------------|
| `bg-canvas` | `bg-bg-canvas` |
| `bg-surface` | `bg-bg-surface` |
| `bg-muted` | `bg-bg-muted` |
| `bg-subtle` | `bg-bg-subtle` |
| `bg-primary` | `bg-bg-primary` |
| `bg-primary-subtle` | `bg-bg-primary-subtle` |
| `bg-secondary` | `bg-bg-secondary` |
| `bg-success` | `bg-bg-success` |
| `bg-warning` | `bg-bg-warning` |
| `bg-critical` | `bg-bg-critical` |
| `bg-info` | `bg-bg-info` |
| `fg-strong` | `text-fg-strong` |
| `fg-main` | `text-fg-main` |
| `fg-muted` | `text-fg-muted` |
| `fg-subtle` | `text-fg-subtle` |
| `fg-primary` | `text-fg-primary` |
| `fg-on-primary` | `text-fg-on-primary` |
| `fg-success` | `text-fg-success` |
| `fg-warning` | `text-fg-warning` |
| `fg-critical` | `text-fg-critical` |
| `border` | `border-border` |
| `border-muted` | `border-border-muted` |
| `border-primary` | `border-border-primary` |

#### 2.2 Tipografia (CRITICAL)

**No Figma, procure por:**
- Nome do Text Style aplicado (geralmente no formato `text-*`)
- Se não houver estilo, use Size + Weight para mapear

| Figma Text Style / (Size + Weight) | Token Class |
|------------------------------------|-------------|
| `text-label` ou 11px Bold Uppercase | `text-label` |
| `text-caption-sm` ou 11px Medium | `text-caption-sm` |
| `text-caption-md` ou 12px Medium | `text-caption-md` |
| `text-body-xs-medium` ou 11px Medium | `text-body-xs-medium` |
| `text-body-xs-semibold` ou 11px Semibold | `text-body-xs-semibold` |
| `text-body-sm-medium` ou 12px Medium | `text-body-sm-medium` |
| `text-body-sm-semibold` ou 12px Semibold | `text-body-sm-semibold` |
| `text-body-sm-bold` ou 12px Bold | `text-body-sm-bold` |
| `text-body-md-medium` ou 13px Medium | `text-body-md-medium` |
| `text-body-md-semibold` ou 13px Semibold | `text-body-md-semibold` |
| `text-body-md-bold` ou 13px Bold | `text-body-md-bold` |
| `text-body-lg-medium` ou 14px Medium | `text-body-lg-medium` |
| `text-body-lg-semibold` ou 14px Semibold | `text-body-lg-semibold` |
| `text-button-sm` ou 13px Semibold (botão) | `text-button-sm` |
| `text-button-md` ou 14px Bold (botão) | `text-button-md` |
| `text-section-title` ou 18px Bold | `text-section-title` |
| `text-page-title` ou 26px Bold | `text-page-title` |
| `text-display-sm` ou 18px Bold | `text-display-sm` |
| `text-display-md` ou 24px Bold | `text-display-md` |
| `text-display-lg` ou 26px Bold | `text-display-lg` |

**IMPORTANTE**: As classes `.text-*` já incluem `font-size`, `font-weight`, `line-height` e `letter-spacing`. NÃO adicionar esses valores manualmente.

#### 2.3 Dimensões (Heights)

| Figma Height | CSS Variable | Tailwind |
|--------------|--------------|----------|
| 26px | `--height-form-xxs` | `h-[var(--height-form-xxs)]` |
| 36px | `--height-form-xs` | `h-[var(--height-form-xs)]` |
| 40px | `--height-form-sm` | `h-[var(--height-form-sm)]` |
| 46px | `--height-form-md` | `h-[var(--height-form-md)]` |
| 52px | `--height-form-lg` | `h-[var(--height-form-lg)]` |
| 60px | `--height-form-xl` | `h-[var(--height-form-xl)]` |

#### 2.4 Border Radius

| Figma Radius | CSS Variable | Tailwind |
|--------------|--------------|----------|
| 10px | `--radius-sm` | `rounded-[var(--radius-sm)]` |
| 14px | `--radius-base` | `rounded-[var(--radius-base)]` |
| 18px | `--radius-lg` | `rounded-[var(--radius-lg)]` |
| 32px | `--radius-xl` | `rounded-[var(--radius-xl)]` |

**NOTA**: Se o Figma mostrar valores diferentes (ex: 12px), use o token mais próximo (`--radius-base` = 14px) e reporte ao usuário.

#### 2.5 Sombras (Effects)

| Figma Shadow Style | CSS Class |
|--------------------|-----------|
| `shadows-boxshadow-xs` | `shadows-boxshadow-xs` |
| `shadows-boxshadow-sm` | `shadows-boxshadow-sm` |
| `shadows-boxshadow-base` | `shadows-boxshadow-base` |
| `shadows-boxshadow-xl` | `shadows-boxshadow-xl` |

#### 2.6 Focus Rings

| Figma Ring Style | CSS Class |
|------------------|-----------|
| `ring-primary` | `ring-ring-primary` |
| `ring-success` | `ring-ring-success` |
| `ring-warning` | `ring-ring-warning` |
| `ring-critical` | `ring-ring-critical` |

---

## 🔍 Passo 3: Identificar Variantes e Estados

O Figma usa **Component Properties** para definir variantes. Mapeie cada uma:

### Variantes Comuns

| Property Name | Valores Figma | Mapping |
|---------------|---------------|---------|
| `Variant` | Default, Outlined, Solid, Soft | `variant` prop |
| `Color` / `Status` | Primary, Secondary, Success, Warning, Critical | `color` prop |
| `Size` | SM, MD, LG, XL | `size` prop |
| `State` | Default, Hover, Focus, Active, Disabled, Loading | Pseudo-classes + props |
| `Has Icon` | True, False | `icon` prop |
| `Icon Position` | Left, Right, Both | `startIcon`, `endIcon` |

### Estados Interativos

```typescript
// Mapeamento de estados do Figma → Tailwind
{
    "Default": "",                                    // Estado base
    "Hover": "hover:bg-bg-primary-hover",            // :hover
    "Focus": "focus-visible:ring-ring-primary",      // :focus-visible
    "Active": "active:scale-[0.98]",                 // :active
    "Disabled": "disabled:opacity-50 disabled:pointer-events-none",
    "Loading": "cursor-wait"                         // Via prop
}
```

---

## 🧩 Passo 4: Identificar Composições

### Componentes Reutilizados

Verifique se o componente no Figma usa outros componentes que já existem no código:

| Componente Figma | Componente Código |
|------------------|-------------------|
| Button | `@/components/shadcn/button` |
| Input | `@/components/shadcn/input` |
| Field (Input + Label) | `@/components/shadcn/field` |
| Tabs | `@/components/shadcn/tabs` |
| Spinner | `@/components/shadcn/spinner` |
| Choice | `@/components/igreen/Choice` |

**REGRA**: Se o Figma usa um componente que já existe, **USE O COMPONENTE EXISTENTE** com as props corretas em vez de recriar do zero.

### Auto Layout → Flexbox

| Figma Auto Layout | Tailwind |
|-------------------|----------|
| Direction: Horizontal | `flex flex-row` |
| Direction: Vertical | `flex flex-col` |
| Gap: 8px | `gap-2` |
| Gap: 12px | `gap-3` |
| Gap: 16px | `gap-4` |
| Padding: 12px | `p-3` |
| Padding: 16px | `p-4` |
| Padding: 24px | `p-6` |
| Alignment: Center | `items-center justify-center` |
| Alignment: Space Between | `justify-between` |

---

## 📊 Passo 5: Documentar Mapeamento

Crie uma tabela de mapeamento ANTES de escrever código:

```markdown
## Component: [Nome]
### Estrutura
- Container
  - IconWrapper
    - Icon
  - Content
    - Title
    - Description
  - ActionIndicator

### Mapeamento de Tokens
| Layer | Property | Figma Value | Token Aplicado |
|-------|----------|-------------|----------------|
| Container | Background | bg-surface | `bg-bg-surface` |
| Container | Border | border | `border-border` |
| Container | Height | 46px | `h-[var(--height-form-md)]` |
| Container | Radius | 14px | `rounded-[var(--radius-base)]` |
| Container | Shadow | shadows-boxshadow-sm | `shadows-boxshadow-sm` |
| Title | Typography | text-body-md-semibold | `text-body-md-semibold` |
| Title | Color | fg-strong | `text-fg-strong` |
| Description | Typography | text-body-xs-medium | `text-body-xs-medium` |
| Description | Color | fg-muted | `text-fg-muted` |

### Variantes
| Variante | Tokens Diferentes |
|----------|-------------------|
| Active | `bg-bg-primary-subtle`, `border-border-primary`, `ring-1 ring-border-primary-muted` |
| Inactive | `bg-transparent` |
```

---

## ✅ Checklist de Validação (OBRIGATÓRIO)

Execute CADA item antes de considerar a extração completa:

### Cores
- [ ] NENHUMA cor hex ou RGB no código
- [ ] NENHUMA cor primitiva direta (`neutral-500`)
- [ ] Todas as cores são semânticas (`fg-*`, `bg-*`, `border-*`)

### Tipografia
- [ ] NENHUMA classe `text-[Xpx]` manual
- [ ] NENHUMA classe `font-medium`, `font-semibold` direta
- [ ] Todas usam tokens `.text-*` do design system

### Dimensões
- [ ] Heights usam `var(--height-form-*)` via CSS
- [ ] Radius usam `var(--radius-*)` via CSS
- [ ] Widths usam scale Tailwind padrão (`w-full`, `w-80`) ou flex

### Efeitos
- [ ] Shadows usam classes `.shadows-*`
- [ ] Rings usam classes `.ring-ring-*`

### Composição
- [ ] Componentes existentes foram reutilizados
- [ ] Variantes mapeadas corretamente
- [ ] Estados (hover, focus, disabled) implementados

### Fidelidade
- [ ] Layout corresponde ao Figma
- [ ] Spacing está correto
- [ ] Dark mode funciona

---

## ⚠️ Tratamento de Discrepâncias

Se um valor do Figma não corresponder a nenhum token:

### Caso 1: Valor próximo existe
```
Figma: radius 12px
Token disponível: radius-sm (10px), radius-base (14px)
→ Use radius-base (14px) e documente a discrepância
```

### Caso 2: Valor completamente novo
```
Figma: height 55px (não existe no sistema)
→ NÃO CRIE VALOR ARBITRÁRIO
→ Pergunte ao usuário: "O Figma mostra 55px de altura, mas o token mais
   próximo é --height-form-lg (52px). Devo usar 52px ou este design requer
   um novo token?"
```

### Caso 3: Cor não mapeada
```
Figma: cor #7C3AED (purple) sem nome de variável
→ NÃO USE HEX
→ Pergunte ao usuário: "Encontrei uma cor roxa (#7C3AED) sem variável
   correspondente. Isso é intencional ou deveria ser uma cor do sistema?"
```

---

## 📚 Referência Rápida de Arquivos

| Tipo de Token | Arquivo CSS |
|---------------|-------------|
| Cores primitivas (brand, neutral, etc.) | `themes/default/primitives/colors.css` |
| Cores semânticas (bg-*, fg-*, border-*) | `themes/default/semantic/colors.css` |
| Heights e Radius | `themes/default/primitives/sizes.css` |
| Typography | `themes/default/semantic/typography.css` |
| Shadows e Rings | `themes/default/semantic/utilities.css` |

---

## 🔄 Workflow Completo

```
1. Receber link do Figma
   ↓
2. Acessar via MCP e extrair dados
   ↓
3. Identificar estrutura de layers
   ↓
4. Mapear CADA propriedade para token
   ↓
5. Documentar mapeamento
   ↓
6. Identificar componentes reutilizáveis
   ↓
7. Criar arquivo .styles.ts
   ↓
8. Criar arquivo .types.ts
   ↓
9. Criar arquivo .tsx
   ↓
10. Executar checklist de validação
    ↓
11. Testar dark mode
    ↓
12. Criar página no styleguide
```

---

## 🎯 Exemplo Prático: Extraindo um Card

**Link Figma**: `https://figma.com/design/xxx?node-id=123`

**Extração Figma MCP**:
```json
{
    "name": "ProductCard",
    "properties": {
        "variant": ["default", "featured"]
    },
    "layers": [
        {
            "name": "Container",
            "type": "FRAME",
            "fills": [{ "style": "bg-surface" }],
            "strokes": [{ "style": "border" }],
            "cornerRadius": 14,
            "effects": [{ "style": "shadows-boxshadow-sm" }],
            "paddingTop": 16,
            "paddingBottom": 16,
            "paddingLeft": 16,
            "paddingRight": 16
        },
        {
            "name": "Title",
            "type": "TEXT",
            "textStyle": "text-body-md-semibold",
            "fills": [{ "style": "fg-strong" }]
        },
        {
            "name": "Description",
            "type": "TEXT",
            "textStyle": "text-body-sm-medium",
            "fills": [{ "style": "fg-muted" }]
        }
    ]
}
```

**Tradução para component.styles.ts**:
```typescript
export const productCardStyles = {
    container: {
        base: [
            // Layout
            "flex flex-col",
            "p-4",                            // padding 16px
            // Border & Shape
            "border border-border",           // stroke: border
            "rounded-[var(--radius-base)]",   // cornerRadius: 14
            // Background
            "bg-bg-surface",                  // fills: bg-surface
            // Effects
            "shadows-boxshadow-sm",           // effects: shadows-boxshadow-sm
            // Transitions
            "transition-all duration-200"
        ].join(" "),
        variants: {
            default: "",
            featured: "border-border-primary bg-bg-primary-subtle"
        }
    },
    title: "text-body-md-semibold text-fg-strong",    // textStyle + fills
    description: "text-body-sm-medium text-fg-muted"  // textStyle + fills
};
```

---

## 💡 Dicas de Ouro

1. **Sempre olhe o NOME do estilo/variável no Figma** antes do valor numérico
2. **Se não encontrar um token, pergunte** - não invente
3. **Reutilize componentes existentes** sempre que possível
4. **O dark mode deve funcionar automaticamente** se usar tokens corretos
5. **Documente discrepâncias** para revisão com o designer
