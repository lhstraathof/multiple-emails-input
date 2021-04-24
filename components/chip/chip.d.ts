import { ChipProps, RefFunction, SingleTarget, Ref } from '../../types';
export declare class Chip {
    ref: Ref;
    props: ChipProps;
    constructor(text: string, isValidEmail: boolean, remove: RefFunction);
    createMarkup(): {
        el: HTMLDivElement;
        icon: HTMLElement;
    };
    render(): void;
    bindEvents(target: SingleTarget): void;
}
