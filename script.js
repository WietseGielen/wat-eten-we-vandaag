alreadySeenMorningFoods = [];
alreadySeenNoonFoods = [];
alreadySeenEveningFoods = [];

function ochtend () {
   chooseOneFood([

    ], alreadySeenMorningFoods).then(chosenFood => {
        alreadySeenMorningFoods.push(chosenFood);
    });
}

function middag () {
    chooseOneFood([

    ], alreadySeenNoonFoods).then(chosenFood => {
        alreadySeenNoonFoods.push(chosenFood);
    })
}

function avond () {
    chooseOneFood([
        "cannelloni-spinazie.jpg",
        "pasta-pesto.jpg",
        "pasta-sciciliana.jpg",
        "naambrood-pizza.jpg",
        "vleesbrood-krieken.jpg",
        "balletjes-tomatensaus.jpg",
        "vegan-snitzel-appelmoes.jpg",
        "vega-burger-zoet-aardappel.jpg",
        "kip-met-frieten.jpg",
        "lasagne.jpg",
        "mousaka.jpg",
        "hotdogs.jpg"
    ], alreadySeenEveningFoods).then(chosenFood => {
        alreadySeenEveningFoods.push(chosenFood)
    });
}

function sleep(duration) {
    return new Promise(r => setTimeout(r, duration));
}

async function chooseOneFood (allFood, alreadySeenFoods) {
    for (i = 0; i < allFood.length; i++) {
        var food = allFood[i];
        document.body.style.background = "url('food/" + food + "') no-repeat"; 
        document.body.style.backgroundSize = "cover";
        await sleep(150);
    }

    var foodPossibilities = allFood
        .filter(x => !alreadySeenFoods.includes(x))
        .concat(alreadySeenFoods.filter(x => !allFood.includes(x)));

    var randomIndex = Math.round(Math.random() * (foodPossibilities.length - 1));
    var chosenFood = foodPossibilities[randomIndex];
    document.body.style.background = "url('food/" + chosenFood + "') no-repeat"; 
    document.body.style.backgroundSize = "cover";

    return chosenFood;
}