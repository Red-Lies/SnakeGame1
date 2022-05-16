import WorldModel from "./WorldModel";
import Player from "./Player";

/**interface IWorldView  */
interface IWorldView {
  display: (WM: WorldModel) => void;
}

/**
 * implemented a display method.
 * that takes a WorldModel as an input.
 * returns nothing (void)
 */

export default IWorldView;
