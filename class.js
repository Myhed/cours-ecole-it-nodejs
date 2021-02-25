/**
 * @IMPORTANT js ES5 CLASS
 */

 function Vehicule(roue, color){
    this.roue = roue;
    this.color = color;
 }

 Vehicule.prototype.demarer = function(){
    console.log('start');
    return true;
 }

 Vehicule.prototype.arret = function(){
     console.log('arret');
     return false;
 }

 const peugeot = new Vehicule(4, "red");
 console.log(peugeot.demarer());

 Vehicule.prototype.demarer = function(){
     console.log('start');
 }

const vehicule2 = new Vehicule(4, "blue");

console.log(vehicule2.demarer());

console.log(typeof Vehicule);

/**
 * @IMPORTANT class ES6 js
 */

 class Vehicule2 {
    constructor(roue, color){
        this._roue = roue;
        this._color = color
    }

    get getRoue(){
        return this._roue;
    }

    set setRoue(roue){
        this._roue = roue;
    }
    demarer(){
        console.log('start')
        return true
    }
 }
 
 class VehiculeDeuxRoue extends Vehicule2 {
     constructor(roue, color){
        super(roue, color);
     }
 }
 const moto2 =  new VehiculeDeuxRoue(2, "green");

 console.log('moto2 demarer: ', moto2.demarer());

 const moto = new VehiculeDeuxRoue(2, "blue");

 Vehicule2.prototype.demarer = function(){
     console.log('start');
 }

 console.log(moto.demarer());


