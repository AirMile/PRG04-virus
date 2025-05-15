import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class GoodVirus extends Actor {
    constructor(){
        super({
            width: Resources.GoodVirus.width,
            height: Resources.GoodVirus.height
        });

    }

    onInitialize(engine) {
        this.graphics.use(Resources.GoodVirus.toSprite());

        this.on
        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight
        );

    }


}