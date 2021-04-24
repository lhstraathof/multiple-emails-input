import { Ref } from '../../types';
export declare class Box {
    ref: Ref;
    constructor();
    static createMarkup(theme: string): HTMLDivElement;
    render(theme: string): HTMLDivElement;
}
