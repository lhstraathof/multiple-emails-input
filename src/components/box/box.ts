import { Ref } from '../../types';
import { options } from '../../components';
import styles from './box.styles.css';

export class Box {
  ref: Ref;

  constructor() {
    const optionalProps = options.getProps();
    const theme = optionalProps.theme && optionalProps.theme.box ? optionalProps.theme.box : styles.box;
    this.ref = null;
    this.render(theme);
  }

  static createMarkup(theme: string) {
    const el = document.createElement('div');
    el.classList.add(theme);
    return el;
  }

  render(theme: string) {
    const markup = Box.createMarkup(theme);
    this.ref = markup;
    return markup;
  }
}
