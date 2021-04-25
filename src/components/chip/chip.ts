import { ChipProps, RefFunction, SingleTarget, Ref } from '../../types';
import { options } from '../../components';
import styles from './chip.styles.css';
import { CrossIcon } from './crossIcon';

export class Chip {
  ref: Ref;
  props: ChipProps;

  constructor(text: string, isValidEmail: boolean, removeEntry: RefFunction) {
    const optionalProps = options.getProps();
    let themeChip = optionalProps.theme && optionalProps.theme.chip ? optionalProps.theme.chip : styles.chip;
    const themeCross = optionalProps.theme && optionalProps.theme.cross ? optionalProps.theme.cross : styles.cross;
    if (!isValidEmail) {
      const validTheme = optionalProps.theme && optionalProps.theme.chipInvalid ? optionalProps.theme.chipInvalid : styles.chipInvalid;
      themeChip = `${themeChip} ${validTheme}`;
      ;
    }
    this.ref = null;
    this.props = {
      text,
      removeEntry,
      themeChip,
      themeCross,
    };
    this.render();
  }

  createMarkup() {
    const { props } = this;
    const { themeChip, themeCross, text } = props;
    const el = document.createElement('div');
    const content = document.createTextNode(text);
    const icon = CrossIcon();
    el.setAttribute('class', themeChip);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '-1');
    el.appendChild(content);
    // ie11 classList does not work on svg
    icon.setAttribute('class', themeCross);
    el.appendChild(icon);
    return { el, icon };
  }

  render() {
    const markup = this.createMarkup();
    this.ref = markup.el;
    this.bindEvents(markup.icon);
  }

  bindEvents(target: SingleTarget) {
    const { props } = this;
    const { removeEntry } = props;
    if (this.ref && removeEntry) {
      target.addEventListener('click', () => removeEntry(this.ref));
    }
  }
}
