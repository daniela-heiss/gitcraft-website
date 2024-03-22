function createDivs() {
        const container = document.getElementById("features-main-container");
        let numberOfIterations = 6;

        const divstart = document.createElement("div");
        divstart.id = "graphstart";
        divstart.style.gridArea = "graph1";

        container.appendChild(divstart);

        const divline = document.createElement("div");
        divline.id = "line";
        divline.style.gridArea = "graph1";

        container.appendChild(divline);


        for (let i = 1; i < numberOfIterations;) {
                if (i > 1) {
                        const div1 = document.createElement("div");
                        div1.className = "line";
                        div1.style.gridArea = "graph" + i;
                        container.appendChild(div1);
                };
                i++;

                const div2 = document.createElement("div");
                div2.className = "line2";
                div2.style.gridArea = "branch" + i;

                const div3 = document.createElement("div");
                div3.className = "dot2";
                div3.style.gridArea = "branch" + i;

                const div4 = document.createElement("div");
                div4.className = "dot";
                div4.style.gridArea = "graph" + i;


                container.appendChild(div2);
                container.appendChild(div3);
                container.appendChild(div4);
        }

}