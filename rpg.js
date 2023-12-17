//Variables Globales
let encendido = true;

//FUNCIONES GENERALES

//CLASES



//EQUIPAMIENTO
//ARMAS
class Weapons {
  constructor (weaponId,weaponName,weaponDmg,weaponSpecial,weaponDback,weaponDescription){
    this.weaponId = weaponId;
    this.weaponName = weaponName;
    this.weaponDmg = weaponDmg;
    this.weaponSpecial = weaponSpecial;
    this.weaponDback = weaponDback;
    this.weaponDescription = weaponDescription;
  }
}

const espadaDeCobre = new Weapons(0,"Espada De Cobre",5,0,0,"Es una simple espada de cobre, al menos tienes una espada :D");
//ARMADURAS
class Armors {
  constructor (armorId,armorName,armorDefense,armorSpecial,armorDback,armorDescription){
    this.weaponId = weaponId;
    this.weaponName = weaponName;
    this.weaponDmg = weaponDmg;
    this.weaponSpecial = weaponSpecial;
    this.weaponDback = weaponDback;
    this.weaponDescription = weaponDescription;
  }
}

// PLAYER  

class Player{
  constructor(){
    this.playerName = "";
    this.class;
    this.stats = {
      maxHp:50,
      hp:50,
      maxMana:20,
      mana:20,
      dmg:5,
      speed:5,
      special:5,
      defense:5,
    };
    this.equipment = 
    {
      playerWeapon:0,
      playerArmor:0,

    }
    this.inventory = [];
    
  }
  changeName(){
    this.playerName = prompt("Forastero, dime como te llamas...");
  }
  
  classWarrior(){
    this.class = "Warrior"
    this.stats.maxHp = 60;
    this.stats.hp = 60;
    this.stats.defense = 6;
    this.stats.special = 2;
    this.stats.speed = 4;
    this.stats.dmg = 6;
    this.inventory.push(espadaDeCobre); 
  }
}
let player = new Player();

const playerCreateClass = () => {
  player.changeName();
  let choice = parseInt(prompt("Cuentame... en que eres bueno?...:\n1.- Guerrero / Bueno con las armas\n2.- Mago / Conocedor de magias arcanas\n3.- Picaro / Rapido y preciso"));

  while(isNaN(choice)){
    choice = parseInt(prompt("Cuentame... en que eres bueno?...:\n1.- Guerrero / Bueno con las armas\n2.- Mago / Conocedor de magias arcanas\n3.- Picaro / Rapido y preciso"));
  }

  switch(choice){
    case 1:
      player.classWarrior();
      break
    case 2:
      alert("Tu te lo pierdes forastero...");
      break;
    
      default:
        alert("Ingresa una opcion valida >:(")
        mainMenu();
      break
  }
}




//FUNCIONES GENERALES


//ENEMIGOS

//EQUIPAMIENTO

//MAGIA

//MECANICAS DE COMBATE





//MENUS



const mainMenu = () => {
  let choice = parseInt(prompt("Hola Forastero! Quieres iniciar esta aventura?:\n1.-Inicar Juego\n2.-Salir"));
  
  while(isNaN(choice)){
    choice = parseInt(prompt("Hola Forastero! Quieres iniciar esta aventura?:\n1.-Inicar Juego\n2.-Salir"));
  }

  switch(choice){
    case 1:
      playerCreateClass();
      break
    case 2:
      alert("Tu te lo pierdes forastero...");
      break;
    
      default:
        alert("Ingresa una opcion valida >:(")
        mainMenu();
      break
  }
}




//MAIN GAME

mainMenu();
console.log(player.playerName);
console.log(player.class);
console.log(player.stats);
console.log(player.inventory);