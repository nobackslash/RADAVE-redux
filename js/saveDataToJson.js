const p_name = sessionStorage.getItem("p_name") || "N/A";
const p_place = sessionStorage.getItem("p_place") || "N/A";
const p_birth = sessionStorage.getItem("p_birth") || "N/A";
const p_gender = sessionStorage.getItem("p_gender") || "N/A";
const p_dtavc = formatDate(sessionStorage.getItem("p_dtavc"));
const p_injure = sessionStorage.getItem("p_injure") || "N/A";
const q1 = sessionStorage.getItem("q1") || "N/A";
const q2 = sessionStorage.getItem("q2") || "N/A";
const q3 = sessionStorage.getItem("q3") || "N/A";
const q4 = sessionStorage.getItem("q4") || "N/A";
const q5 = sessionStorage.getItem("q5") || "N/A";
const q6 = sessionStorage.getItem("q6") || "N/A";
const q7 = sessionStorage.getItem("q7") || "N/A";
const q8 = sessionStorage.getItem("q8") || "N/A";
const q9 = sessionStorage.getItem("q9") || "N/A";
const q10 = sessionStorage.getItem("q10") || "N/A";
const q11 = sessionStorage.getItem("q11") || "N/A";
const q12 = sessionStorage.getItem("q12") || "N/A";
const q13 = sessionStorage.getItem("q13") || "N/A";

// agora crie o arquivo debug_data.json e adicione esta entrada
const patientData = {
  name: p_name,
  birthdate: p_birth,
  gender: p_gender,
  avc_date: p_dtavc,
  lesion_location: p_injure,
  reference_unit: p_place,
  questions: {
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,
    q10: q10,
    q11: q11,
    q12: q12,
    q13: q13,
  },
};

const jsonString = JSON.stringify(patientData, null, 2);
