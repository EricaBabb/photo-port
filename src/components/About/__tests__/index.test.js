// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
//"render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.

import '@testing-library/jest-dom/extend-expect';
//jest-dom offers access to custom matchers that are used to test DOM elements.

import About from '..';
//What we will be testing^

afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.

//use the describe function to declare the component we're testing
describe('About component', () => {
    //baseline test to verify that the component is rendering
    //test can also be used interchangeably with it to create a test
  it('renders', () => {
    render(<About />);
  });
  //in the 1st argument a string declares what is being tested. In the 2nd argument, a callback function runs the test.
  //use the render function to render the About component using JSX
  

  //compare snapshot versions of the DOM node structure. 
  //A snapshot is a serialized version of the DOM node structure, enabled by Jest.
  it('matches snapshot DOM node structure', () => {
      //the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    
    //test and compare whether the expected and actual outcomes match
    // Use the expect function with a matcher to assert something about a value
    //Use toMatchSnapshot as the matcher
    expect(asFragment()).toMatchSnapshot();
  });
})

//npm run test