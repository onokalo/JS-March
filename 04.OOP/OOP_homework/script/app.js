class Dog {
    constructor(name, breed, age, power){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.power = power
    }

    showDog (){
        let result = document.querySelector("#result");
        result.innerHTML = "<b>Congratulation!</b> Your dog's name:<b>" + this.name + "!</b>" + " His breed:<b>" + this.breed + "</b>. His age:<b>" + this.age + "</b>.";
        console.log("Name: ",this.name, " Breed: ",this.breed, " Age: ",this.age, " Power: ",this.power);
        let resultImage = document.createElement("img");
        result.appendChild(resultImage);
        switch(this.breed){
            case 'spitz': resultImage.src = 'images/image1.jpg';break;
            case 'corgi': resultImage.src = 'images/image2.jpg';break;
            case 'bottle': resultImage.src = 'images/image3.jpg';break;
        }
    }

    play (){
        if(this.power<=0 || this.power>=100){
            this.die();
        } else {
            this.power -= 10;
            game.innerHTML = "Power after play==>" + this.power +"!";
        }
        
    }
    
    die (){
        game.innerHTML = "Oops! " + this.name + " is die!!!";
    }
    eat (){
        if(this.power<=0 || this.power>=100){
            this.die();
        } else {
            this.power += 10;
            game.innerHTML = "Power after eat==>" + this.power +"!";
        }
    }
}

let NewDog;
let game = document.querySelector("#game");

function create() {
    let dogInfo = document.forms["dog-form"].elements;
    let name = dogInfo.name.value;
    let breed = dogInfo.breed.value;
    let age = dogInfo.age.value;
    NewDog = new Dog(name,breed,age,90);
    NewDog.showDog();
}

function playGame (){
    NewDog.play();
}

function eatGame (){
    NewDog.eat();
}
