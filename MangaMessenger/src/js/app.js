import { APP_CONFIG } from "../config/app-config.js";
import { Router } from "./router.js";
import { Utils } from "./utils.js";

// Register Web Components
import "../components/loading-screen/index.js";
import "../components/app-layout/index.js";
import "../components/icon/index.js";
import "../components/sidebar/index.js";

class MangaMessenger {

    constructor() {

        this.app = document.querySelector("#app");

        this.router = new Router(this);

    }

    initialize() {

        Utils.log(
            `${APP_CONFIG.name} ${APP_CONFIG.version}`
        );

        this.router.start();

    }

    showLoadingScreen() {

        this.app.innerHTML = `
            <mm-loading-screen></mm-loading-screen>
        `;

    }

    showMainLayout() {

        this.app.innerHTML = `
            <mm-app-layout></mm-app-layout>
        `;

    }

}

window.addEventListener("DOMContentLoaded", () => {

    const app = new MangaMessenger();

    app.initialize();

});