(function () {
    var button = document.getElementById("gen-btn");

    this.rainbow = ["#ffffff", "#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];

    function Color (hexColor) {
        this.hex = hexColor;
        this.red = this.hextToRgb(hexColor).r;
        this.green = this.hextToRgb(hexColor).g;
        this.blue = this.hextToRgb(hexColor).b;
    }

    Color.prototype.hextToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    Color.prototype.getColor = function () {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
    };

    var workspace = document.getElementById("workspace");

    function createRow () {
        var row = document.createElement("div");
        row.className += "row";

        for (var i = 0; i < 8; i++) {
            var col = document.createElement("div");
            col.className += "col";
            var color = new Color(this.rainbow[i]);
            col.style.background=color.getColor();

            var text = document.createTextNode("Generation");

            col.appendChild(text);
            row.appendChild(col);
        }

        document.getElementById("workspace").appendChild(row);
    }

    function createCell () {

    }

    button.addEventListener("click", function () {
        createRow();
    }, false);
})()