// reduce()배열의 모든 값 합산
// [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );

function solution(arr) {
    return arr.reduce((arr, cur) => arr + cur) / arr.length;
}