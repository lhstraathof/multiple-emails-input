import { Props, Targets, SingleTarget } from './types';
import { options, CreateMeiMei } from './components';
import { getArrayOfElements } from './utils';

declare global {
  interface Window {
    MeiMei: (targets: Targets, optionalProps: Partial<Props>) => object[];
  }
}

function MeiMei(targets: Targets, optionalProps: Partial<Props>) {
  const elements = getArrayOfElements(targets);
  options.setProps(optionalProps);
  const instances =
    elements &&
    elements.reduce((acc: object[], element: SingleTarget) => {
      const instance = element && new CreateMeiMei(element);

      if (instance) {
        acc.push(instance);
      }

      return acc;
    }, []);

  return instances;
}

window.MeiMei = MeiMei;
