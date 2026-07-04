import { BaseComponent } from "../../core/BaseComponent.js";
import { AppLayout } from "./app-layout.js";

class MMAppLayout extends BaseComponent {

    async connectedCallback() {

        await this.loadHTML(
            "src/components/app-layout/app-layout.html"
        );

        this.loadCSS(
            "src/components/app-layout/app-layout.css"
        );

        this.initialize();

    }

    initialize() {

        new AppLayout(this).initialize();

    }

}

customElements.define(
    "mm-app-layout",
    MMAppLayout
);