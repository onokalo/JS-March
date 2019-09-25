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
let a;
let b;
const calc = new Calc();
switch (argv[0]) {
  case "--addition":
    console.log("--addition 2 2");
    a = argv[1];
    b = argv[2];
    let resadd = calc.addition(a, b);
    console.log(a, "+", b, "=", resadd);
    break;
  case "--subtraction":
    console.log("--subtraction");
    a = argv[1];
    b = argv[2];
    let ressubtract = calc.subtraction(a, b);
    console.log(a, "-", b, "=", ressubtract);
    break;
  
    case "--multiplication":
      console.log("--multiplication");
      a = argv[1];
      b = argv[2];
      let resmultiply = calc.multiplication(a, b);
      console.log(a, "*", b, "=", resmultiply);
      break;

      case "--division":
        console.log("--division");
        a = argv[1];
        b = argv[2];
        let resdivide = calc.division(a, b);
        console.log(a, "/", b, "=", resdivide);
        break;
  default:
    console.log("Use --help to get more information");
    break;
}
 