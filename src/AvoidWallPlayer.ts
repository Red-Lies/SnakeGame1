import Player from "./Player";
import SnakeController from "./SnakeController";
import Snake from "./Snake";

/** Class represents AvoidWallPlayer that extends Player. */
class AvoidWallPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  /** extends Player class
   * constructor calls a superclass sc
   */

  // right = 1
  // left = -1
  // down = 2
  // up = 3

  makeTurn() {
    if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x === 0 &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    } else if (this.sc.snakeDirection === -1 && this.sc.snakePosition.x === 0) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth &&
      this.sc.snakePosition.y < this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    } else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakeDirection === 3 &&
      this.sc.snakePosition.x < this.sc.worldWidth / 2 &&
      this.sc.snakePosition.y === 0
    ) {
      this.sc.turnSnakeRight();
    } else (this.sc.snakeDirection === 3 && this.sc.snakePosition.y === 0) {
      this.sc.turnSnakeLeft();
    }
  }
}

/** The 8 possibilities to avoid crash into the walls.*/ 

export default AvoidWallPlayer;
