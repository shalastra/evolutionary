(function () {
    var button = document.getElementById("gen-btn");

    var rainbow = [new Color(148, 0, 211),
        new Color(75, 0, 130),
        new Color(0, 0, 255),
        new Color(0, 255, 0),
        new Color(255, 255, 0),
        new Color(255, 127, 0),
        new Color(255, 0, 0)];

    var row = document.createElement("div");
    row.className += "row";

    for (var j = 0; j < rainbow.length; j++) {
        var color = rainbow[j];

        var col = document.createElement("div");
        col.className += "col";

        col.style.background = color.getColor();
        row.appendChild(col);
    }

    document.getElementById("rainbow").appendChild(row);

    button.addEventListener("click", function () {
        var population = new Population(rainbow, 15);
        population.generation();
    }, {once: true});
})()