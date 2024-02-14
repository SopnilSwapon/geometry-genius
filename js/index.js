function calculateTriangleArea (){
    const baseInputText = document.getElementById('base').value;
    const base = parseFloat(baseInputText);
    const heightInputText = document.getElementById('height').value;
    const height = parseFloat(heightInputText);
    const area = 0.5 * height * base;
    const result = document.getElementById('result');
    result.innerText = area;
}