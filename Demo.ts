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

}



// for (var i = 1; i <= 10; i++)
// {
//     console.log("I love TypeScript!");
// }

let carpet = new Square(4,4);
