function parallelogram (){
  const base = getValue('parale-base');
  const height = getValue('parale-height');
  const area = base * height;
//   console.log(area);

  setInnerTextArea('parale-result', area)
}
function getValue(props){
    const baseInput = document.getElementById(props).value;
    const base = parseFloat(baseInput);
    return base;
}

function setInnerTextArea (elementId, text){
    const element = document.getElementById(elementId);
    element.innerText = text;
}