import { Props } from '../../types';

const defaultProps = {
  placeholder: 'add more people...',
};

class Options {
  props: Partial<Props>;

  constructor() {
    this.props = defaultProps;
  }

  setProps(optionalProps: Partial<Props>) {
    this.props = { ...this.props, ...optionalProps };
  }

  getProps() {
    return this.props;
  }
}

export const options = new Options();
