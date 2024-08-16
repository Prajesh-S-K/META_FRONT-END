Introduction to HTML Tables

- HTML tables allow you to neatly organize content in rows and columns.
- Tables are commonly used to display information such as schedules, product prices, or specifications.
- To create a table, use the `<table>` tag.
- Each row in the table is created using the `<tr>` tag.
- Inside each row, use the `<td>` tag to define the contents of table cells.
- You can add multiple rows and cells to create a table with the desired structure.
- To add headers to the columns, use the `<th>` tag within a new row at the top of the table.
- Headers provide clear labels for each column.
- To style the table, you can use CSS.
- In this video, a one-pixel border is added to the table using the `<style>` tag.

Steps to Create an HTML Table:

1. Add the `<table>` tag to create the table.
2. Use the `<tr>` tag to create rows.
3. Inside each row, use the `<td>` tag to add cells and define their contents.
4. To add headers, use the `<th>` tag within a new row at the top of the table.
5. Save the HTML file and open it in a web browser to see the table.
6. To style the table, use CSS.

Example:

```html
<table>
  <tr>
    <th>Dish</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Falafel</td>
    <td>$10</td>
  </tr>
  <tr>
    <td>Pasta Salad</td>
    <td>$12</td>
  </tr>
</table>
```