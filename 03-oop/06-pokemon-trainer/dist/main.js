"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Trainer_1 = require("./Trainer");
function main() {
    // const input = [
    //     "Peter Charizard Fire 100",
    //     "George Squirtle Water 38",
    //     "Peter Pikachu Electricity 10",
    //     "Tournament",
    //     "Fire",
    //     "Electricity",
    //     "End",
    // ];
    const input = [
        "Sam Blastoise Water 18",
        "Narry Pikachu Electricity 22",
        "John Kadabra Psychic 90",
        "Tournament",
        "Fire",
        "Electricity",
        "Fire",
        "End",
    ];
    let isTournament = false;
    let trainers = [];
    for (const line of input) {
        if (line === "Tournament") {
            isTournament = true;
            continue;
        }
        if (line === "End") {
            // sort trainers
            trainers.sort((a, b) => {
                return b.getBadges() - a.getBadges();
            });
            // print result
            trainers.forEach((trainer) => {
                console.log(`${trainer.getName()} ${trainer.getBadges()} ${trainer.getPokemons().length}`);
            });
        }
        if (!isTournament) {
            // prepare for the tornament
            const [trainerName, pokemonName, pokemonElement, pokemonHealth] = line.split(" ");
            const trainer = new Trainer_1.Trainer(trainerName);
            const pokemon = new Pokemon_1.Pokemon(pokemonName, pokemonElement, +pokemonHealth);
            const existingTrainer = trainers.find((trainer) => trainer.getName() === trainerName);
            if (existingTrainer) {
                existingTrainer.addPokemon(pokemon);
            }
            else {
                trainers.push(trainer);
                trainer.addPokemon(pokemon);
            }
        }
        else {
            // play the tournament
            trainers.forEach((trainer) => {
                if (trainer.hasPokemon(line)) {
                    trainer.addBadge();
                }
                else {
                    trainer.hitPokemons(10);
                }
            });
        }
    }
}
main();
//# sourceMappingURL=main.js.map