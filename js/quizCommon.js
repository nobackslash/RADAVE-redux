// Funções compartilhadas por todas as páginas do quiz
function formatDate(dateString) {
  if (!dateString) return "N/A";
  const dateParts = dateString.split("-");
  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}

function populateUserSummary() {
  const p_name = sessionStorage.getItem("p_name") || "N/A";
  const p_age = sessionStorage.getItem("p_age") || "N/A";
  const p_dtavc = formatDate(sessionStorage.getItem("p_dtavc"));
  const p_gender = sessionStorage.getItem("p_gender") || "N/A";

  document.getElementById("summary-name").innerHTML = p_name;
  document.getElementById("summary-age").innerHTML = p_age;
  document.getElementById("summary-date-avc").innerHTML = p_dtavc;
  document.getElementById("summary-gender").innerHTML = p_gender;
}

function saveAnswers(pageQuestions) {
  // Pega os dados atuais do localStorage
  let allData = JSON.parse(localStorage.getItem('patientData') || '[]');
  const lastPatient = allData[allData.length - 1];
  
  // Atualiza as respostas para esta página
  pageQuestions.forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
        // Também salva no sessionStorage para cálculo de risco
        const value = selected.value;
        lastPatient.questions[q] = parseInt(value);
        sessionStorage.setItem(q, value);
    }
  });
  
  // Salva de volta no localStorage
  localStorage.setItem('patientData', JSON.stringify(allData));
}

document.addEventListener("DOMContentLoaded", function() {
  populateUserSummary();
});
