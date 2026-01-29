"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/select";
import { StyleguideHeader } from "../../ui/header";
import { StyleguideSection } from "../../ui/section";
import { StyleguideUsage } from "../../ui/usage";
import { StyleguideExample } from "../../ui/example";
import { StyleguidePropsTable } from "../../ui/props-table";

export default function SelectPage() {
    return (
        <div className="min-h-screen bg-bg-canvas">
            <StyleguideHeader
                title="Select"
                description="Displays a list of options for the user to pick from—triggered by a button."
                links={[
                    { label: "Documentação Shadcn UI", href: "https://ui.shadcn.com/docs/components/select" },
                    { label: "Radix UI Primitives", href: "https://www.radix-ui.com/primitives/docs/components/select" },
                ]}
            />

            <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">

                <StyleguideSection title="Usage">
                    <StyleguideUsage
                        importCode={`import { \n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/shadcn/select"`}
                        exampleCode={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
                    />
                </StyleguideSection>

                <StyleguideSection title="Placeholder">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Exemplo de Select sem opção selecionada, exibindo o placeholder com a cor correta (text-fg-muted).
                    </p>
                    <StyleguideExample
                        title="Placeholder State"
                        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Selecione uma opção..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">Opção 1</SelectItem>
    <SelectItem value="opt2">Opção 2</SelectItem>
  </SelectContent>
</Select>`}
                    >
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Selecione uma opção..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="opt1">Opção 1</SelectItem>
                                <SelectItem value="opt2">Opção 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Tamanhos">
                    <p className="text-body-md-medium text-fg-muted mb-4">
                        Suporta os tamanhos definidos nos tokens: SM, MD (default), e LG.
                    </p>
                    <div className="bg-bg-surface border border-border rounded-lg p-6">
                        <div className="flex flex-wrap items-end gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <Select>
                                    <SelectTrigger className="w-[180px]" size="sm">
                                        <SelectValue placeholder="Small (sm)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="opt1">Option 1</SelectItem>
                                        <SelectItem value="opt2">Option 2</SelectItem>
                                    </SelectContent>
                                </Select>
                                <code className="text-caption-sm text-fg-muted">size="sm"</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Select>
                                    <SelectTrigger className="w-[180px]" size="md">
                                        <SelectValue placeholder="Medium (md)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="opt1">Option 1</SelectItem>
                                        <SelectItem value="opt2">Option 2</SelectItem>
                                    </SelectContent>
                                </Select>
                                <code className="text-caption-sm text-fg-muted">size="md"</code>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <Select>
                                    <SelectTrigger className="w-[180px]" size="default">
                                        <SelectValue placeholder="Default (lg)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="opt1">Option 1</SelectItem>
                                        <SelectItem value="opt2">Option 2</SelectItem>
                                    </SelectContent>
                                </Select>
                                <code className="text-caption-sm text-fg-muted">size="default"</code>
                            </div>
                        </div>
                    </div>
                </StyleguideSection>

                <StyleguideSection title="Status">
                    <StyleguideExample
                        title="Status de Validação"
                        code={`<Select>
  <SelectTrigger status="error">
    <SelectValue placeholder="Error State" />
  </SelectTrigger>
  {/* ... */}
</Select>`}
                    >
                        <div className="flex flex-wrap gap-6">
                            <Select>
                                <SelectTrigger className="w-[180px]" status="default">
                                    <SelectValue placeholder="Default" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="opt1">Option 1</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]" status="error">
                                    <SelectValue placeholder="Error" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="opt1">Option 1</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]" status="warning">
                                    <SelectValue placeholder="Warning" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="opt1">Option 1</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Com Grupos">
                    <StyleguideExample
                        title="Agrupamento de Opções"
                        code={`<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
      <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
                    >
                        <Select>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Select a timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>North America</SelectLabel>
                                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Europe</SelectLabel>
                                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </StyleguideExample>
                </StyleguideSection>

                <StyleguideSection title="Props">
                    <StyleguidePropsTable
                        data={[
                            {
                                prop: "size",
                                type: "'sm' | 'md' | 'default'",
                                defaultValue: "'default'",
                                description: "Tamanho do trigger do select."
                            },
                            {
                                prop: "status",
                                type: "'default' | 'error' | 'warning'",
                                defaultValue: "'default'",
                                description: "Estado de validação do componente."
                            },
                            {
                                prop: "error",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Alias para status='error'."
                            },
                            {
                                prop: "warning",
                                type: "boolean",
                                defaultValue: "false",
                                description: "Alias para status='warning'."
                            }
                        ]}
                    />
                </StyleguideSection>
            </div>
        </div>
    );
}
