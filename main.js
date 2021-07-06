canvas = document.getElementById("myCanvas");
var CTX = canvas.getContext("2d");

var mars_img= ["mars_1.jpg", "mars_2.jpg", "mars_3.jpg", "mars_4.jpg", "mars.jpg"];
var random_number= Math.floor(Math.random()*5);

var background_image = mars_img[random_number];
var rover_image = "rover.png";

var rover_width = "100";
var rover_height = "100";

var rover_x = 200;
var rover_y = 200;

function add() {
    background_img = new Image();
    background_img.onload = upload_background;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src = rover_image;

}

function upload_rover() {
    CTX.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

function upload_background() {
    CTX.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    if (key_pressed == '38') {
        up();
        console.log("Up key is pressed.");
    }

    if (key_pressed == '40') {
        down();
        console.log("Down key is pressed.");
    }

    if (key_pressed == '37') {
        left();
        console.log("Left key is pressed.");
    }

    if (key_pressed == '39') {
        right();
        console.log("Right key is pressed.");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function down() {
    if (rover_y <= 440) {
        rover_y = rover_y+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 650) {
        rover_x = rover_x+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
