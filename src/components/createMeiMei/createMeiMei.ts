import { EntryList, Props, SingleTarget, Ref, RefFunction, StringFunction } from '../../types';
import { options, Box, Chip, Input } from '../../components';
import { validateEmail } from '../../utils';

const backspaceKeyCode = 8;
const enterKeyCode = 13;
const commaKeyCode =  44;

declare global {
  interface Window {
    clipboardData: DataTransfer;
  }
}

export class CreateMeiMei {
  ref: Ref;
  inputFieldRef: Ref;
  optionalProps: Partial<Props>;
  entryList: EntryList[];
  removeEntry: RefFunction;
  addEntry: StringFunction;

  constructor(target: SingleTarget) {
    this.ref = null;
    this.inputFieldRef = null;
    this.optionalProps = options.getProps();
    this.entryList = [];
    this.removeEntry = this.removeOneEntry.bind(this);
    this.addEntry = this.addOneEntry.bind(this);
    this.render(target);
  }

  render(target: SingleTarget) {
    const box = new Box();
    const inputField = new Input();

    if (box.ref && inputField.ref) {
      target.appendChild(box.ref);
      box.ref.appendChild(inputField.ref);

      this.ref = box.ref;
      this.inputFieldRef = inputField.ref;

      this.bindEvents();
    }
  }

  addOneEntry(value: string) {
    if (!value) return;
    const isValidEmail = validateEmail(value);
    const emailChip = new Chip(value, isValidEmail, this.removeEntry);
    if (emailChip.ref && this.ref && this.inputFieldRef) {
      // add new entry before input field
      this.ref.insertBefore(emailChip.ref, this.inputFieldRef);

      // add new entry to entryList
      this.entryList.push({ entry: emailChip.ref, isValidEmail, text: value });

      // Scroll wrapping box to bottom when max-height is reached
      this.ref.scrollTop = this.ref.scrollHeight;

      // clear input field after adding entries
      (this.inputFieldRef as HTMLInputElement).value = '';

      // run optional function
      return this.optionalProps && this.optionalProps.onAddEntry && this.optionalProps.onAddEntry();
    }
  }

  removeOneEntry(target: Ref) {
    if (this.ref && target) {
      // remove entry from EntryList
      const newEntryList = this.entryList.filter((entry) => entry.entry !== target);
      this.entryList = newEntryList;

      // remove target from box
      this.ref.removeChild(target);

      // run optional function
      return this.optionalProps && this.optionalProps.onRemoveEntry && this.optionalProps.onRemoveEntry();
    }
  }

  bindEvents() {
    const { ref, inputFieldRef } = this;
    if (ref) {
      ref.addEventListener('click', (e) => this.handleClick(e));
    }

    if (inputFieldRef) {
      inputFieldRef.addEventListener('keypress', (e) => this.handleKeyPress(e as KeyboardEvent));
      inputFieldRef.addEventListener('keydown', (e) => this.handleKeyDown(e as KeyboardEvent));
      inputFieldRef.addEventListener('focusout', (e) => this.handleFocusOut(e));
      inputFieldRef.addEventListener('paste', (e) => this.handlePaste(e as ClipboardEvent));
    }
  }

  handleClick(e: Event) {
    e.preventDefault();
    if (e.target === this.ref && this.inputFieldRef) {
      this.inputFieldRef.focus();
    }
  }

  handleKeyPress(e: KeyboardEvent) {
    if (e.keyCode === enterKeyCode || e.keyCode === commaKeyCode) {
      e.preventDefault();
      this.addEntry((e.target as HTMLInputElement).value);
    }
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.keyCode === backspaceKeyCode && (e.target as HTMLInputElement).value === '' && this.entryList.length > 0) {
      e.preventDefault();
      const lastEntry = this.entryList[this.entryList.length - 1].entry;
      this.removeEntry(lastEntry);
    }
  }

  handleFocusOut(e: Event) {
    e.preventDefault();
    this.addEntry((e.target as HTMLInputElement).value);
  }

  handlePaste(e: ClipboardEvent) {
    // Stop data actually being pasted into input
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    const clipboardData: DataTransfer = e.clipboardData || window.clipboardData;
    const pastedData: string = clipboardData.getData('Text');

    // Split pasted data in chunks on comma and space
    const chunks = pastedData.split(/[ ,]+/).filter((item) => item);

    // Add new entries
    if (chunks && chunks.length > 0) {
      chunks.forEach((chunk) => this.addEntry(chunk));
    }
  }
}
