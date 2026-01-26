interface PropDefinition {
    prop: string;
    type: string;
    defaultValue: string;
    description: string;
}

interface StyleguidePropsTableProps {
    data: PropDefinition[];
}

export function StyleguidePropsTable({ data }: StyleguidePropsTableProps) {
    return (
        <div className="bg-bg-surface border border-border rounded-lg overflow-hidden">
            <table className="w-full">
                <thead className="bg-bg-muted">
                    <tr>
                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Prop</th>
                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Tipo</th>
                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Default</th>
                        <th className="text-left px-6 py-3 text-body-sm-semibold text-fg-strong">Descrição</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4">
                                <code className="text-fg-primary">{item.prop}</code>
                            </td>
                            <td className="px-6 py-4">
                                <code className="text-caption-md">{item.type}</code>
                            </td>
                            <td className="px-6 py-4">
                                <code>{item.defaultValue}</code>
                            </td>
                            <td className="px-6 py-4 text-body-sm-medium text-fg-muted">
                                {item.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
