export class Router {

    constructor(app) {

        this.app = app;

        this.currentPage = "loading";

    }

    start() {

        console.log("Router Started");

        this.navigate(this.currentPage);

    }

    navigate(page) {

        this.currentPage = page;

        switch (page) {

            case "loading":

                this.app.showLoadingScreen();

                // Temporary transition
                setTimeout(() => {

                    this.navigate("chat");

                }, 3000);

                break;

            case "chat":

                this.app.showMainLayout();

                break;

            default:

                console.warn(`Unknown page: ${page}`);

        }

    }

}