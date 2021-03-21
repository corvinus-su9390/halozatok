let w = document.getElementById("here");

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
};

for (let i = 0; i < 10; i++) {

    let row = document.createElement("div");
    row.classList.add("row");

    w.appendChild(row);

    for (let y = 0; y < 10; y++) {
        if (i >= y) {
            let szam = document.createElement("div");
            szam.classList.add("box");

            szam.style.backgroundColor = `rgb(${280 / 10 * i},0,${280 / 10 * y})`;
            row.appendChild(szam);
            szam.innerText = factorialize(i) / (factorialize(y) * factorialize(i - y));
        }
    }
} 