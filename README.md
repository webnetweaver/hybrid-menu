# hybrid-menu

This script is useful for setting up a menu which exhibits appropriate click behavior for desktop and mobile websites.

For desktop, the menu will display when the mouse hovers over the menu root element and disappears when the mouse moves away.

For mobile, the menu will be displayed when a menu root element is clicked and disappears when clicking outside the menu.

This script requires jQuery.

Additionally, the menu system requires five parts:

1.  A unique root html element for each separate dropdown menu.
2.  A list of individual menu html elements within each dropdown root element.
3.  Anchor links(<a>) within each menu element.
4.  A container element containing all menu root elements.
5.  Implementation of a "hover" class for each dropdown root element consisting of styles representing the active or visible state of a menu dropdown.
  
The menu system manages detection of when to apply a "hover" class to each dropdown root element and when to remove it based on user input.

It is up to the user to implement the actual CSS styles implementing toggling of the menu.  Toggling the menu may consist of modification of a display or visibility rule for instance.
