import { APP_CONFIG } from "../config/app-config.js";
import { Router } from "./router.js";
import { Utils } from "./utils.js";

// Register Web Components
import "../components/loading-screen/index.js";

class MangaMessenger {

    constructor() {

        this.router = new Router();
        this.app = document.querySelector("#app");

    }

    initialize() {

        Utils.log(`${APP_CONFIG.name} ${APP_CONFIG.version}`);

        this.router.start();

        this.render();

    }

    render() {

        this.app.innerHTML = `
            <mm-loading-screen></mm-loading-screen>
        `;

    }

}

window.addEventListener("DOMContentLoaded", () => {

    const app = new MangaMessenger();

    app.initialize();

});