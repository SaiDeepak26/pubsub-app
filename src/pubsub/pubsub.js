class PubSub {
  constructor() {
    this.subscribers = [];
    this.store = {
      name: "actors",
    };
  }

  subscription(eventName, func) {
    return {
      subscribe: () => {
        if (this.subscribers[eventName]) {
          this.subscribers[eventName].push(func);
          // console.log(`${func.name} has subscribed to ${eventName} Topic!`);
        } else {
          this.subscribers[eventName] = [func];
          // console.log(`${func.name} has subscribed to ${eventName} Topic!`);
        }
        console.log(this.subscribers);
        // if (!this.subscribers) {
        //   this.subscribers = [];
        // }
        // this.subscribers.push({ func, eventName });
        // console.log(this.subscribers);
      },

      unsubscribe: () => {
        if (this.subscribers[eventName]) {
          this.subscribers[eventName] = this.subscribers[eventName].filter(
            (subscriber) => subscriber !== func
          );
          // console.log(`${func.name} has unsubscribed from ${eventName} Topic!`);
        }
      },
    };
  }
  publish(eventName, data, variable) {
    const funcs = this.subscribers[eventName];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func(data, variable);
      });
    }
    // if (!this.subscribers) return;
    // let diff = getDifference({ ...this.store, ...data }, this.store);
    // this.store = { ...this.store, ...data };
    // this.subscribers.forEach(({ callback, parameters }) => {
    //   if (
    //     !parameters ||
    //     (parameters && diff.some((key) => parameters.includes(key)))
    //   ) {
    //     callback(this.store);
    //   }
    // });
  }
}

// function getDifference(obj1, obj2) {
//   let keyFound = [];
//   Object.keys(obj1).forEach((key) => {
//     if (obj1[key] !== obj2[key]) {
//       keyFound.push(key);
//     }
//   });
//   return keyFound;
// }
export default new PubSub();
