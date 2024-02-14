function calculatRectangularAre () {
    const recLength = document.getElementById('rec-length').value;
    const length = parseFloat(recLength);
    const recWidth = document.getElementById('rec-width').value;
    const width = parseFloat(recWidth);
    const area = length * width;
    const recResult = document.getElementById('rec-result');
    recResult.innerText = area;
    const besideResult = document.getElementById('rec-value');
    besideResult.innerText = area;
}