;Quintus.BreakoutLevels = function(Q) {

    // and the number means the HP of blocks
	var b = 1; // red
	var r = 3; // blue
	var o = 2; // orange
	var g = 4; // green
	var X = 0; // null
    var z = 5; // unbreakable

  Q.assets['level1'] = [
    [r,r,r,X,o,X,o],
    [r,X,X,X,o,o,X],
    [X,r,r,X,o,X,X],
    [X,X,r,X,o,o,X],
    [r,r,r,X,o,X,o],
    [z,z,z,z,z,z,z]
  ];

  Q.assets['level2'] = [
    [X,g,o,g,o,g,X],
    [X,b,b,b,b,b,X],
    [g,b,r,b,r,b,g],
    [g,b,b,b,b,b,g],
    [g,b,X,X,X,b,g],
    [X,b,b,b,b,b,X]
  ];

  Q.assets['level3'] = [
    [X,b,X,g,X,b,X],
    [b,X,b,o,b,X,b],
    [b,g,b,o,b,g,b],
    [b,X,b,o,b,X,b],
    [X,b,X,X,X,b,X],
    [r,X,r,X,r,X,r],
    [r,X,r,X,r,X,r],
    [r,X,r,X,r,X,r],
    [r,X,r,X,r,X,r]
  ];

  Q.assets['level4'] = [
    [r,g,o,b,r,g,o],
    [b,X,X,X,X,X,X],
    [o,X,o,b,r,g,o],
    [g,X,g,X,X,X,b],
    [r,X,r,X,r,X,r],
    [b,X,b,o,g,X,g],
    [o,X,X,X,X,X,o],
    [g,r,b,o,g,r,b],
    [g,r,b,o,g,r,b],
    [g,r,b,o,g,r,b],
    [X,r,b,o,g,r,b],
    [X,r,b,o,g,r,b],
    [X,r,b,o,g,r,b],
    [X,X,b,o,g,r,b]
  ];

};
