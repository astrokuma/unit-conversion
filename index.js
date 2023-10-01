let imperial = true;
const convertBtn = document.getElementById("convert-btn");
const lengthConv = document.getElementById("length-conv");
const volumeConv = document.getElementById("volume-conv");
const massConv = document.getElementById("mass-conv");
const inputNum = document.getElementById("input-num");
const titleEl = document.getElementById("title");
const title1El = document.getElementById("title1");
const title2El = document.getElementById("title2");
const length1El = document.getElementById("length1");
const length2El = document.getElementById("length2");
const volume1El = document.getElementById("volume1");
const volume2El = document.getElementById("volume2");
const weight1El = document.getElementById("weight1");
const weight2El = document.getElementById("weight2");

const titles = ["Metric", "Imperial"];
const lengths = ["Meter", "Feet"];
const volumes = ["Liters", "Gallons"];
const weights = ["Kilograms", "Pounds"];

titleEl.addEventListener("click", titleSwap);

function titleSwap() {
    [titles[0], titles[1]] = [titles[1], titles[0]];
    [lengths[0], lengths[1]] = [lengths[1], lengths[0]];
    [volumes[0], volumes[1]] = [volumes[1], volumes[0]];
    [weights[0], weights[1]] = [weights[1], weights[0]];

    title1El.textContent = titles[0];
    title2El.textContent = titles[1];
    length1El.textContent = lengths[0];
    length2El.textContent = lengths[1];
    volume1El.textContent = volumes[0];
    volume2El.textContent = volumes[1];
    weight1El.textContent = weights[0];
    weight2El.textContent = weights[1];

    imperial = !imperial;
    
    convert(Number(inputNum.value));
}

convertBtn.addEventListener("click", () => convert(Number(inputNum.value)));

function convert(inputValue) {
    if (imperial) {
        lengthConv.innerHTML = `${inputValue} m : ${(inputValue * 3.281).toFixed(2)} ft`;
        volumeConv.innerHTML = `${inputValue} L : ${(inputValue * 0.264).toFixed(2)} gal`;
        massConv.innerHTML = `${inputValue} Kg : ${(inputValue * 2.204).toFixed(2)} lb`;
    } else {
        lengthConv.innerHTML = `${inputValue} ft : ${(inputValue / 3.281).toFixed(2)} m`;
        volumeConv.innerHTML = `${inputValue} gal : ${(inputValue / 0.264).toFixed(2)} L`;
        massConv.innerHTML = `${inputValue} lb : ${(inputValue / 2.204).toFixed(2)} Kg`;
    }
}