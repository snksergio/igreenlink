import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * CONFIGURAÇÃO OTIMIZADA
 * * Regra de Ouro:
 * Adicionamos aqui apenas sufixos que não são números padrão
 * ou que podem ser confundidos com outras categorias (ex: ring width vs color).
 */
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            // 1. TIPOGRAFIA (Font Size)
            // O Merge precisa saber que 'display-lg' é um tamanho para substituir 'text-sm'.
            'font-size': [
                // Agrupamos por prefixo para facilitar a leitura e manutenção
                {
                    'text': [
                        // Display & Titles
                        'display-lg', 'display-md', 'display-sm',
                        'page-title', 'page-subtitle', 'section-title', 'modal-title',
                        'label',
                        // Body
                        'body-lg-medium', 'body-lg-semibold',
                        'body-md-bold', 'body-md-semibold', 'body-md-medium',
                        'body-sm-bold', 'body-sm-semibold', 'body-sm-medium',
                        'body-xs-medium', 'body-xs-semibold',
                        // Components
                        'button-md', 'button-sm',
                        'caption-md', 'caption-sm',
                    ]
                }
            ],

            // 2. SOMBRAS (Box Shadow)
            // Seus nomes são customizados, então precisamos listar.
            'shadow': [
                // Dica: Verifique se sua classe gerada é 'shadow-shadows-...' ou só 'shadow-boxshadow-...'
                // Assumindo que o sufixo da var é 'shadows-boxshadow-sm':
                'shadows-boxshadow-xs',
                'shadows-boxshadow-sm',
                'shadows-boxshadow-base',
                'shadows-boxshadow-xl',
            ],

            // 3. HEIGHTS (Alturas de Form)
            // CORREÇÃO CRÍTICA: Removemos o prefixo 'height-'. 
            // A classe é 'h-form-md', então no merge entra só 'form-md'.
            'h': [
                'form-xxs',
                'form-xs',
                'form-sm',
                'form-md',
                'form-lg',
                'form-xl',
            ],

            // 4. RING WIDTH (Espessura do Anel)
            // Essencial para diferenciar de cor.
            'ring-w': [
                // USE ESTA SINTAXE DE OBJETO.
                // Diz explicitamente: "Classe 'ring-' + 'base' = Ring Width"
                { 'ring': ['base'] }
            ],

            // 5. BORDER RADIUS (Arredondamento)
            // Opcional, mas bom para garantir que 'rounded-base' substitua 'rounded-md'
            'rounded': [
                // Sintaxe Simplificada (mas perigosa): 'sm', 'base', 'teste'

                // Sintaxe ROBUSTA (Recomendada):
                // Diz explicitamente: classes que começam com 'rounded-'
                {
                    'rounded': [
                        'sm',
                        'base',
                        'lg',
                        'xl',
                        'teste', // <--- Adicione aqui o sufixo (sem o prefixo rounded nem radius)
                        'none',
                        'full'
                    ]
                },
            ],
        },
    },
})

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}