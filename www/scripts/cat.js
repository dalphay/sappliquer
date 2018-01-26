"use strict";


class Cat extends Animal {
    constructor(name, race, power){
        super(name, race, power);
        
    }
    run(dx){
        // console.log("hi");
        // getComputedStyle(document.getElementById('img')).left
        // = parseInt(getComputedStyle(document.getElementById('img')).left)+dx+'px';
        // console.log(dx);
        // console.log(left);
        
        // let cat = document.getElementById("img");
        // cat.style.marginLeft = '600px';
        // document.getElementById('img').style.left.value;
        // = parseInt(document.getElementById('img').style.left)+dx+'px';
        // console.log(document.getElementById('img').style.left
        // = parseInt(document.getElementById('img').style.left)+dx+'px');
        let cat = document.getElementById("img");

        cat.style.left = "55px"; 
    }
}
