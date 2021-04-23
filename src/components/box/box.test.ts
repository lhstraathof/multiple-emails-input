import { options } from '../';
import { Box } from './box';

const testProps = {
  theme: {
    box: 'test',
  },
};

describe('Box Component', () => {
  test('renders correctly', () => {
    options.setProps(testProps);
    const element = new Box();
    if (element.ref) {
      expect(element.ref).toBeTruthy();
      expect(element.ref.className).toBe(testProps.theme.box);
    }
  });

});
