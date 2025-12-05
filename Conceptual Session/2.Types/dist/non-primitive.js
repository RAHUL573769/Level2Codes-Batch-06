"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    let person = {
        name: "Rahul",
        age: 45,
        city: "Bangladesh",
    };
    console.log(person);
    const phones = ["Rsss", ""];
    const mixedArray = ["22", 56];
    const number1 = [12, "", false];
    let TrafficLight;
    (function (TrafficLight) {
        TrafficLight["Red"] = "RED";
        TrafficLight["Yellow"] = "YELLOW";
        TrafficLight["White"] = "WHITE";
    })(TrafficLight || (TrafficLight = {}));
    const light = {
        red: TrafficLight.Red,
        yellow: TrafficLight.Yellow,
    };
}
//# sourceMappingURL=non-primitive.js.map