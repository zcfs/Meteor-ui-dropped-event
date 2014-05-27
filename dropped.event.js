  // Save super before overwriting
  var _super = UI.Component.events;

  // The noopHandler stops propagation and default
  var _noopHandler = function noopEventHandler(evt) {
    // var evt = (e.originalEvent || e);
    evt.stopPropagation();
    evt.preventDefault();
  }

  // Overwrite name it for debugging
  UI.Component.events = function uiDroppedEvents_Overwrite(dict) {
    var self = this;

    // Carry
    var resultDict = {};

    // Iterate over the event bindings
    for (var name in dict) {
      // Get f
      var f = dict[name];

      // XXX: we dont currently support 'dropped #foo, dropped #bar'
      if (/^dropped/.test(name)) {
        // Get the selector part
        var selector = name.split(' ')[1];

        if (selector) {

          // Block drag events
          resultDict['dragenter/dragexit/dragover/dragend ' + selector] = _noopHandler;

          // Rig the drop event
          resultDict['drop ' + selector] = function(evt, tmp) {
            // Stop original behaviour
            _noopHandler(evt);

            // Run user callback
            f.apply(this, [evt, tmp]);
          };
        }
      } else {
        // Pass on original
        resultDict[name] = f;
      }

    }

    // Hand over to super
    return _super.apply(self, [resultDict]);
  };
