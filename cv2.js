(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(function () {
          return (root.cv = factory());
      });
  } else if (typeof module === 'object' && module.exports) {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
  } else {
      // Browser globals
      root.cv = factory();
  }
}(this, ));

var gg = function(root, factory) {
  //   if (typeof define === 'function' && define.amd) {
  //       // AMD. Register as an anonymous module.
  //       define(function() {
  //           return (root.cv = factory());
  //       });
  //   } else if (typeof module === 'object' && module.exports) {
  //       // Node. Does not work with strict CommonJS, but
  //       // only CommonJS-like environments that support module.exports,
  //       // like Node.
  //       module.exports = factory();
  //   } else {
  //       // Browser globals
  //       root.cv = factory();
  //   }
      console.log(root)
      factory()
  }
  // gg(this,()=>{debugger;})
  export default gg;