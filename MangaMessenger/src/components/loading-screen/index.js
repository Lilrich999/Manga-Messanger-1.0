import { BaseComponent } from "../../core/BaseComponent.js";
import { LoadingScreen } from "./loading-screen.js";

class MMLoadingScreen extends BaseComponent {

    async connectedCallback() {

        await this.loadHTML(
            "src/components/loading-screen/loading-screen.html"
        );

        this.loadCSS(
            "src/components/loading-screen/loading-screen.css"
        );

        this.initialize();

    }

    initialize() {

        const loading = new LoadingScreen();

        loading.start();

    }

}

customElements.define(
    "mm-loading-screen",
    MMLoadingScreen
);