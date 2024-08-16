# Introduction to CSS

- HTML is the structure of a website, while CSS is the style or look and feel.
- CSS tells the web browser how to display HTML elements on the screen.
- There are five elements to understand in CSS:
  - Selector: Indicates which HTML element(s) to style.
  - Property: Defines the aspect of the element to change.
  - Value: Specifies the value for the property.
  - Declaration Block: Contains the style declarations within curly brackets.
  - Declaration: Consists of a property-value pair ending with a semicolon.

## Applying CSS to HTML

- To apply CSS to an HTML file, create a separate CSS file.
- Link the CSS file to the HTML file using the `<link>` tag in the `<head>` section.
- CSS rules are written in the CSS file using selectors and declaration blocks.
- Selectors can be HTML type selectors or ID selectors.
- HTML type selectors apply the CSS rule to all elements of a specific type.
- ID selectors apply the CSS rule to a specific element with a matching ID attribute.

## CSS Precedence and Specificity

- CSS has a set of hierarchy rules that determine which rule applies to an element.
- ID selectors have higher precedence than HTML type selectors.
- Specificity is a measure of how specific a selector is.
- The most specific selector takes precedence over less specific selectors.

## Recap

- CSS is used to style HTML elements.
- CSS rules consist of selectors, declaration blocks, and declarations.
- Selectors indicate which elements to style.
- Declaration blocks contain style declarations.
- Declarations consist of property-value pairs.
- CSS precedence and specificity determine which rule applies to an element.

General Sibling Combinator (~)
css
Copy code
h1 ~ p {
  color: yellow;
}
14. Nth-child and Nth-of-type Selectors
Selects elements based on their order.
css
Copy code
li:nth-child(2) {
  color: blue;
}

p:nth-of-type(3) {
  font-weight: bold;
}
15. Attribute Substring Selectors
[attribute^="value"]: Selects elements with an attribute value starting with a specified value.
css
Copy code
a[href^="https"] {
  color: green;
}
[attribute$="value"]: Selects elements with an attribute value ending with a specified value.
css
Copy code
a[href$=".pdf"] {
  color: red;
}
*[attribute="value"]**: Selects elements with an attribute value containing a specified value.
css
Copy code
a[href*="example"] {
  color: purple;
}
Copy code
give the above querry answer in markdown code
ChatGPT
markdown
Copy code
# CSS Selectors

## 1. Universal Selector
- Selects all elements.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
2. Type Selector
Selects all elements of a given type.
css
Copy code
p {
  color: blue;
}
3. Class Selector
Selects elements with a specific class attribute.
css
Copy code
.classname {
  background-color: yellow;
}
4. ID Selector
Selects an element with a specific ID.
css
Copy code
#idname {
  font-size: 20px;
}
5. Attribute Selector
SelectsGeneral Sibling Combinator (~)
css
Copy code
h1 ~ p {
  color: yellow;
}
14. Nth-child and Nth-of-type Selectors
Selects elements based on their order.
css
Copy code
li:nth-child(2) {
  color: blue;
}

p:nth-of-type(3) {
  font-weight: bold;
}
15. Attribute Substring Selectors
[attribute^="value"]: Selects elements with an attribute value starting with a specified value.
css
Copy code
a[href^="https"] {
  color: green;
}
[attribute$="value"]: Selects elements with an attribute value ending with a specified value.
css
Copy code
a[href$=".pdf"] {
  color: red;
}
*[attribute="value"]**: Selects elements with an attribute value containing a specified value.
css
Copy code
a[href*="example"] {
  color: purple;
}
Copy code
give the above querry answer in markdown code
ChatGPT
markdown
Copy code
# CSS Selectors

## 1. Universal Selector
- Selects all elements.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
2. Type Selector
Selects all elements of a given type.
css
Copy code
p {
  color: blue;
}
3. Class Selector
Selects elements with a specific class attribute.
css
Copy code
.classname {
  background-color: yellow;
}
4. ID Selector
Selects an element with a specific ID.
css
Copy code
#idname {
  font-size: 20px;
}
5. Attribute Selector
Selects