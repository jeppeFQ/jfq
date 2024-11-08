document.addEventListener("DOMContentLoaded", function() {
  // Create the ToC toggle button
  const tocToggleButton = document.createElement("button");
  tocToggleButton.id = "toc-toggle";
  tocToggleButton.textContent = "☰ ToC"; // Icon and label for the button
  document.body.appendChild(tocToggleButton);

  // Add event listener to toggle ToC visibility
  tocToggleButton.addEventListener("click", function() {
    const toc = document.getElementById("toc");
    if (toc) {
      if (toc.style.display === "block") {
        toc.style.display = "none";
      } else {
        toc.style.display = "block";
      }
    }
  });
});
