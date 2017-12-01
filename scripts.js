var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(50, -1),
    triangle3Area = getTriangleArea(12, 0);


function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log('Error! One of the parameter is incorrect');
    } else {
        return console.log(a * h / 2);
    }
}

