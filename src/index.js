import "babel-polyfill";
import p5 from "p5";
import firebase from "firebase";
import config from "./firebaseKeys.js";

const app = p => {
  let database = null;
  let ref = null;
  let balls = [];

  const createStaggeringBall = (posX, posY) => {
    p.noFill();
    p.stroke(255);
    p.ellipse(posX, posY, 20, 20);
  }

  p.draw = _ => {
    p.background(0);
    balls.forEach(ball => {
      createStaggeringBall(ball.x, ball.y)
    })
  };

  p.setup = _ => {
    firebase.initializeApp(config);
    database = firebase.database();
    ref = database.ref("ballsCount");

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  p.mousePressed = event => {
    event.preventDefault();
    event.stopPropagation();
    if (p.mouseButton === p.LEFT) {
      balls.push({x: p.mouseX, y: p.mouseY});
    } else if (p.mouseButton === p.RIGHT) {
      balls.pop();
    }
  };

  p.windowResized = _ => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const appInstance = new p5(app);
