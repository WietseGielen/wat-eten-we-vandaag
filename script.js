alreadySeenMorningFoods = [];
alreadySeenNoonFoods = [];
alreadySeenEveningFoods = [];

async function ochtend () {
    chosenFood = chooseOneFood([

    ], alreadySeenMorningFoods);
    alreadySeenMorningFoods.push(chosenFood)
}

async function middag () {
    chosenFood = chooseOneFood([

    ], alreadySeenNoonFoods);
    alreadySeenNoonFoods.push(chosenFood)
}

async function avond () {
    var chosenFood = chooseOneFood([
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
    ], alreadySeenEveningFoods);
    alreadySeenEveningFoods.push(chosenFood)
    console.log(alreadySeenEveningFoods)
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