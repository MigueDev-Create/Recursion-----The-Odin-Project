const mergeSort = (array) => {
    if (array.length <= 1) return array

    const middle = Math.floor(array.length / 2);


    const left = array.slice(0, middle)
    const rigth = array.slice(middle)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(rigth)

    const result = []

    console.log(sortedLeft, sortedRight)

    while (sortedLeft.length && sortedRight.length) {
        sortedLeft[0] < sortedRight[0]
            ? result.push(sortedLeft.shift())
            : result.push(sortedRight.shift())

    }

    result.push(...sortedLeft, ...sortedRight)
    return result

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))