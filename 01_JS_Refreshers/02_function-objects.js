// Functions : instead of writing same code again and again we have to write it once and use it
//DRY Principle is used here

function sayGoodMorning(userName) {
    console.log("Good Morning", userName);
}

function greet(name) {
    return `Hello, ${name}!`;
}

const greetUserWithArrow = (name) => {
    console.log(`Good Morning in Arrow ! ${name}`);
};

sayGoodMorning("Rahul");
sayGoodMorning("Tom");
greetUserWithArrow("Rahul");
