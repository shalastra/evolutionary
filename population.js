function Population (goal, size) {
    this.members = [];
    this.goal = goal;
    this.generationNumber = 0;

    while (size--) {
        var gene = new Gene();
        gene.random(this.goal.length);
        this.members.push(gene);
    }
}

Population.prototype.display = function () {
    console.log(this.members);
    for (var i = 0; i < this.members.length; i++) {
        var row = document.createElement("div");
        row.className += "row";
        document.getElementById("generation").textContent = "GENERATION: " + this.generationNumber;

        console.log(this.members[i].palette);
        for (var j = 0; j < this.members[i].palette.length; j++) {
            var color = this.members[i].palette[j];

            var col = document.createElement("div");
            col.className += "col";

            col.style.background = color.getColor();
            row.appendChild(col);
        }

        var col = document.createElement("div");
        col.className += "col";

        col.textContent = "COST: " + this.members[i].cost;
        row.appendChild(col);

        document.getElementById("workspace").appendChild(row);
    }
};

Population.prototype.generation = function () {
    this.display();
};