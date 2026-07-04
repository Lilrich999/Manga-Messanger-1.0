export class Icon {

    constructor(component) {

        this.component = component;

    }

    render(iconName = "message-circle") {

        this.component.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/icon/icon.css">

            <svg class="mm-icon">

                <use href="src/assets/icons/sprite.svg#${iconName}"></use>

            </svg>
        `;

    }

}