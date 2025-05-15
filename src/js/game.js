import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { BadVirus } from './BadVirus.js';


export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("start de game!");
        for (let i = 0; i < 10; i++) {
            const badVirus = new BadVirus
            this.add(badVirus);
        }
    }

    badVirusLeft(e) {
        e.target.pos = new Vector(1350, 300);
    }
}

new Game()
