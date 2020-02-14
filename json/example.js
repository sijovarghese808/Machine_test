/* globals Tree */
'use strict';

var tree = new Tree(document.getElementById('tree'), {
  navigate: true // allow navigate with ArrowUp and ArrowDown
});

var structure = [


{
  name: '{'
}, 

{
  name: 'folder 1',
  open: false,
  type: Tree.FOLDER,
  selected: false,
  children: [{
    name: 'file 1/1'
  }, {
    name: 'file 1/2'
  }, {
    name: 'folder 1/1',
    type: Tree.FOLDER,
    children: [{
      name: 'folder 1/1/1',
      type: Tree.FOLDER,
      children: [{
        name: 'folder 1/1/1/1',
        type: Tree.FOLDER,
        children: [{
          name: 'file 1/1/1/1/1'
        }, {
          name: 'file 1/1/1/1/2'
        }]
      }]
    }]
  }]
}];
tree.json(structure);
