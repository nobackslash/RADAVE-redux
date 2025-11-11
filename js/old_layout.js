async function loadLayout() {
  // poupando tempo
  try {
    const header = await fetch("/../header.html").then((res) => res.text());
    const footer = await fetch("/../footer.html").then((res) => res.text());
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
  } catch (error) {
    console.error("Error loading layout components:", error);
    const header = await fetch("RADAVE-redux/header.html").then((res) =>
      res.text()
    );
    const footer = await fetch("RADAVE-redux/footer.html").then((res) =>
      res.text()
    );
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
  }
}

window.addEventListener("DOMContentLoaded", loadLayout);
