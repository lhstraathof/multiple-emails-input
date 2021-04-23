import { InputProps, Ref } from '../../types';
export declare class Input {
    ref: Ref;
    props: InputProps;
    constructor();
    createMarkup(): HTMLInputElement;
    render(): void;
}
