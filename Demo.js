var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Square.prototype.isSquare = function () {
        return this.length == this.width;
    };
    return Square;
}());
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube(length, width, height) {
        var _this = _super.call(this, length, width) || this;
        _this.height = height;
        return _this;
    }
    Cube.prototype.volume = function () {
        return this.length * this.width * this.height;
    };
    return Cube;
}(Square));
// for (var i = 1; i <= 10; i++)
// {
//     console.log("I love TypeScript!");
// }
var tile = new Square(2, 2);
var box = new Cube(3, 3, 3);
console.log(tile.perimeter());
console.log(tile.area());
console.log(box.volume());
