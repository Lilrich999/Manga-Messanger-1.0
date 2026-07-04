import { Icon } from "./icon.js";

class MMIcon extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({

            mode: "open"

        });

    }

    connectedCallback() {

        const iconName =
            this.getAttribute("name") ||
            "message-circle";

        const icon =
            new Icon(this);

        icon.render(iconName);

    }

}

customElements.define(

    "mm-icon",

    MMIcon

);