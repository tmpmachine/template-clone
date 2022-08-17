(function() {
  
  if ('template' in window) {
    console.error('tmpclone:', 'template already defined');
    return;
  }
  
  window.template = (function() {
 
    function select(selector) {
      return this.querySelector(selector);
    }
 
    function selectAll(selector) {
      return this.querySelectorAll(selector);
    }

    function clone(selector) {
      let node = document.querySelectorAll(selector)[0].content.cloneNode(true);
      node.select = select;    
      node.selectAll = selectAll;    
      return node;
    }

    return {
      clone,
    };

  })();
  
})();
