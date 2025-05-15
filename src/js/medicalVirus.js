import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class MedicalVirus extends Actor {
    constructor() {
        super({
            width: Resources.MedicalVirus.width,
            height: Resources.MedicalVirus.height
        });

    }

    onInitialize(engine) {
        this.graphics.use(Resources.MedicalVirus.toSprite());

        this.on
        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight
        );

    }
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -5
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 5
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -5
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 5
        }
        this.vel = new Vector(xspeed, yspeed)
    }


}