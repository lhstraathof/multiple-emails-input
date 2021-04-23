export type SingleTarget = Element;

export type MultipleTargets = string | Element[] | NodeList;

export type Targets = SingleTarget | MultipleTargets;

export type RefFunction = (target: Ref) => void | null;

export type StringFunction = (value: string) => void | null;

export interface Theme {
  box: string;
  input: string;
  chip: string;
  chipInvalid: string;
  cross: string;
}

export interface Props {
  placeholder: string;
  theme: Partial<Theme>;
  onAddEntry: () => void;
  onRemoveEntry: () => void;
}

export interface ChipProps {
  text: string;
  remove: (target: Ref) => void;
  themeChip: string[];
  themeCross: string;
}

export interface InputProps {
  placeholder: string | undefined;
  theme: string;
}

export type Ref = null | HTMLElement | HTMLInputElement;

export type EntryList = {
  entry: Ref;
  isValidEmail: boolean;
  text: string;
};
