console.log("Hello World")

function Pokemon(name, level, exp){
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    this.tackle = function(target){
        console.log(this.name + " tackled " + target.name);
        target.health -= this.attack
        if(target.health < 0){
            target.health = 0;
        }
        console.log(target.name + "'s health is now reduced to " + target.health);
    };

    this.faint = function(){
        console.log(this.name + " fainted ");
    }

    this.levelUp = function(){
        if(this.faint() <= 0){
            this.level + 1;
        }
    }
}

function Trainer(name, p1, p2, p3){
    this.name = name;
    this.pokemon = [p1, p2, p3];
}

let pikachu = new Pokemon("Pikachu", 13);
let rattata = new Pokemon("Rattata", 8);
let pidgey = new Pokemon("Pidgey", 12);
let charmander = new Pokemon("Charmander", 8);
let metapod = new Pokemon("Metapod", 5);
let rayquaza = new Pokemon("Rayquaza", 100);

let derek = new Trainer("Derek", pikachu, rattata, pidgey);
let theresa = new Trainer("Theresa", charmander, metapod, rayquaza);

function battle(t1, t2){
    let t1counter = 0;
    let t2counter = 0;
    console.log("---Pokemon Battle---");
    console.log(t1.name + " vs " + t2.name);
    console.log(t1.name + " sends out level " + t1.pokemon[t1counter].level + " " + t1.pokemon[t1counter].name + " - Attack: " + t1.pokemon[t1counter].attack + " Health: " + t1.pokemon[t1counter].health);
    console.log(t2.name + " sends out level " + t2.pokemon[t2counter].level + " " + t2.pokemon[t2counter].name + " - Attack: " + t2.pokemon[t2counter].attack + " Health: " + t2.pokemon[t2counter].health);
    do{
            t1.pokemon[t1counter].tackle(t2.pokemon[t2counter]);
            if(t2.pokemon[t2counter].health <= 0){
                t2.pokemon[t2counter].faint();
                ++t2counter;
                if(t2counter == 3){
                    console.log(t1.name + " wins!")
                    continue;
                };
                t1.pokemon[t1counter].level++;
                console.log(t2.name + " sends out level " + t2.pokemon[t2counter].level + " " + t2.pokemon[t2counter].name + " - Attack: " + t2.pokemon[t2counter].attack + " Health: " + t2.pokemon[t2counter].health);
            }
            console.log();
            t2.pokemon[t2counter].tackle(t1.pokemon[t1counter]);
            if(t1.pokemon[t1counter].health <= 0){
                t1.pokemon[t1counter].faint();
                ++t1counter;
                if(t1counter == 3){
                    console.log(t2.name + " wins!")
                    continue;
                };
                t1.pokemon[t1counter].level++;
                console.log(t1.name + " sends out level " + t1.pokemon[t1counter].level + " " + t1.pokemon[t1counter].name + " - Attack: " + t1.pokemon[t1counter].attack + " Health: " + t1.pokemon[t1counter].health);
            }
            console.log();
    }while(t1counter != 3 || t2counter != 3)
    
}
battle(derek, theresa);