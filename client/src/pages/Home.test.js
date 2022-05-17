import { render } from '@testing-library/react';
import URLshortener from './Home';

describe('Home page component', () => {
  test('Rendered Input', () => {
    const { getByTestId } = render(<URLshortener />);
    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });

  test('Rendered Button', () => {
    const { getByTestId } = render(<URLshortener />);
    const button = getByTestId('narrow');

    expect(button).toBeTruthy();
  });
});
