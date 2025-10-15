# DOM Rewrite Plugin - How To Use

## Overview

The `domRewrite` plugin provides flexible DOM manipulation capabilities for CNBlog themes. It allows you to hide, remove, replace, or modify specific HTML elements on the page using CSS selectors. This is particularly useful for:

- **Ad Blocking**: Hide or remove advertisement containers
- **Content Modification**: Replace unwanted content with custom content
- **Styling Adjustments**: Add/remove CSS classes or apply custom styles
- **Dynamic Content**: Handle elements that load after page initialization

## Basic Configuration

```javascript
.use(domRewrite, {
  enable: true,
  rules: [
    // Your rules here
  ]
})
```

## Available Actions

### 1. Hide Elements
Makes elements invisible while keeping them in the DOM.

```javascript
{ selector: '#sidebar_c3', action: 'hide' }
{ selector: '.ad-banner', action: 'hide', style: { opacity: '0.5', visibility: 'hidden' } }
```

### 2. Remove Elements
Completely removes elements from the DOM.

```javascript
{ selector: '.advertisement', action: 'remove' }
{ selector: '#popup-overlay', action: 'remove' }
```

### 3. Replace Content
Replaces elements with new HTML content.

```javascript
{
  selector: '#old-content',
  action: 'replace',
  content: '<div class="new-content">Fresh content here</div>'
}
```

### 4. Modify Elements
Changes both content and styling of existing elements.

```javascript
{
  selector: '.notification',
  action: 'modify',
  content: '<span class="updated">Updated message</span>',
  style: {
    backgroundColor: '#e8f5e8',
    border: '1px solid #4caf50',
    padding: '10px'
  }
}
```

### 5. Add CSS Classes
Adds CSS classes to elements.

```javascript
{ selector: '.button', action: 'addClass', content: 'btn-primary large' }
```

### 6. Remove CSS Classes
Removes CSS classes from elements.

```javascript
{ selector: '.panel', action: 'removeClass', content: 'old-style deprecated' }
```

## Rule Structure

Each rule follows this interface:

```typescript
interface DomRewriteRule {
  selector: string                    // CSS selector (required)
  action?: 'hide' | 'remove' | 'replace' | 'modify' | 'addClass' | 'removeClass'
  content?: string                    // HTML content or CSS class names
  style?: Record<string, string>      // CSS property-value pairs
}
```

## Complete Example

```javascript
// In your theme's main.js
import { domRewrite } from '@acnb/plugins'

createTheme()
  .use(domRewrite, {
    enable: true,
    rules: [
      // Hide ad containers
      { selector: '#sidebar_c3', action: 'hide' },
      { selector: '.ad-banner', action: 'remove' },

      // Replace unwanted content
      {
        selector: '#sponsored-content',
        action: 'replace',
        content: '<div class="custom-notice">Content replaced by theme</div>'
      },

      // Style notifications
      {
        selector: '.system-notification',
        action: 'modify',
        style: {
          backgroundColor: '#f0f8ff',
          border: '1px solid #2196f3',
          borderRadius: '4px'
        }
      },

      // Add classes for styling
      { selector: 'button', action: 'addClass', content: 'custom-button' },

      // Remove unwanted classes
      { selector: '.main-content', action: 'removeClass', content: 'legacy-layout' }
    ]
  })
```

## Advanced Features

### Dynamic Content Handling
The plugin includes a `MutationObserver` that automatically re-applies rules when new content is added to the page. This ensures that:

- Ajax-loaded content is processed
- Dynamic advertisements are handled
- Single-page applications work correctly

### Custom Styling
For the `hide` action, you can provide custom styling instead of the default `display: none`:

```javascript
{
  selector: '.subtle-ad',
  action: 'hide',
  style: {
    opacity: '0.3',
    pointerEvents: 'none',
    userSelect: 'none'
  }
}
```

### Error Handling
The plugin includes built-in error handling:
- Invalid selectors are logged as warnings
- Rule application errors are caught and logged
- Failed rules don't affect other rules

## TypeScript Support

Full TypeScript definitions are included:

```typescript
import { GetDomRewriteOptions } from '@acnb/options'
import type { DomRewriteRule, DomRewriteOptions } from '@acnb/options'

const options: GetDomRewriteOptions = ({
  enable: true,
  rules: [
    { selector: '#ad-container', action: 'hide' }
  ]
})
```

## Best Practices

1. **Use Specific Selectors**: Prefer specific CSS selectors over broad ones
2. **Test Selectors**: Verify selectors work in browser console before adding
3. **Order Rules**: Place more specific rules before general ones
4. **Performance**: Avoid overly complex selectors that might impact performance
5. **Fallbacks**: Provide alternative selectors for elements with varying IDs

## Common Use Cases

### Ad Blocking
```javascript
{
  selector: '#sidebar_c3, .ad-text, .google-ads',
  action: 'hide'
}
```

### Content Cleanup
```javascript
{
  selector: '.social-share, .recommendation-box',
  action: 'remove'
}
```

### Custom Branding
```javascript
{
  selector: '.site-logo',
  action: 'replace',
  content: '<img src="/custom-logo.png" alt="Custom Logo">'
}
```

### UI Improvements
```javascript
{
  selector: '.comment-form textarea',
  action: 'addClass',
  content: 'enhanced-textarea'
}
```

## Troubleshooting

### Rules Not Applying
- Check browser console for selector errors
- Verify elements exist when rules are applied
- Ensure jQuery is loaded before the plugin runs

### Performance Issues
- Limit the number of complex selectors
- Use more efficient selectors when possible
- Consider disabling the plugin if not needed

### Dynamic Content Issues
- Rules automatically re-apply on DOM changes
- Wait a moment after page load for complex sites
- Check for timing conflicts with other scripts

## Browser Compatibility

- Requires jQuery (included in CNBlog environment)
- Uses modern JavaScript features (ES6+)
- MutationObserver support required for dynamic content
- Tested in modern browsers