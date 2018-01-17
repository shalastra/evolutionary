function Gene (palette) {
    if (palette) this.palette = palette;
    this.cost = 9999;
}

Gene.prototype.palette = [];

Gene.prototype.random = function (length) {
    this.palette = [];
    while (length--) {
        var color = randomColor();
        this.palette.push(new Color(color.r, color.g, color.b));
    }
};

Gene.prototype.mutate = function (chance) {
    if (Math.random() > chance) return;

    var index = Math.floor(Math.random() * this.palette.length);
    var upOrDown = Math.random() <= 0.5 ? -15 : 15;

    var currentColor = this.palette[index];
    var newColor = new Color((currentColor.red + upOrDown) % 255,
        (currentColor.green + upOrDown) % 255,
        (currentColor.blue + upOrDown) % 255);

    this.palette[index] = newColor;
};

Gene.prototype.mate = function (gene) {
    var pivot = Math.round(this.palette.length / 2) - 1;

    var child1 = this.palette.slice(0, pivot).concat(gene.palette.slice(pivot));
    var child2 = gene.palette.slice(0, pivot).concat(this.palette.slice(pivot));

    return [new Gene(child1), new Gene(child2)];
};

Gene.prototype.calcCost = function (compareTo) {
    var total = 0;
    for (i = 0; i < this.palette.length; i++) {
        var thisColor = this.palette[i].getRgb();
        var compared = compareTo[i].getRgb();

        var diffRed = thisColor.red - compared.red;
        var diffGreen = thisColor.green - compared.green;
        var diffBlue = thisColor.blue - compared.blue;

        var diff = diffRed + diffGreen + diffBlue;
        total += Math.abs(diff);
    }
    this.cost = total;
};

function randomColor () {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return {
        r: r,
        g: g,
        b: b
    };
}