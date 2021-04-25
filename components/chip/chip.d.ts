import { ChipProps, RefFunction, SingleTarget, Ref } from '../../types';
export declare class Chip {
    ref: Ref;
    props: ChipProps;
    constructor(text: string, isValidEmail: boolean, removeEntry: RefFunction);
    createMarkup(): {
        el: HTMLDivElement;
        icon: SVGSVGElement;
    };
    render(): void;
    bindEvents(target: SingleTarget): void;
}
