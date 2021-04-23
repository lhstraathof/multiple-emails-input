import { options } from '../';
import { Input } from './input';

const testProps = {
  placeholder: 'test',
  theme: {
    input: 'test',
  },
};

describe('Input Component', () => {
  test('renders correctly', () => {
    options.setProps(testProps);
    const element = new Input();
    if (element.ref) {
      expect(element.ref).toBeTruthy();
      expect(element.ref.className).toBe(testProps.theme.input);
      expect(element.ref.getAttribute('placeholder')).toBe(testProps.placeholder);
    }
  });
});
