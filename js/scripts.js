var a = prompt('Podaj długość podstawy trójkata');
var h = prompt('Podaj wysokość trójkąta');
function getTriangleArea(a, h) {
    if ( (a <= 0) && (h <= 0) ) {
        return ('Nieprawidłowe dane');
    } else if ( (a>0) && (h>0) ) {
        return (a*h/2);
    }
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(12, 10);
var triangle3Area = getTriangleArea(12, 10);