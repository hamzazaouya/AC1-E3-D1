/*global*/

let output = document.getElementById('demo');

function pyramid(n) {
    const midPoint = Math.floor((n * 2 - 1) / 2);
    let level = '';

    for (let row = 0; row < n; row++) {

        for (let col = 0; col < n * 2 - 1; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                level += "#";
            }else {
                level += "<span style='opacity:.2'>#</span>";
            }
        }
        level += "<br />";
    }
    return level;
}

output.innerHTML = pyramid(50);