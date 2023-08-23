var Square = /** @class */ (function () {
    function Square(length, width) {
        this.length = length;
        this.width = width;
    }
    Square.prototype.perimeter = function () {
        return (2 * this.length) + (2 * this.width);
    };
    Square.prototype.area = function () {
        return this.length * this.width;
    };
    return Square;
}());
// for (var i = 1; i <= 10; i++)
// {
//     console.log("I love TypeScript!");
// }
var carpet = new Square(4, 4);
