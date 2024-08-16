# Introduction to Including CSS and JavaScript Libraries

- As a developer, you can build your website from scratch or use code created by other developers.
- Including CSS and JavaScript libraries in your HTML file is essential for your application to interact with APIs provided by libraries and frameworks.
- Libraries and frameworks are often referred to as dependencies because your application depends on them.

## Including CSS Libraries

- One popular library for developing user interfaces is Bootstrap.
- To include the Bootstrap CSS library in your webpage:
  - Open your HTML file.
  - Add the CSS library for Bootstrap in the `<head>` element using a `<link>` tag.
  - Use the `href` attribute to link the CSS library.
  - Include the `rel` attribute with the value "stylesheet" to specify that the link is for a style sheet.

## Including JavaScript Libraries

- Bootstrap also provides a JavaScript library for enhanced functionality.
- To include the Bootstrap JavaScript library in your webpage:
  - Open your HTML file that already has the Bootstrap CSS.
  - Add the JavaScript library for Bootstrap in the `<body>` element using a `<script>` element.
  - Use the `src` attribute to specify the link to the library.

## Adding Bootstrap Button

- To demonstrate how easy it is to add a Bootstrap button to the page:
  - In the `<body>`, add a `<button>` element.
  - Use the `type` attribute and the CSS class `btn` to style the button.
  - Add the `btn-primary` modifier for the primary color.
  - Add a description for the button.

## Understanding Dependency Tree and Package Managers

- In complex projects, dependencies can have their own dependencies, forming a dependency tree.
- Managing dependencies manually can be time-consuming and prone to issues.
- Package managers are tools that automatically download and install dependencies.
- The most common package manager for front-end development is npm (Node Package Manager).
- Package managers allow you to specify the version of each dependency and handle the dependency tree for you.

## Bundling Dependencies

- Including all dependencies in an HTML file would be inefficient.
- Bundling tools automatically combine dependencies into a single file.
- If the bundle is large, it can be split into multiple bundles.
- Popular bundling tools include Gulp and Webpack.
