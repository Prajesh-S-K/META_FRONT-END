# Alignment

## Text Alignment

Aligning text within an HTML element is done using the text-align CSS property. Here are the different options for text alignment:

- Left alignment: text-align: left;
- Right alignment: text-align: right;
- Center alignment: text-align: center;
- Justify alignment: text-align: justify;

For example, to center align all paragraph elements, you can use the following CSS rule:

```css
p {
  text-align: center;
}
```

## HTML Element Alignment

- Aligning HTML elements requires considering the box model and document flow. Here's how you can align elements:

### Center Alignment

To center align an element, you need to set its width and use margins. Here's an example HTML structure:

```html
<div class="parent">
  <div class="child"></div>
</div>
```

In your CSS, you can set the parent element to have a red border to visualize its space:

```css
.parent {
  border: 4px solid red;
}
```

The child element will have a width equal to 50% of the parent element and a padding of 20 pixels. To visualize its space, set the border to green:

```css
.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green;
}
```
To align the child element to the center, set its margin property to auto:

```css
.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green;
  margin: auto;
}
```
The result is that the child element will be centered within the parent element.

### Left / Right Alignment

To align elements to the left or right, you can use the float property. Here's an example HTML structure:

```html
<div class="parent">
  <img src="photo.png" class="child">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
```
In your CSS, you can align the image to the right by using the float property:

```css
.child {
  float: right;
}
```
The text content will wrap around the image, aligning it to the right.

