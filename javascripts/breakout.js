window.addEventListener('load',function() {

  var Q = Quintus().include("Sprites, Scenes, Input, Anim, 2D, Touch, UI")
                   .include("BreakoutLevels, BreakoutUI, BreakoutSprites, BreakoutScenes")
                   //.include("Audio").enableSound()
                   .setup({ width: 320, height: 416,
                    //downsampleWidth: 640, downsampleHeight: 832
                    scaleToFit:true // Scale the game to fit the screen of device
                  }).touch();

  Q.input.mouseControls();
  Q.input.keyboardControls();

  //prevent for clearing all canvas
  //canvas profiling으로 보니 이 게임에서는 의미없는 clearRect가 불려서 제거함.
  //그러나 g3에서 그리 성능 차이 없음.
  Q.clear = function() {};

  Q.load([
     // Images
     "bg.png","tiles.png","logo.png","coin.png",
      // Data
      "sprites.json"
    ],function() {
      // Set up all the sprite sheets
      Q.compileSheets("tiles.png","sprites.json");

      // Now add in the animations for the various sprites
      //Q.animations("ball", { default: { frames: [0,1,2,3,4], rate: 1/4 } });
      // for performance, ball is consist of 1 image
      Q.animations("ball", { default: { frames: [0] } });

      Q.animations("countdown", {
        countdown: { frames: [ 0,1,2 ], rate: 1.5, trigger: "start", loop: false }
      });

      Q.animations("block", {
        appear: { frames: [0], rate: 1/3, loop: false },
        killed: { frames: [3], rate: 1/16, loop: false, trigger: "destroy" }
      });

      // Go Start !
      Q.stageScene("title");
  });

  window.Q = Q;

},true);
