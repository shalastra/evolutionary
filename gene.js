function Gene (palette) {
    if (palette) this.palette = palette;
    this.cost = 9999;
}

Gene.prototype.palette = [];

Gene.prototype.random = function (length) {
    while (length--) {
        var color = randomColor();
        this.palette.push(new Color(color.r, color.g, color.b));
    }
};

Gene.prototype.mutate = function (chance) {
    if (Math.random() > chance) return;

    var index = Math.floor(Math.random() * this.palette.length);
    var upOrDown = Math.random() <= 0.5 ? -1 : 1;

    var currentColor = this.palette[index];
    var newColor = new Color(currentColor.red + upOrDown,
        currentColor.green + upOrDown,
        currentColor.blue + upOrDown);

    this.palette[index] = newColor;
};

Gene.prototype.mate = function (gene) {
    var pivot = Math.round(this.palette.length / 2) - 1;

    var child1 = this.palette.slice(0, pivot) + gene.palette.slice(pivot);
    var child2 = gene.palette.slice(0, pivot) + this.palette.slice(pivot);

    return [new Gene(child1), new Gene(child2)];
};

Gene.prototype.calcCost = function (compareTo) {
    var total = 0;
    for (i = 0; i < this.palette.length; i++) {
        total += (this.palette.charCodeAt(i) - compareTo.charCodeAt(i)) * (this.palette.charCodeAt(i) - compareTo.charCodeAt(i));
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