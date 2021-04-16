"use strict";
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const textl = document.querySelectorAll("h1, h2, h3");
const ranButton = document.querySelector(".random");
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function setTextColor() {
    for (let i = 0; i < textl.length; i++) {
        textl[i].classList.toggle("dyn-color");
    }
    ;
}
function check2(i) {
    return (hexToRgb(i.value).r <= 140 && hexToRgb(i.value).g <= 140 && hexToRgb(i.value).b <= 140);
}
var a = 0, c = 0, f = 0;
function setText() {
    var c1 = check2(color1);
    var c2 = check2(color2);
    if (c1 || c2) {
        a = 0;
        c += 1;
    }
    else {
        a += 1;
        c = 0;
    }
    if (f == 0)
        f += 1;
    else {
        if (c === 1 && a === 0)
            setTextColor();
        else if (c === 0 && a === 1)
            setTextColor();
    }
}
function setRandomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}
function setGradient() {
    body.style.background = `linear-gradient(to right , ${color1.value} , ${color2.value})`;
    css.textContent = body.style.background + ";";
    setText();
}
color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
ranButton.addEventListener("click", setRandomColor);
