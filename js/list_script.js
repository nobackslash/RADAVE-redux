async function getModelData() {
  try {
    // pega o json, transforma em um array
    const response = await fetch("debug_data.json");
    const data = await response.json;

    // agora crie a instancia do html
    const container = document.getElementById("data");
    container.innerHTML = "";

    // agora para cada item do json, crie um elemento html
    data.forEach((item) => {
      div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = "";
    });
  } catch (error) {}
}
