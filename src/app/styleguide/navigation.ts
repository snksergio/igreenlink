/**
 * Styleguide Navigation Configuration
 * 
 * Define a navegação lateral do styleguide.
 * Adicione novos itens aqui conforme novos componentes são criados.
 */

export interface NavItem {
    name: string;
    href: string;
    badge?: string; // Optional badge/tag, e.g., "iGreen"
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigation: NavSection[] = [
    {
        title: "Guide",
        items: [
            {
                name: "Documentation",
                href: "/styleguide/documentation",
            },
        ]
    },
    {
        title: "Foundation",
        items: [
            {
                name: "Design Tokens",
                href: "/styleguide",
            },
            {
                name: "Colors",
                href: "/styleguide/colors",
            },
            {
                name: "Typography",
                href: "/styleguide/typography",
            },
            {
                name: "Sizes & Spacing",
                href: "/styleguide/sizes",
            },
            {
                name: "Shadows",
                href: "/styleguide/shadows",
            },
            {
                name: "Border Radius",
                href: "/styleguide/radius",
            },
        ]
    },
    {
        title: "Components",
        items: [
            {
                name: "Button",
                href: "/styleguide/components/button",
            },
            {
                name: "Label",
                href: "/styleguide/components/label",
            },
            {
                name: "Input",
                href: "/styleguide/components/input",
            },
            {
                name: "Input Group",
                href: "/styleguide/components/input-group",
            },
            {
                name: "Field",
                href: "/styleguide/components/field",
            },
            {
                name: "Input Text",
                href: "/styleguide/components/input-text",
                badge: "iGreen"
            },
            {
                name: "Choice",
                href: "/styleguide/components/choice",
                badge: "iGreen"
            },
            {
                name: "Alert",
                href: "/styleguide/components/alert",
                badge: "UNSTYLED"
            },
            {
                name: "Tabs",
                href: "/styleguide/components/tabspage",
            },
            {
                name: "FileDropZone",
                href: "/styleguide/components/filedropzone",
                badge: "iGreen"
            },
            {
                name: "ToggleCard",
                href: "/styleguide/components/togglecard",
                badge: "iGreen"
            },
        ]
    }
];
