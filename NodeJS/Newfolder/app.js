const Account = require("./account");
const argv = process.argv.slice(2);

const account = new Account();
switch (argv[0]) {
    case "--open":
        console.log("--open 1234567 10000 UAH");
        number = argv[1];
        cash = argv[2];
        currency = argv[3];
        account.ShowAccount();
        break;
    case "--withdrawal":
        console.log("--withdrawal");
        number = argv[1];
        cash = argv[2];
        currency = argv[3];
        let reswithdrawal = account.withdrawal(number, cash, currency);
        console.log(number, ":", cash, "-", b, "=", reswithdrawal);
        break;

    case "--depositing":
        console.log("--depositing");
        number = argv[1];
        cash = argv[2];
        currency = argv[3];
        let resmultiply = account.depositing(number, cash, currency);
        console.log(a, "*", b, "=", resmultiply);
        break;

    default:
        console.log("Use --help to get more information");
        break;
}