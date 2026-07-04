export class Sidebar {

    constructor(component) {

        this.component = component;

    }

    initialize() {

        console.log("Sidebar Loaded");

        this.cacheElements();

        this.bindEvents();

    }

    cacheElements() {

        this.buttons = this.component.querySelectorAll(
            ".sidebar__button"
        );

    }

    bindEvents() {

        this.buttons.forEach(button => {

            button.addEventListener("click", () => {

                this.setActive(button);

            });

        });

    }

    setActive(activeButton) {

        this.buttons.forEach(button => {

            button.classList.remove("sidebar__button--active");

        });

        activeButton.classList.add("sidebar__button--active");

    }

}