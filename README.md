# tmpclone.js
Add `querySelector()` and `querySelectorAll()` to a cloned node from `<template>` element.

Available on jsDelivr :
```html
<script src="https://cdn.jsdelivr.net/gh/tmpmachine/template-clone@main/tmpclone.js"></script>

<!-- Or use minified version -->
<script src="https://cdn.jsdelivr.net/gh/tmpmachine/template-clone@main/tmpclone.min.js"></script>
```

# Usage Example
```html
<template id="tmp-start">
  <span class="title"> Default text </span>
</template>

<script>
  
  let node = template.clone('#tmp-start');
  
  // use querySelectorAll
  let titleNodes = node.selectAll('.title');
  
  // use querySelector
  let titleNode = node.select('.title');
  
</script>
```
