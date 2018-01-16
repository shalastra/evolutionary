(function () {
    var button = document.getElementById("gen-btn");

    var rainbow = [new Color(148, 0, 211),
        new Color(75, 0, 130),
        new Color(0, 0, 255),
        new Color(0, 255, 0),
        new Color(255, 255, 0),
        new Color(255, 127, 0),
        new Color(255, 0, 0)];

    button.addEventListener("click", function () {
        var population = new Population(rainbow, 10);
        population.generation();

    }, false);
})()