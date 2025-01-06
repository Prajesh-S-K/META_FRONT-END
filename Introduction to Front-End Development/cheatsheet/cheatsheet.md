# HTML, CSS, and JavaScript Cheat Sheet

## HTML (HyperText Markup Language)

### Basic Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Common Tags:
- **Headings**: `<h1>` to `<h6>`
- **Paragraph**: `<p>`
- **Links**: `<a href="URL">Text</a>`
- **Images**: `<img src="URL" alt="description">`
- **Lists**:
  - Ordered: `<ol><li>Item</li></ol>`
  - Unordered: `<ul><li>Item</li></ul>`
- **Tables**:
```html
<table>
    <tr>
        <th>Header</th>
        <th>Header</th>
    </tr>
    <tr>
        <td>Data</td>
        <td>Data</td>
    </tr>
</table>
```
- **Forms**:
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>
```

---

## CSS (Cascading Style Sheets)

### Selectors:
- **Tag Selector**: `h1 { color: blue; }`
- **Class Selector**: `.class-name { margin: 10px; }`
- **ID Selector**: `#id-name { padding: 5px; }`
- **Group Selector**: `h1, h2 { font-size: 18px; }`

### Common Properties:
- **Colors**: `color: red; background-color: #f0f0f0;`
- **Font**:
  - `font-family: Arial, sans-serif;`
  - `font-size: 16px;`
  - `font-weight: bold;`
- **Box Model**:
  - `margin: 10px;`
  - `padding: 10px;`
  - `border: 1px solid black;`
- **Flexbox**:
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
- **Grid**:
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

### Media Queries:
```css
@media (max-width: 768px) {
    body {
        background-color: lightgrey;
    }
}
```

---

## JavaScript (JS)

### Basics:
- **Variables**:
```javascript
let x = 10;
const y = "Hello";
var z = true;
```
- **Functions**:
```javascript
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("World"));
```
- **Events**:
```javascript
document.querySelector("button").addEventListener("click", () => {
    alert("Button clicked!");
});
```

### DOM Manipulation:
- **Selecting Elements**:
```javascript
const element = document.querySelector("#id");
const allItems = document.querySelectorAll(".class");
```
- **Changing Content**:
```javascript
element.textContent = "New Content";
element.innerHTML = "<strong>Bold Text</strong>";
```
- **Styling**:
```javascript
element.style.color = "blue";
element.style.margin = "10px";
```

### Loops:
```javascript
const items = ["Item 1", "Item 2", "Item 3"];
items.forEach(item => {
    console.log(item);
});
```

### Fetch API:
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

---

This cheat sheet covers the fundamentals of HTML, CSS, and JavaScript. You can expand it with more advanced features as you dive deeper into web development.

