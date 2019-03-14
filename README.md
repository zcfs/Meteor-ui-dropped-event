
~~Looking for maintainers - please reach out!~~
This package is to be archived due to inability to find contributors, thanks to everyone who helped make it possible.

**If you're looking for an alternative, we highly recommend [Meteor-Files](https://github.com/VeliovGroup/Meteor-Files) by [VeliovGroup](https://github.com/VeliovGroup)**

---

Installation
================

```
$ cd <app dir>
$ meteor add raix:ui-dropped-event
```


ui-dropped-event
================

Adds the `dropped` event.

```js
  Template.foo.events({
    'dropped #bar': function(e, t) {
    }
  });
```

####Short example:

Template
```html
  <div id="dropzone" class="dropzone">
    <div style="text-align: center; color: gray;">Drop file to upload</div>
  </div>
```

Javascript
```js
  Template.hello.events({
    // Catch the dropped event
    'dropped #dropzone': function(event, temp) {
      console.log('files droped');

      // If using the cfs api
      FS.Utility.eachFile(event, function(file) {
        var id = images.insert(file);
        console.log('Inserted file ');
        console.log(id);
      });
    }
  });
```
