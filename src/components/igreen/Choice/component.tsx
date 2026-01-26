import React from "react";
import { ChoiceGroupProps, ChoiceItemProps } from "./component.types";
import { choiceStyles } from "./component.styles";
import { cn } from "@/lib/utils";

export const ChoiceGroup: React.FC<ChoiceGroupProps> = ({ children, className }) => {
    return (
        <div className={cn(choiceStyles.group.container, className)}>
            {children}
        </div>
    );
};

export const ChoiceItem: React.FC<ChoiceItemProps> = ({
    title,
    description,
    icon,
    active = false,
    onClick,
    className
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                choiceStyles.item.base,
                active ? choiceStyles.item.variants.active : choiceStyles.item.variants.inactive,
                className
            )}
        >
            {/* Icon Wrapper */}
            <div className={cn(
                choiceStyles.item.iconWrapper.base,
                active ? choiceStyles.item.iconWrapper.active : choiceStyles.item.iconWrapper.inactive
            )}>
                {/* Ensure icon sizing controls if passed node is large, but usually icon node should be sized or simple svg */}
                {/* Figma extract shows 24px icon inside 42px wrapper. We can force a size wrapper if needed, but let's trust child first. */}
                {/* Actually, let's wrap it to ensure semantic sizing if it's an SVG */}
                <div className={choiceStyles.item.iconWrapper.inner}>
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className={choiceStyles.item.content.container}>
                <span className={choiceStyles.item.content.title}>
                    {title}
                </span>
                <span className={choiceStyles.item.content.description}>
                    {description}
                </span>
            </div>

            {/* Selected Indicator (Check Component) */}
            {/* Selection Indicator */}
            <div className={cn(
                choiceStyles.item.selectionIndicator.base,
                active ? choiceStyles.item.selectionIndicator.active : choiceStyles.item.selectionIndicator.inactive
            )}>
                {active ? (
                    <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                ) : (
                    <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                )}
            </div>
        </button>
    );
};
