type Circle = {
    shape: 'circle';
    radius: number
};

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number
}

const calculateShapeArea = (shape: Circle | Rectangle) => {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    if (shape.shape === 'rectangle') {
        return shape.height * shape.width;
    }
}