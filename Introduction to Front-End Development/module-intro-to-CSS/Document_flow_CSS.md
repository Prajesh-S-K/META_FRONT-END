# Document Flow in HTML

- Document flow is the web browser's way of calculating the position of HTML elements on the screen.
- HTML elements are organized into two categories: block and inline elements.
- Block-level elements occupy the full horizontal width of their parent element and have a new line before and after.
- Inline elements only occupy the width and height of their content and do not appear on a new line.
- Examples of block-level elements include div, form, and heading tags.
- Examples of inline elements include anchor, image, input, label, bold, italics, emphasis, and span tags.

## Example:

- The example HTML file contains a div element with three sentences of Lorem Ipsum.
- Lorem Ipsum is placeholder text used since the 1500s.
- Each sentence contains a span element, which is an inline element.
- In the browser, all text is displayed in an unbroken flow of content.

## Changing Element Types:

- Elements can be changed from block-level to inline and vice versa using the CSS display property.
- To change an element to inline, add the display: inline; rule in the CSS file.
- To change an element back to block-level, remove the display property or set it to display: block;.

## Conclusion:

- It is important for developers to be comfortable working with both block and inline elements.
- Block elements begin on a new line and take up the full width of the page.
- Inline elements work within the flow of surrounding content without breaking onto their own line.
