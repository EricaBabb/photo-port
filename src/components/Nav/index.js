import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";





function Nav() {
//Instead of naming each one when we needed it, it is more DRY to define the categories and use .map() function inside the JSX expression
const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

   //Now that we've provided a function name ("categorySelected") to onClick(), we need to define it somewhere above the return statement. 
function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
  <li
  //Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique.
  //This helps React keep track of items in the virtual DOM.
  // we used category.name because we don't expect any categories to share the same name. Often the key will be an id.
    className="mx-1"
    //built-in onClick() method below
    key={category.name}
  >    
    <span onClick={() => categorySelected(category.name)} >
      {category.name}
    </span>
  </li>
))}
    </ul>
  </nav>
</header>
  );
}
//We want onClick to console.log() the category name. In this case, we wrap the categorySelected reference in an anonymous arrow function. 
//The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well.

export default Nav;