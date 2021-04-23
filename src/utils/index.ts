import { Targets, SingleTarget } from '../types';

export function isType(value: any, type: string): boolean {
  const str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(`${type}]`) > -1;
}

export function arrayFrom(value: ArrayLike<any>): any[] {
  return [].slice.call(value);
}

export function isElement(value: unknown): value is Element | DocumentFragment {
  return ['Element', 'Fragment'].some((type) => isType(value, type));
}

export function isNodeList(value: unknown): value is NodeList {
  return isType(value, 'NodeList');
}

export function getArrayOfElements(value: Targets): Element[] {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}

export function createRef(initialValue: null | SingleTarget) {
  return {
    current: initialValue,
  };
}

export function renderSVG(xmlString: string) {
  const doc = new DOMParser().parseFromString(xmlString, 'application/xml');
  return doc.documentElement;
}

export function validateEmail(email:string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
