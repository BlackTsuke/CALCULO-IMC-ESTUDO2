export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(1)
}

export function notNumber(value){
  return isNaN(value) || value == ''
}