import { EntryList, Props, SingleTarget, Ref, RefFunction, StringFunction } from '../../types';
declare global {
    interface Window {
        clipboardData: DataTransfer;
    }
}
export declare class CreateMeiMei {
    ref: Ref;
    inputFieldRef: Ref;
    optionalProps: Partial<Props>;
    entryList: EntryList[];
    remove: RefFunction;
    add: StringFunction;
    constructor(target: SingleTarget);
    render(target: SingleTarget): void;
    addEntry(value: string): void;
    removeEntry(target: Ref): void;
    bindEvents(): void;
    handleClick(e: Event): void;
    handleKeyPress(e: KeyboardEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    handleFocusOut(e: Event): void;
    handlePaste(e: ClipboardEvent): void;
}
