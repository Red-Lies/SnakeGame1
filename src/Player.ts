import "./styles.css";
import SnakeController from "./SnakeController";

/** Abstract class for Player */
abstract class Player {
  protected sc: SnakeController;
  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  /** takes a SnakeController as an argument.
   * initialized a property sc.
   */

  abstract makeTurn(): void;
}

export default Player;
