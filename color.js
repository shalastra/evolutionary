function Color (red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
}

Color.prototype.getColor = function () {
    return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
};

Color.prototype.getColorInDecimal = function () {
    // return (this.red << 16) + (this.green << 8) + (this.blue);
    return this.red + this.green + this.blue;
};

Color.prototype.getRgb = function () {
    return {
        red: this.red,
        green: this.green,
        blue: this.blue
    };
};