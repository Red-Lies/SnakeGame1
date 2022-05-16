import "./styles.css";

/** Class representing a point */
class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(xcoord: number, ycoord: number) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  /** initializing xcoord and ycoord properties. */

  get x(): number {
    return this.xcoord;
  }
  get y(): number {
    return this.ycoord;
  }
}

export default Point;
