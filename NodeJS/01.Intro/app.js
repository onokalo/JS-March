// const Car = require("./modules/Car");

// const BMV = new Car("BMV", "X5", 50000);
// BMV.ShowCar();

// const argv = process.argv.slice(2);
// console.log(argv);

// switch (argv[0]) {
//     case "--create":
//         console.log("Example: --create BMV X5 50000");
//         let brend = argv[1];
//         let model = argv[2];
//         let price = argv[3];
//         const car = new Car(brend, model, price);
//         car.ShowCar();
//         break;
//     case "--help":
//         console.log("--create to create new car");
//         break;
//     default:
//         console.log("Use --help to get more information");
//         break;

// }

const Calc = require("./modules/calc");
const argv = process.argv.slice(2);
// console.log(argv);
switch (argv[0]) {
  case "--plus":
    console.log("Example: --plus 2 2");
    let a = argv[1];
    let b = argv[2];
    const calculator = new Calc();
    let res = calculator.plus(a, b);
    console.log(a, "+", b, "=", res);
    break;
  case "--minus":
    console.log("--minus 2 2");
    let a = argv[1];
    let b = argv[2];
    const calculator = new Calc();
    let res = calculator.minus(a, b);
    console.log(a, "-", b, "=", res);
    break;
  default:
    console.log("Use --help to get more information");
    break;
}
