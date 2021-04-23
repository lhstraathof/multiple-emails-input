import { InputProps, Ref } from '../../types';
import { options } from '../../components';
import styles from './input.styles.css';

export class Input {
  ref: Ref;
  props: InputProps;

  constructor() {
    const optionalProps = options.getProps();
    const theme = optionalProps.theme && optionalProps.theme.input ? optionalProps.theme.input : styles.input;
    this.ref = null;
    this.props = {
      placeholder: optionalProps.placeholder,
      theme,
    };
    this.render();
  }

  createMarkup() {
    const el = document.createElement('input');
    const placeholder = this.props.placeholder || 'add more people...';
    el.classList.add(this.props.theme);
    el.setAttribute('type', 'email');
    el.setAttribute('placeholder', placeholder);
    return el;
  }

  render() {
    const markup = this.createMarkup();
    this.ref = markup;
  }
}
