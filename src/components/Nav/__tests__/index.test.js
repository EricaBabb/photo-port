// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
  
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
  const { getByLabelText } = render(<Nav />);
//We can also test the emoji's accessibility features by querying the element by its aria-label
  expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})  



//Similar to an id attribute, we will add a data-testid to the <a> element. Also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element.
describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });

})