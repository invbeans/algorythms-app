//пока пишу для поисков, которым нужен отсортированный массив
//потом поменять если что

export function initSearchArray() {
    let array = [];
    while(array.length < 10) {
        let num = Math.floor((Math.random() * 50) + 1);
        if(array.indexOf(num) === -1) array.push(num)
    }

    array.sort(function (a, b) {
        return a - b;
    });

    return array;
}