import { Targets, SingleTarget } from '../types';
export declare function isType(value: any, type: string): boolean;
export declare function arrayFrom(value: ArrayLike<any>): any[];
export declare function isElement(value: unknown): value is Element | DocumentFragment;
export declare function isNodeList(value: unknown): value is NodeList;
export declare function getArrayOfElements(value: Targets): Element[];
export declare function createRef(initialValue: null | SingleTarget): {
    current: Element | null;
};
export declare function validateEmail(email: string): boolean;
