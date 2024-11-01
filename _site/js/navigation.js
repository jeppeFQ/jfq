<script>
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll("#project-container > h2"); // Selects each project header
    let currentProject = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            const section = project.nextElementSibling;
            if (i === index) {
                project.style.display = "block";
                if (section) section.style.display = "block";
            } else {
                project.style.display = "none";
                if (section) section.style.display = "none";
            }
        });
    }

    function goNext() {
        if (currentProject < projects.length - 1) {
            currentProject++;
            showProject(currentProject);
        }
    }

    function goPrevious() {
        if (currentProject > 0) {
            currentProject--;
            showProject(currentProject);
        }
    }

    // Add navigation buttons
    const navButtons = document.createElement("div");
    navButtons.innerHTML = `
        <button onclick="goPrevious()">Previous</button>
        <button onclick="goNext()">Next</button>
    `;
    document.body.appendChild(navButtons);

    // Show the first project initially
    showProject(currentProject);
});
</script>
