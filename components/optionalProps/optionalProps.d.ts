import { Props } from '../../types';
declare class Options {
    props: Partial<Props>;
    constructor();
    setProps(optionalProps: Partial<Props>): void;
    getProps(): Partial<Props>;
}
export declare const options: Options;
export {};
