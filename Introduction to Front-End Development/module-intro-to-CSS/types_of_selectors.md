# CSS Selectors

## 1. Universal Selector
- Selects all elements.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
    ```

## 2. Type Selector

Selects all elements of a given type.
```css
Copy code
p {
  color: blue;
}
```

## 3. Class Selector

Selects elements with a specific class attribute.
```css
Copy code
.classname {
  background-color: yellow;
}
```

## 4. ID Selector

Selects an element with a specific ID.
```css
Copy code
#idname {
  font-size: 20px;
}
```

## 5. Attribute Selector
Selects elements based on an attribute or attribute value.
```css
Copy code
[type="text"] {
  border: 1px solid black;
}
```

## 6. Pseudo-class Selector
Selects elements based on their state.
```css
Copy code
a:hover {
  color: red;
}
```

## 7. Pseudo-element Selector
Selects and styles a part of an element.
```css
Copy code
p::first-line {
  font-weight: bold;
}
```

## 8. Descendant Selector
Selects elements that are descendants of another element.
```css
Copy code
div p {
  color: green;
}
```

## 9. Child Selector
Selects elements that are direct children of another element.
```css
Copy code
ul > li {
  list-style: none;
}
```

## 10. Adjacent Sibling Selector
Selects an element that is immediately preceded by another element.
```css
Copy code
h1 + p {
  margin-top: 0;
}
```

## 11. General Sibling Selector
Selects all elements that are preceded by a specified element.
```css
Copy code
h1 ~ p {
  color: orange;
}
```

## 12. Group Selector
Groups multiple selectors to apply the same style to different elements.
```css
Copy code
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

## 13. Combinator Selectors
Descendant Combinator ( )
```css
Copy code
div p {
  color: blue;
}
```

### Child Combinator (>)
```css
Copy code
div > p {
  color: red;
}
```

### Adjacent Sibling Combinator (+)
```css
Copy code
h1 + p {
  color: green;
}
```

### General Sibling Combinator (~)
```css
Copy code
h1 ~ p {
  color: yellow;
}
```

## 14. Nth-child and Nth-of-type Selectors
Selects elements based on their order.
```css
Copy code
li:nth-child(2) {
  color: blue;
}
```

