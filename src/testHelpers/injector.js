// var hook = {
//       inject: (renderer) => {
//       },
//       emit: (eventName, value) => {
//           console.log(eventName, value);
//       }
//   };
//   window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook;  


(function () {

  /**
   * Attempts to retrieve React's internals via __REACT_DEVTOOLS_GLOBAL_HOOK__ 
   * so `ReactMount` can be used to hot reload every `ReactClass`.
   *
   * @window
   */
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    console.log('injecting...1')
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { inject: makeAllHot };
  } else if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject) {
    console.log('injecting...2')    
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = makeAllHot;
  } else if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__._reactRuntime) {
    console.log('injecting...3')    
    makeAllHot(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._reactRuntime);
  } else {
    console.log('injecting...4')    
    var inject = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject;
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {
      makeAllHot.apply(this, arguments);
      inject.apply(this, arguments);
    };
  }

  /**
   * Monkey-patches `React.createClass` to make every `ReactClass` hot reload.
   *
   * @param {Object} ReactInternals
   * @api private
   */
  function makeAllHot(ReactInternals) {
    Promise
    .all([
      System.import('react'),
    ])
    .then(function (modules) {
      var React = modules[0];
      // var render = React.render
      var createClass = React.createClass;
      console.log(createClass)
      var getInstances = function () {
        return ReactInternals.Mount._instancesByReactRootID;
      };
      function emit(eventName, value) {
        console.log('hello');
  //         console.log(eventName, value);
      }
      // React.createClass = function () {
      //   return ReactHotAPI(getInstances)(createClass.apply(this, arguments));
      // };
    });
  }

})();
