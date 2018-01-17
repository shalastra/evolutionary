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
    document.getElementById("workspace").innerHTML = "";
    for (var i = 0; i < this.members.length; i++) {
        var member = this.members[i];

        var row = document.createElement("div");
        row.className += "row";
        document.getElementById("generation").textContent = "GENERATION: " + this.generationNumber;

        for (var j = 0; j < member.palette.length; j++) {
            var color = member.palette[j];

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


Population.prototype.sort = function () {
    this.members.sort(function (a, b) {
        return a.cost - b.cost;
    });
};

Population.prototype.generation = function () {
    for (var i = 0; i < this.members.length; i++) {
        this.members[i].calcCost(this.goal);
    }

    this.sort();
    this.display();
    var children = this.members[0].mate(this.members[1]);
    if(Math.random() >= 0.5) {
        this.members.splice(this.members.length - 2, 2, children[0], children[1]);
    } else {
        this.members.splice(this.members.length - 2, 2, children[1], children[0]);
    }

    for (var i = 0; i < this.members.length; i++) {
        this.members[i].mutate(0.5);
        this.members[i].calcCost(this.goal);
        if (_.isEqual(this.members[i].palette, this.goal)) {
            this.sort();
            this.display();
            return true;
        }
    }
    this.generationNumber++;
    var scope = this;
    var timer = setTimeout(function () {
        scope.generation();
    }, 100);
};