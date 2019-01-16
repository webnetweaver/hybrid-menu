# hybrid-menu

This script is useful for setting up a menu which exhibits appropriate click behavior for desktop and mobile websites.

For desktop, the menu will display when the mouse hovers over the menu root element and disappears when the mouse moves away.

For mobile, the menu will be displayed when the menu root element is clicked and disappears when the menu root is clicked again.

The menu requires four parts:

1.  A unique root element for each dropdown menu.
2.  A list of individual menu elements within each root element.
3.  Anchor links(<a>) within each menu element.
4.  A container element containing all menu root elements.
