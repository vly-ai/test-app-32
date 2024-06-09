Alright, let's proceed with creating `_app.js` for global styles in a Next.js application. This will allow us to include global CSS which applies to all the pages in the app.

Here's the detailed documentation and code for the `_app.js` file:

```javascript
/**
 * File: _app.js
 * 
 * Purpose:
 * This file is the custom App component in a Next.js application. It overrides the default App component.
 * Using this file, we can initialize pages, maintain state during navigation, and apply global styles to the entire app.
 * 
 * Functions:
 * - MyApp({ Component, pageProps }): This custom App component renders the specific page and its props.
 * 
 * Arguments:
 * - Component: The active page. Whenever you navigate between routes, Component will change to the new page.
 * - pageProps: The initial props that were preloaded for the page. These are often fetched at build time.
 * 
 * Returns:
 * - A wrapper component that includes the global styles along with the specific page's content.
 * 
 * Description:
 * Next.js uses this custom App component to initialize pages. We can use this to apply global CSS or to persist state between navigations.
 * This file is essential to include any global CSS that will apply to the entire application. By importing CSS files here, we ensure 
 * the styles are included globally and do not interfere with CSS module scoping for individual components.
 */

import '../styles/globals.css'; // Importing the global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

In this example:

1. We import a global CSS file (`globals.css`) from the `styles` directory. Create this CSS file to include the actual global styles. The path can be adjusted based on where your styles are actually located.
2. The `MyApp` function component receives the `Component` and `pageProps` and renders them. This is standard for a Next.js custom App component.
3. Finally, we export the `MyApp` function as the default export.

This document provides a clear, comprehensive understanding of what `_app.js` does and how it contributes to applying global styles across your Next.js application.