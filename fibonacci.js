// Necesitas tomar un numero y volverlo array, si se pasa 8 normalmente un for iteraria hasta llegar a ese numero,
// asi que debe haber algo que sume el primero con el segundo para obtener el tercero y asi para toda la iteracion e ir almacenandolos en un array 
// y luego devolver ese array

const fibs = (num) => {
    if (num === 0) return []
    if (num === 1) return [0]
    let arrayNum = [0, 1]
    for (let i = 2; i < num; i++) {

        arrayNum.push(arrayNum[i - 1] + arrayNum[i - 2])
    }
    return arrayNum
}

console.log('Iterativa', fibs(9))


const fibRec = (num) => {
    if (num === 0) return []
    if (num === 1) return [0]
    if (num === 2) return [0, 1]

    const previous = fibRec(num - 1)

    previous.push(previous[previous.length - 1] + previous[previous.length - 2])
    return previous
}

console.log('Recursiva', fibRec(10))