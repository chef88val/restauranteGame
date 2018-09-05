export class ColorLevel {
    private r: Number;
    private g: Number;
    private b: Number;
    public div: Number;
    public incr: Number;
    private rgb: Number;

    constructor(_div: Number) {
        this.r = 0;
        this.g = 255;
        this.b = 0;
        this.rgb = 255;
        this.div = _div;
        this.incr = Number(this.rgb) / Number(_div);
    }

    incremento() { }
    decremento() { }
    getColor(i: Number): String {
        return `rgb(
            ${Math.round((Number(this.incr) * Number(i)))} ,
            ${Math.round(Number(this.rgb) - (Number(this.incr) * Number(i)))} ,
             ${0} )`;
    }
}
