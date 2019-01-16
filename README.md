# hybrid-menu

This script is useful for setting up a menu which exhibits appropriate click behavior for desktop and mobile websites.

For desktop, the menu will display when the mouse hovers over the menu root element and disappears when the mouse move outside of the dropdown menu entirely.

For mobile, the menu will be displayed when a menu root element is clicked and disappears when clicking outside the dropdown menu.

This script requires the jQuery library.

Additionally, the menu system requires five parts:

1.  A unique root html element for each separate dropdown menu.  Usually styled <ul> element.
2.  A list of individual menu html elements within each dropdown root element.  Usually a styled <li> element.
3.  Anchor links(<a>) within each menu element.
4.  A container element containing all menu root elements. Usually a styled <div> element.
5.  Implementation of a "hover" class for each dropdown root element consisting of styles implementing the active or visible state of a menu dropdown.
  
The menu system applies and removes the "hover" class to each dropdown root element based on user input.

It is up to the user to implement the CSS styles implementing toggling of each dropdown menu.  The implementation of the "hover" class for the menu may consist of modification of a display or visibility rule for instance.

Call the function as follows:

initNav(containerId, element, menucontainer)

Where:

- containerId is the Id of a dropdown root element.
- element is a class or selector for each menu html element.
- menucontainer is the Id of the container containing all menu root elements.

Call this function once for each individual dropdown containerId.
