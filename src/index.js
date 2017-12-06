import "babel-polyfill";
import p5 from "p5";

const app = p => {
  p.draw = _ => {};

  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };
};

const appInstance = new p5(app);