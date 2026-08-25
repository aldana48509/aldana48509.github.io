$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(212, 27, 27)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 700, 200, 100);
    createPlatform(350, 600, 200, 25);
    createPlatform(750, 500, 50, 100);
    createPlatform(1000,500, 50, 100);
    createPlatform(0, 298, 1100, 10);
    createPlatform(1200, 298, 300, 100);
    createPlatform(1100, 398, 300, 10);
    createPlatform(1200, 298, 10, 100);
    createPlatform(400, 198, 200, 100);
    createPlatform(1080, 180, 20, 120);
    createPlatform(1100, 180, 100, 20);


    // TODO 3 - Create Collectables
    createCollectable("diamond", 100, 600, 0.5, 0.7);
    createCollectable("diamond", 900, 200, 0.5, 0.7);
    createCollectable("diamond", 400, 500, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 800);
    createCannon("right", 800, 5,);
    createCannon("right", 125, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
