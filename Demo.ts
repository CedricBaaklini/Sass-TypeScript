class Square
{
    length: number;
    width: number;

    constructor(length: number, width: number)
    {
        this.length = length;
        this.width = width;
    }
    perimeter(): number
    {
        return (2 * this.length) + (2 * this.width);
    }

    area(): number
    {
        return this.length * this.width;
    }

    isSquare(): Boolean
    {
        return this.length == this.width;
    }


}

class Cube extends Square
{
    height: number;
    constructor(length: number, width: number, height: number)
    {
        super(length,width);

        this.height = height;
    }

    volume(): number
    {
        return this.length * this.width * this.height;
    }
}



// for (var i = 1; i <= 10; i++)
// {
//     console.log("I love TypeScript!");
// }

let tile = new Square(2,2);

let box = new Cube(3,3,3);

console.log(tile.perimeter());

console.log(tile.area());

console.log(box.volume())
