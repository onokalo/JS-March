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
let calc;
switch (argv[0]) {
  case "--addition":
    console.log("--add");
    a = argv[1];
    b = argv[2];
    calc = new Calc();
    let resadd = calculator.addition(a, b);
    console.log(a, "+", b, "=", resadd);
    break;
  case "--subtraction":
    console.log("--subtract");
    a = argv[1];
    b = argv[2];
    calc = new Calc();
    let ressubtract = calc.subtraction(a, b);
    console.log(a, "-", b, "=", ressubtract);
    break;
  
    case "--multiplication":
      console.log("--multiply");
      a = argv[1];
      b = argv[2];
      calc = new Calc();
      let resmultiply = calc.multiplication(a, b);
      console.log(a, "*", b, "=", resmultiply);
      break;

      case "--division":
        console.log("--divide");
        a = argv[1];
        b = argv[2];
        calc = new Calc();
        let resdivide = calc.division(a, b);
        console.log(a, "/", b, "=", resdivide);
        break;
  default:
    console.log("Use --help to get more information");
    break;
}
 