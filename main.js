function preload()
{
    world_start = loadSound("world_start.wav");
    setSpirtes();
    MarioAnimation();
}

function setup()
{
    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');

    initaliazeInSetup(mario);
}

function draw()
{
    game()
}