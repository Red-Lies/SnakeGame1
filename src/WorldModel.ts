import "./styles.css";
import Snake from "./Snake";

/** Class represents a World Model*/
class WorldModel {
  private oneSnake: Snake;
  private width: number;
  private height: number;

  /** containts one snake */

  constructor(oneSnake: Snake, width: number, height: number) {
    this.oneSnake = oneSnake;
    this.width = width;
    this.height = height;

    /** the oneSnake, the worldModel's width and height is passed through the constructor .  */
  }
  update(steps: number) {
    this.oneSnake.move(steps);
  }
  /** update method (steps) to the World Model class. */

  get oSnake() {
    return this.oneSnake;
  }

  get worldWidth() {
    return this.width;
  }

  get worldHeight() {
    return this.height;
  }
}

export default WorldModel;
