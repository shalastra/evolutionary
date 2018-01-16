(function () {
    var button = document.getElementById("gen-btn");

    this.rainbow = ["#ffffff", "#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];

    var workspace = document.getElementById("workspace");

    function createRow () {
        var row = document.createElement("div");
        row.className += "row";

        var gene = new Gene();
        gene.random(8);

        console.log(gene);

        for (var i = 0; i < 8; i++) {
            var col = document.createElement("div");
            col.className += "col";

            gene.mutate(2);
            var color = gene.palette[i];
            col.style.background = color.getColor();

            row.appendChild(col);
        }

        document.getElementById("workspace").appendChild(row);
    }

    function hextToRgb (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    button.addEventListener("click", function () {
        createRow();
    }, false);
})()