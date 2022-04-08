var myPetsArray = [
    {
        animalType: "Dog",
        name :["Pujdo"]
    },
    {
        animalType: "Cat",
        name: ["Maca"]
    },
    {
        animalType:"Bird",
        name: ["Tweety"]
    }
];

function myPetsFunction(pets){
   var myPets = myPetsArray[1].name[0];
    console.log(myPets)
}

myPetsFunction();
module.exports = myPetsFunction;
module.exports.myPets = myPetsFunction;