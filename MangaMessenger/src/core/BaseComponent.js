export class BaseComponent extends HTMLElement {

    constructor() {

        super();

        this.events = [];

    }

    /**
     * Loads the component HTML.
     */
    async loadHTML(htmlPath) {

        try {

            const response = await fetch(htmlPath);

            if (!response.ok) {

                throw new Error(`Unable to load ${htmlPath}`);

            }

            this.innerHTML = await response.text();

        } catch (error) {

            console.error(error);

        }

    }

    /**
     * Loads the component CSS.
     */
    loadCSS(cssPath) {

        const existing = this.querySelector(
            `link[href="${cssPath}"]`
        );

        if (existing) return;

        const link = document.createElement("link");

        link.rel = "stylesheet";

        link.href = cssPath;

        this.appendChild(link);

    }

    /**
     * Select one element.
     */
    $(selector) {

        return this.querySelector(selector);

    }

    /**
     * Select multiple elements.
     */
    $$(selector) {

        return [...this.querySelectorAll(selector)];

    }

    /**
     * Register an event automatically.
     */
    on(element, event, callback) {

        element.addEventListener(event, callback);

        this.events.push({

            element,

            event,

            callback

        });

    }

    /**
     * Remove every registered event.
     */
    removeEvents() {

        this.events.forEach(item => {

            item.element.removeEventListener(

                item.event,

                item.callback

            );

        });

        this.events = [];

    }

    /**
     * Called automatically when component is removed.
     */
    disconnectedCallback() {

        this.removeEvents();

        this.destroy();

    }

    /**
     * Override in child components.
     */
    initialize() {}

    /**
     * Override if needed.
     */
    destroy() {}

}