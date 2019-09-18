let promise = new Promise(function(resolve, reject){
    // return resolve;
    // return reject;
    setTimeout(() =>{
        resolve("Start process");
        // reject("Bad idea!");
    }, 1000)
})
.then(res => {
    console.log(res);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let car = {
                brand: "Tesla",
                model:"X"
            }

            console.log("You want to buy: ", car);
            // reject("Low money!")
            resolve(car);
        }, 500);
    })
})
.then((res) => {
    console.log("Result ===>", res);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let car = {
                brand: "Tesla",
                model:"X",
                price: 1000000
            }

            resolve(car);

        }, 1000);
    })
})
.then((res) => {
    console.log("Result ===>", res);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let car = {
                brand: "Tesla",
                model:"X",
                price: 1000000,
                police: "good"
            }

            // resolve(car);

            reject("Police say bad car!")

        }, 1000);
    })
})
.then((res) => {
    console.log("Result ===>", res);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let car = {
                brand: "Tesla",
                model:"X",
                price: 1000000,
                police: "good",
                CTO: "ready"
            }

            resolve(car);
        }, 1000);
    })
})
.then((res) => {
    console.log("You bought car: ", "Name: ", res.brand, " Model: ", res.model)
})
.catch(err => console.log(err));



// const fun = () => {
//     let result = "Arrow function";
//     return result;
// }
// let res = fun();
// console.log(res);

// const fun = () => console.log("Test");
// fun();