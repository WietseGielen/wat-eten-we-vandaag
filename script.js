alreadySeenMorningFoods = [];
alreadySeenNoonFoods = [];
alreadySeenEveningFoods = [];

function ochtend () {
   chooseOneFood([
        "morning/spiegelei.jpeg",
        "morning/yoghurt-fruit.jpg"
    ], alreadySeenMorningFoods).then(chosenFood => {
        alreadySeenMorningFoods.push(chosenFood);
    });
}

function middag () {
    chooseOneFood([
        "noon/croque.jpg",
        "noon/smos.jpg",
        "noon/panini-pesto.jpg",
        "noon/tomatensoep.jpg",
        "noon/preisoep.jpg",
        "noon/paprikasoep.jpg"
    ], alreadySeenNoonFoods).then(chosenFood => {
        alreadySeenNoonFoods.push(chosenFood);
    })
}

function avond () {
    chooseOneFood([
        "evening/cannelloni-spinazie.jpg",
        "evening/pasta-pesto.jpg",
        "evening/pasta-sciciliana.jpg",
        "evening/naambrood-pizza.jpg",
        "evening/vleesbrood-krieken.jpg",
        "evening/balletjes-tomatensaus.jpg",
        "evening/vegan-snitzel-appelmoes.jpg",
        "evening/vega-burger-zoet-aardappel.jpg",
        "evening/kip-met-frieten.jpg",
        "evening/lasagne.jpg",
        "evening/mousaka.jpg",
        "evening/hotdogs.jpg"
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