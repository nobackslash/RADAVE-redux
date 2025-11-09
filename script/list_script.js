async function getModelData() {
  try {
    // get the json, make it an instance
    const response = await fetch("debug_data.json");
    const data = await response.json;

    // now create the instance of the list html element
    const container = document.getElementById("data");
    container.innerHTML = "";

    // now create a separated element for each entry on the bank
    data.forEach((item) => {
      div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = "";
    });
  } catch (error) {}
}
