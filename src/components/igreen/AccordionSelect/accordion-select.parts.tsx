import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/igreen/Icon";
import { accordionSelectStyles } from "./accordion-select.styles";
import { AccordionSelectOption } from "./accordion-select.types";

interface AccordionSelectListProps {
    options: AccordionSelectOption[];
    onSelect: (value: string) => void;
}

export function AccordionSelectList({ options, onSelect }: AccordionSelectListProps) {
    return (
        <div className={accordionSelectStyles.animation.inner}>
            <div
                className={accordionSelectStyles.animation.list}
                role="listbox"
                aria-label="Options list"
            >
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={accordionSelectStyles.item.base}
                        onClick={() => onSelect(option.id)}
                        role="option"
                        aria-selected={false}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onSelect(option.id);
                            }
                        }}
                    >
                        <div className={accordionSelectStyles.content.wrapper}>
                            <div className={accordionSelectStyles.iconWrapper.base}>
                                {option.icon}
                            </div>
                            <div className={accordionSelectStyles.text.wrapper}>
                                <span className={accordionSelectStyles.text.title}>{option.title}</span>
                                <span className={accordionSelectStyles.text.description}>{option.description}</span>
                            </div>
                        </div>
                        <div className={accordionSelectStyles.action.wrapper}>
                            <Icon name="line-arrow-down" className={cn(accordionSelectStyles.action.icon, "-rotate-90")} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface AccordionSelectedItemProps {
    option: AccordionSelectOption;
    onClear: () => void;
}

export function AccordionSelectedItem({ option, onClear }: AccordionSelectedItemProps) {
    return (
        <div className={accordionSelectStyles.animation.inner}>
            <div
                className={cn(accordionSelectStyles.item.base, accordionSelectStyles.item.selectedView)}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={false}
            >
                <div className={accordionSelectStyles.content.wrapper}>
                    <div className={accordionSelectStyles.iconWrapper.base}>
                        {option.icon}
                    </div>
                    <div className={accordionSelectStyles.text.wrapper}>
                        <span className={accordionSelectStyles.text.title}>{option.title}</span>
                        <span className={accordionSelectStyles.text.description}>{option.description}</span>
                    </div>
                </div>
                <div
                    className={accordionSelectStyles.action.editWrapper}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClear();
                    }}
                    role="button"
                    aria-label="Edit selection"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onClear();
                        }
                    }}
                >
                    <Icon name="line-edit" className={accordionSelectStyles.action.icon} />
                </div>
            </div>
        </div>
    );
}
