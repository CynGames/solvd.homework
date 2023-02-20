class eventEmitter {

    getEventCallbacks = (eventName) => this.events[eventName];

    constructor() {
        this.events = {};
    }

    emit(eventName, ...args) {
        const eventCallbacks = this.getEventCallbacks(eventName);

        if (eventCallbacks) {
            for (let i = 0; i < eventCallbacks.length; i++) {
                eventCallbacks[i](...args);
            }
        }
    }

    on(eventName, callback) {
        this.events[eventName] = this.getEventCallbacks(eventName) || []
        this.events[eventName].push(callback);
    }

    prependListener(eventName, listener) {
        this.events[eventName] = this.getEventCallbacks(eventName) || []
        this.events[eventName].unshift(listener)
    }

    removeListener(eventName, listener) {
        const eventCallbacks = this.getEventCallbacks(eventName);

        if (eventCallbacks) {
            const index = eventCallbacks.indexOf(listener)
            if (index) eventCallbacks.splice(index, 1)
        }
    }

}

const emitter = new eventEmitter()

emitter.on("buttonClicked", (withArgs) => {
    console.log("Button Clicked 1 " + withArgs)
});

emitter.on("buttonClicked", () => {
    console.log("Button Clicked 2 ")
});

emitter.on("buttonClicked", () => {
    console.log("Button Clicked 3")
});

emitter.prependListener("buttonClicked", () => {
    console.log("Button Clicked 4 - Should be first")
});

function callbackTest() {
    console.log("Button Clicked 5 - Should never be called")
}

emitter.on("buttonClicked", callbackTest);

emitter.removeListener("buttonClicked", callbackTest);

emitter.emit("buttonClicked", "The args are passed")