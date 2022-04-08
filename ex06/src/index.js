function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passanger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    var gloveBoxContents = myStorage.car.inside["glove box"];
    console.log(gloveBoxContents);

}

myNes();
module.exports = myNes;