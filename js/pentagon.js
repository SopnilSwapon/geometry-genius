function pentagonArea (){

    const base = getInputValueById('penta-base');
    const height = getInputValueById('penta-height');
    const area = 0.5 * base * height;
    setInnertextInPentagon('penta-result', area);  
}

function getInputValueById(inputId){
    const pentagonbaseText = document.getElementById(inputId).value;
    const pentagonBase = parseFloat(pentagonbaseText);
    return pentagonBase;
}
function setInnertextInPentagon(areaId, area){
    const pentagonArea = document.getElementById(areaId);
    pentagonArea.innerText = area;
}