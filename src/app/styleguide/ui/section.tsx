interface StyleguideSectionProps {
    title: string;
    children: React.ReactNode;
}

export function StyleguideSection({ title, children }: StyleguideSectionProps) {
    return (
        <section>
            <h2 className="text-section-title text-fg-strong mb-6">{title}</h2>
            {children}
        </section>
    );
}
