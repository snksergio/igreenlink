"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuGroup,
} from "@/components/shadcn/dropdown-menu";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";
import { Check, ChevronRight, User, Settings, LogOut, CreditCard } from "lucide-react";
import { Button } from "@/components/shadcn/button"; // Assuming Button exists or reusing standard button
import * as React from "react";

function DropdownMenuDistributorExample() {
    const [selected, setSelected] = React.useState("Cemig Sim");
    const distributors = [
        "Cemig Sim",
        "CPFL Energia",
        "Equatorial Energia",
        "Light S.A.",
        "Neoenergia",
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-bg-primary text-fg-on-primary px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary transition-colors hover:bg-bg-primary/90">
                {selected}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {distributors.map((distributor) => (
                    <DropdownMenuItem
                        key={distributor}
                        onClick={() => setSelected(distributor)}
                        active={selected === distributor}
                    >
                        <span className="flex-1">{distributor}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function DropdownMenuPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            {/* ========================================
          1. HEADER
          ======================================== */}
            <StyleguideHeader
                title="Dropdown Menu"
                description="Menu suspenso para exibir uma lista de ações ou opções ao usuário."
                links={[
                    {
                        label: "Documentação Shadcn UI",
                        href: "https://ui.shadcn.com/docs/components/dropdown-menu",
                    },
                    {
                        label: "Radix UI Primitives",
                        href: "https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
                    },
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
                {/* ========================================
            2. USAGE (Import + Exemplo Básico)
            ======================================== */}
                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"`}
                        exampleCode={`<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                    />
                </StyleguideSection>

                {/* ========================================
            3. EXEMPLO PRINCIPAL (Figma Match)
            ======================================== */}
                <StyleguideSection title="Exemplo iGreen (Figma)">
                    <p className="text-body-md-medium text-fg-muted mb-6">
                        Réplica do design extraído do Figma (Node 2528-6062).
                    </p>

                    <StyleguideExample
                        title="Seletor de Distribuidora"
                        code={`"use client"
import * as React from "react"
import { Check } from "lucide-react"

// Inside component
const [selected, setSelected] = React.useState("Cemig Sim")
const distributors = [
  "Cemig Sim",
  "CPFL Energia",
  "Equatorial Energia",
]

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="bg-bg-primary text-fg-on-primary px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary">
      {selected}
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    {distributors.map((distributor) => (
      <DropdownMenuItem
        key={distributor}
        onClick={() => setSelected(distributor)}
        active={selected === distributor}
      >
        <span className="flex-1">{distributor}</span>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>`}
                    >
                        <div className="flex justify-center p-8 bg-bg-subtle rounded-lg">
                            <DropdownMenuDistributorExample />
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
            4. VARIANTES COMPLEXAS
            ======================================== */}
                <StyleguideSection title="Com ícones e Separadores">
                    <StyleguideExample
                        title="Menu Completo"
                        code={`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 size-4" />
        <span>Perfil</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard className="mr-2 size-4" />
        <span>Cobrança</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 size-4" />
        <span>Configurações</span>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 size-4" />
      <span>Sair</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                    >
                        <div className="flex justify-center p-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-bg-surface border border-border px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary shadow-sm hover:bg-bg-muted transition-colors">
                                    Minha Conta
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User className="mr-2 size-4" />
                                            <span>Perfil</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCard className="mr-2 size-4" />
                                            <span>Cobrança</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 size-4" />
                                            <span>Configurações</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 size-4" />
                                        <span>Sair</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </StyleguideExample>

                </StyleguideSection>

                {/* ========================================
            4.1 CHECKBOXES
            ======================================== */}
                <StyleguideSection title="Checkboxes">
                    <StyleguideExample
                        title="Itens Selecionáveis"
                        code={`"use client"
import * as React from "react"
import { DropdownMenuCheckboxItem } from "@/components/shadcn/dropdown-menu"

// Inside component
const [showStatusBar, setShowStatusBar] = React.useState(true)
const [showActivityBar, setShowActivityBar] = React.useState(false)
const [showPanel, setShowPanel] = React.useState(false)

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={showStatusBar}
      onCheckedChange={setShowStatusBar}
    >
      Status Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showActivityBar}
      onCheckedChange={setShowActivityBar}
      disabled
    >
      Activity Bar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showPanel}
      onCheckedChange={setShowPanel}
    >
      Panel
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                    >
                        <div className="flex justify-center p-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-bg-surface border border-border px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary shadow-sm hover:bg-bg-muted transition-colors">
                                    Open Menu
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked={true}>
                                        Status Bar
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked={false} disabled>
                                        Activity Bar
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem checked={false}>
                                        Panel
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
            4.2 RADIO GROUPS
            ======================================== */}
                <StyleguideSection title="Radio Group">
                    <StyleguideExample
                        title="Seleção Única"
                        code={`"use client"
import * as React from "react"
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/shadcn/dropdown-menu"

// Inside component
const [position, setPosition] = React.useState("bottom")

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
                    >
                        <div className="flex justify-center p-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-bg-surface border border-border px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary shadow-sm hover:bg-bg-muted transition-colors">
                                    Open Menu
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuRadioGroup value="bottom">
                                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
            4.3 SUBMENUS
            ======================================== */}
                <StyleguideSection title="Submenus">
                    <StyleguideExample
                        title="Menus Aninhados"
                        code={`<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuItem>New Tab</DropdownMenuItem>
    <DropdownMenuItem>New Window</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Save Page As...</DropdownMenuItem>
        <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Developer Tools</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
                    >
                        <div className="flex justify-center p-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-bg-surface border border-border px-4 py-2 rounded-[var(--radius-base)] text-body-sm-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring-primary shadow-sm hover:bg-bg-muted transition-colors">
                                    Open Submenu
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuItem>New Tab</DropdownMenuItem>
                                    <DropdownMenuItem>New Window</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Save Page As...</DropdownMenuItem>
                                            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                {/* ========================================
            5. PROPS
            ======================================== */}
                <StyleguideSection title="Props">
                    <p className="mb-4 text-body-md text-fg-muted">
                        Este componente é uma abstração do Radix UI Dropdown Menu.
                        Consulte a documentação oficial para props avançadas.
                    </p>
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "children",
                                type: "ReactNode",
                                defaultValue: "-",
                                description: "Conteúdo do item de menu.",
                            },
                            {
                                prop: "onSelect",
                                type: "(event: Event) => void",
                                defaultValue: "-",
                                description: "Evento disparado ao selecionar um item.",
                            },
                            {
                                prop: "disabled",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Se verdadeiro, desabilita a interação com o item.",
                            },
                            {
                                prop: "sideOffset",
                                type: "number",
                                defaultValue: "4",
                                description:
                                    "Distância em pixels entre o trigger e o conteúdo do menu.",
                            },
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
