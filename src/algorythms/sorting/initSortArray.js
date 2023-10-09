export function initSortArray() {
    let array = [];
    while(array.length < 10) {
        let num = Math.floor((Math.random() * 50) + 1);
        if(array.indexOf(num) === -1) array.push(num)
    }
    return array;
}