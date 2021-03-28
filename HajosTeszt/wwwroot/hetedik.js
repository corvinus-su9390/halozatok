using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.wwwroot
{
    public class hetedik
    {
    }
}

let question;
let kep = document.getElementById("kép1");
let answer1 = document.getElementById("válasz1");
let answer2 = document.getElementById("válasz2");
let answer3 = document.getElementById("válasz3");
let currentId;
let questionNumber;
let answer = ["válasz1", "válasz2", "válasz3"];
let correstAnswer;
let kattinthat;
fetch("/questions.json")
    .then(r => r.json())
    .then(d => letöltés(d));

function letöltés(adat) {
    //let ide = document.getElementById("ide");
    //console.log(`${adat.length} kérdés érketett`)

    //for (var i = 0; i < adat.length; i++) {
    //    console.log(adat[i].questionText)
    //    let elem = document.createElement("li")
    //    elem.innerHTML = adat[i].questionText
    //    ide.appendChild(elem)
    //}
    numbers = adat;
    currentId = 0;
    questionNumber = numbers.length;
    correstAnswer = numbers[0].correctAnswer;

    console.log(questionNumber);
    kérdésMegjelenítés(numbers[0]);

};

function kérdésMegjelenítés(question) {
    if (question.image == "") {
        kep.src = "https://szoft1.comeback.hu/hajo/teszt-0050.jpg";

    } else {
        kep.src = `https://szoft1.comeback.hu/hajo/${kérdés.image}`;
    }
    answer1.textContent = question.answer1;
    answer2.textContent = question.answer2;
    answer3.textContent = question.answer3;

    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    kattinthat = true;
};

function vissza() {
    currentId - 1 <= 0 ? currentId = questionNumber - 1 : currentId = currentId - 1;
    kérdésMegjelenítés(numbers[currentId]);
}
function elore() {
    currentId + 1 >= questionNumber ? currentId = 0 : currentId = currentId + 1;
    kérdésMegjelenítés(numbers[currentId]);
}

function szinez(valasz) {
    //console.log(valaszok.indexOf(valasz.id+""))
    if (kattinthat) {
        if ("" + (numbers[currentId].correctAnswer - 1) === "" + valaszok.indexOf(valasz.id + "")) {
            //helyes ág
            valasz.style.backgroundColor = "green";
        } else {
            valasz.style.backgroundColor = "red";
        }
    }
    kattinthat = false;

}
