import "./styles.css";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

/** Class representing a snake controller. */
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(snakeWorld: WorldModel, slitherer: Snake) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }

  /** snakeworld and slitherer passed though the constructor.  */

  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight() {
    this.slitherer.turnRight();
  }

  /** turnSnakeLeft and turnSnakeRight
   * that call turnLeft and turnRight on slitherer. */

  get snakePosition() {
    return this.slitherer.position;
  }
  get snakeDirection() {
    return this.slitherer.direction;
  }
  /** SnakePosition returns the Snake's position.
   * SnakeDirection return the Snake's direction.
   * get the current direction
   */

  get worldWidth() {
    return this.snakeWorld.worldWidth;
  }
  get worldHeight() {
    return this.snakeWorld.worldHeight;
  }
}
/** returns the width and height properties of the WorldModel */

export default SnakeController;
