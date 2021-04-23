import { ChipProps, RefFunction, SingleTarget, Ref } from '../../types';
import { options } from '../../components';
import { renderSVG } from '../../utils';
import styles from './chip.styles.css';
import CrossIcon from './cross.svg';

export class Chip {
  ref: Ref;
  props: ChipProps;

  constructor(text: string, isValidEmail: boolean, remove: RefFunction) {
    const optionalProps = options.getProps();
    const themeChip = [optionalProps.theme && optionalProps.theme.chip ? optionalProps.theme.chip : styles.chip];
    const themeCross = optionalProps.theme && optionalProps.theme.cross ? optionalProps.theme.cross : styles.cross;
    if (!isValidEmail) {
      themeChip.push(
        optionalProps.theme && optionalProps.theme.chipInvalid ? optionalProps.theme.chipInvalid : styles.chipInvalid,
      );
    }
    this.ref = null;
    this.props = {
      text,
      remove,
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
    const icon = renderSVG(CrossIcon);
    el.classList.add(...themeChip);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '-1');
    el.append(content);
    icon.classList.add(themeCross);
    el.append(icon);    
    return {el, icon};
  }

  render() {
    const markup = this.createMarkup();
    this.ref = markup.el;
    this.bindEvents(markup.icon);
  }

  bindEvents(target: SingleTarget) {
    const { props } = this;
    const { remove } = props;
    if (this.ref && remove) {
      target.addEventListener('click', () => remove(this.ref));
    }
  }
}
