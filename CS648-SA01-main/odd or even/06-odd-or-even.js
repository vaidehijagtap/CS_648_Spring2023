/*eslint-env browser*/

var i;
for (i = 0; i <= 15; i += 1) {
    if (i % 2 === 0) {
        window.document.write(i + " is even.<br>");
    } else {
        window.document.write(i + " is odd.<br>");
    }
}