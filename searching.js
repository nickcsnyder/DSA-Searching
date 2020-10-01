const Bst = require('./bst');

const array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const array2 = [89, 30, 25, 32, 72, 70, 51, 42, 25,
    24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14,
    33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
    98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85,
    63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6,
    88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28,
    13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98,
    46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84,
    34, 53, 78, 40, 14, 5
];
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// console.log(binarySearch(array, 8));
// console.log(binarySearch(array, 16));
// console.log(binarySearch(array2.sort(function(a,b){return a-b}),11));
// console.log(indexOf(array2, 11));


/* in- 14 15 19 25 27 35 79 89 90 91 

//pre- 35 25 15 14 19 27 89 79 91 90

//post-14 19 15 27 25 79 90 91 89 35

                    35
                25      89 
            15    27  79   91
          14  19         90   

[5,7,6,9,11,10,8]
               8
            6    10
          5  7  9 11     

pre- [8,6,5,7,9,10,11]          
*/

const array3 = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
function main() {
    const tree = new Bst();

    for (let i = 0; i <= array4.length; i++)
        tree.insert(array4[i], array4[i]);

    console.log(tree.inOrder(), 'in');
    console.log(tree.preOrder(), 'pre');
    console.log(tree.postOrder(), 'post');
    console.log(tree.bfs(),'bfs');
}

// const array4 = [1, 2, 3, 4, 5, 6, 7, 8]

const array5 = [128, 97, 121, 123, 98, 97, 105];




main();