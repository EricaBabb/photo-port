import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

//Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique.
  //This helps React keep track of items in the virtual DOM.
  // we used category.name because we don't expect any categories to share the same name. Often the key will be an id.


//We want onClick to console.log() the category name. In this case, we wrap the categorySelected reference in an anonymous arrow function. 
//The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well.
