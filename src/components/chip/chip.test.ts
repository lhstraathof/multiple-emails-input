import { options } from '../';
import { Chip } from './chip';

const testProps = {
  placeholder: 'test',
  theme: {
    chip: 'test',
    cross: 'test',
    chipInvalid: 'invalid',
  },
};

const testData = {
  text: 'test',
  isValidEmail: true,
  remove: jest.fn(),
};

describe('Chip Component', () => {
  test('renders correctly', () => {
    options.setProps(testProps);
    const element = new Chip(testData.text, testData.isValidEmail, testData.remove);
    if (element.ref) {
      expect(element.ref).toBeTruthy();
      expect(element.ref.className).toBe(testProps.theme.chip);
      expect(element.ref.querySelector(`.${testProps.theme.cross}`)).toBeTruthy();
      expect(element.ref.querySelector(`.${testProps.theme.chipInvalid}`)).toBeFalsy();
    }
  });
  test('renders invalid chip correctly', () => {
    options.setProps(testProps);
    const element = new Chip(testData.text, false, testData.remove);
    if (element.ref) {
      expect(element.ref).toBeTruthy();
      expect(element.ref.className).toBe(`${testProps.theme.chip} ${testProps.theme.chipInvalid}`);
    }
  });
  test('triggers function on clicking x', () => {
    options.setProps(testProps);
    const element = new Chip(testData.text, testData.isValidEmail, testData.remove);
    if (element.ref) {
      const removeButton = element.ref.querySelector(`.${testProps.theme.cross}`);
      expect(element.ref).toBeTruthy();
      expect(element.ref.className).toBe(testProps.theme.chip);
      if (removeButton instanceof HTMLElement) {
        removeButton.click();
        expect(testData.remove).toHaveBeenCalled();
      }
    }
  });
});
