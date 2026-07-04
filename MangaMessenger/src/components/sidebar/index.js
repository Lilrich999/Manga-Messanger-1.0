import { BaseComponent } from "../../core/BaseComponent.js";
import { Sidebar } from "./sidebar.js";

class MMSidebar extends BaseComponent {

    async connectedCallback() {

        await this.loadHTML(
            "src/components/sidebar/sidebar.html"
        );

        this.loadCSS(
            "src/components/sidebar/sidebar.css"
        );

        new Sidebar(this).initialize();

    }

}

customElements.define(
    "mm-sidebar",
    MMSidebar
);