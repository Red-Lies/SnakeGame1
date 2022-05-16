import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";


/** Class representing a Canvas World View */
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  construtor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  display(worldModel: WorldModel) {
    this.worldCanvas.width = worldModel.worldWidth * this.scalingFactor;
    this.worldCanvas.height = worldModel.worldHeight * this.scalingFactor;
    let rectangle = document.createElement("canvas").getContext("2d");
    rectangle.fillStyle = "blue";
    rectangle.fillRect(5, 10, 50, 20);
  }
}

worldView { IWorldView: null;
}

   set View(worldModel, IWorldView);

   update();{ WorldModel, IWorldView
  }


export default CanvasWorldView;
