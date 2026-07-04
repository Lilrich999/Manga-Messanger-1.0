export class AppLayout {

    constructor(component) {

        this.component = component;

    }

    initialize() {

        console.log("Application Layout Loaded");

        this.cacheElements();

    }

    cacheElements() {

        this.sidebar =
            this.component.querySelector(".app-layout__sidebar");

        this.chatList =
            this.component.querySelector(".app-layout__chat-list");

        this.chatWindow =
            this.component.querySelector(".app-layout__chat-window");

    }

}