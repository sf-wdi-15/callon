var data = require('./students');
var callon = require('./callon.js');
var caller = new callon(data);

var assert = function(msg,expr) {
  console.log(msg, expr ? 'passed' : 'failed');
};

var test = function(name, fn) {
  console.log('RUNNING TEST ' + name);
  fn();
};


test('Groups', function() {
  test('\tOf 3', function() {
    var groups = caller.groupsOf(3);
    var ofSize2 = 0;
    for(var i in groups) {
      if (groups[i].length === 2) ofSize2++;
      assert('Groups are size 3: ', groups[i].length === 3 ||
                                    groups[i].length === 2);
    }
    assert('There is at most one group of size 2', ofSize2 <= 1);
  });
  test('\tOf 2', function() {
    var groups = caller.groupsOf(2);
    var ofSize1 = 0;
    for(var i in groups) {
      if (groups[i].length === 1) ofSize1++;
      assert('Groups are size 2 or 1: ', groups[i].length === 2 ||
                                    groups[i].length === 1);
    }
    assert('There is at most one group of size 1', ofSize1 <= 1);
  });
  test('\tOf 5', function() {
    var groups = caller.groupsOf(5);
    var ofSize4 = 0;
    for(var i in groups) {
      if (groups[i].length === 2) ofSize4++;
      assert('Groups are size 5 or 4: ', groups[i].length === 5 ||
                                    groups[i].length === 4);
    }
    assert('There is at most one group of size 4', ofSize4 <= 4);
  });
});
