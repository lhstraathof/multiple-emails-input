import { Props, Targets } from './types';
declare global {
    interface Window {
        MeiMei: (targets: Targets, optionalProps: Partial<Props>) => object[];
    }
}
