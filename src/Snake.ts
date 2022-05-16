import display from "./display";
import Point from "./Point";

/** Class representing a Snake. */
class Snake {
  private currentDirection: number;
  private currentPosition: Point;
  /**
   * Create a Direction and Position.
   */
  constructor(x: number = 0, y: number = 0) {
    this.currentDirection = 1;
    this.currentPosition = new Point(x, y);
  }
  /**
   * Default zero and facing forward*/

  /**
   * right = 1
   * left = -1
   *  down = 2
   *  up = 3
   */

  move(numberOfSquares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x + numberOfSquares,
        this.currentPosition.y
      );
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + numberOfSquares
      );
    } else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.currentPosition.x - numberOfSquares,
        this.currentPosition.y
      );
    } else {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - numberOfSquares
      );
    }
  }

  /**
   * Turn method
   * changes the Snakes's direction.
   * forward and backward with the xcoord and ycoord from the Point class.
   */

  turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 3;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 2) {
      this.currentDirection = 1;
    } else {
      this.currentDirection = -1;
    }
  }

  turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 3;
    } else if (this.currentDirection === 2) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }

  /** turnLeft and turnRight methods
   * Direction (left, right, up and down)
   * four possibilities
   */

  get position() {
    return this.currentPosition;
  }

  get direction() {
    return this.currentDirection;
  }
}

export default Snake;
