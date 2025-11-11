// document.addEventListener("DOMContentLoaded", function () {
//   // const form = document.getElementById("patient-form");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const p_name = document.getElementById("p_name").value.trim();
//     const p_birth = document.getElementById("p_birth").value;
//     const p_dtavc = document.getElementById("p_dtavc").value;
//     const p_injure = document.getElementById("p_injure").value;
//     const p_gender = document.getElementById("p_gender").value;
//     const p_place = document.getElementById("p_place").value;

//     // compute age from birthdate
//     let age = null;
//     if (p_birth) {
//       const b = new Date(p_birth);
//       const today = new Date();
//       age = today.getFullYear() - b.getFullYear();
//       const m = today.getMonth() - b.getMonth();
//       if (m < 0 || (m === 0 && today.getDate() < b.getDate())) {
//         age--;
//       }
//     }

//     // save all the session data
//     sessionStorage.setItem("p_name", p_name || "");
//     if (age !== null) sessionStorage.setItem("p_age", String(age));
//     sessionStorage.setItem("p_dtavc", p_dtavc || "");
//     sessionStorage.setItem("p_injure", p_injure || "");
//     sessionStorage.setItem("p_gender", p_gender || "");
//     sessionStorage.setItem("p_place", p_place || "");

//     // save to JSON
//     const patientData = {
//       name: p_name || "",
//       age: age || 0,
//       avc_date: p_dtavc || "",
//       gender: p_gender || "",
//       local_wound: p_injure || "",
//       unit: p_place || "",
//       questions: {
//         q1: 0,
//         q2: 0,
//         q3: 0,
//         q4: 0,
//         q5: 0,
//         q6: 0,
//         q7: 0,
//         q8: 0,
//         q9: 0,
//         q10: 0,
//         q11: 0,
//         q12: 0,
//         q13: 0,
//         q14: 0,
//         q15: 0,
//       },
//     };

//     // get existing data or initialize empty array
//     let allData = JSON.parse(localStorage.getItem("patientData") || "[]");
//     allData.push(patientData);
//     localStorage.setItem("patientData", JSON.stringify(allData));

//     // proceed to quiz 1
//     window.location.href = "../quiz/p1.html";
//   });
// });
