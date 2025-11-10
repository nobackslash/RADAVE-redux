document.addEventListener('DOMContentLoaded', function () {
  const dataContainer = document.getElementById('data');
  const patientData = JSON.parse(localStorage.getItem('patientData') || '[]');

  if (patientData.length === 0) {
    dataContainer.innerHTML = '<p>Nenhum dado de paciente encontrado.</p>';
    return;
  }

  // Mostrar apenas o último paciente cadastrado
  const lastPatient = patientData[patientData.length - 1];

  // O innerHTML permite editar o conteúdo dentro da tag Section com a id data, então seria tipo:
  // <section id="data"> {CONTEUDO} </section>
  // Ai se for necessário podemos fazer um loop para pegar os 10 primeiros pacientes e depois adicioner algum sistema de paginação para pacientes antigos.
  // Assinado: G

  dataContainer.innerHTML = `
    <div class="entry">
      <details>
        <summary>
          <section class="entry-patient-name">
            <p>${lastPatient.name}</p>
          </section>
          <section class="entry-patient-subtitle">
            <p>Unidade: ${lastPatient.unit} | Data do teste: ${new Date().toLocaleDateString()}</p>
          </section>
        </summary>
        <article class="entry-patient-data">
          <p>Nome completo: ${lastPatient.name}</p>
          <p>Idade: ${lastPatient.age}</p>
          <p>Gênero: ${lastPatient.gender}</p>
          <p>Data do AVC: ${lastPatient.avc_date}</p>
          <p>Local da lesão: ${lastPatient.local_wound}</p>
          <p>Unidade de referência: ${lastPatient.unit}</p>
        </article>
        <article class="entry-patient-quiz"></article>
      </details>
    </div>
  `;
});
