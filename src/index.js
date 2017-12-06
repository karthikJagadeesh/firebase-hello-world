import "babel-polyfill";
import p5 from "p5";

const app = p => {
  p.draw = _ => {};

  p.setup = _ => {
    p.createCanvas(500, 500);
    p.background(125);
  };
};

const appInstance = new p5(app);
