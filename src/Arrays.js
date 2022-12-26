export function arraySorting(data) {
    let arr = data.split(',');
    for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
    let str = '';
    arr.sort((a, b) => a - b);
    for (let item of arr) str = str + item + ',';
    str = str.substring(0, str.length - 1);
    return str;
}

export function arrayFiltering(data) {
    for (let i = 0; i < data.length; ) {
        if (data[i] > 100) {
            data.splice(i, 1);
        } else {
            i++;
        }
    }
    return data;
}

export function arrayPushing(array1, array2) {
    let array3 = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) array3[i] = array1.shift();
        else array3[i] = array2.shift();
    }
    return array3;
}
