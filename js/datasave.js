import * as XLSX from "https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs";

// Exportar dados coletados em sessionStorage para XLSX
document.getElementById("save-data-btn").addEventListener("click", () => {
    // Coletar dados do sessionStorage (usando as chaves corretas, elas estavam apontando para as chaves erradas)
    const patientName = sessionStorage.getItem("p_name");
    const patientAge = sessionStorage.getItem("p_age");
    const patientAvcDate = sessionStorage.getItem("p_dtavc");
    const patientGender = sessionStorage.getItem("p_gender");
    const patientWoundLocal = sessionStorage.getItem("p_injure");
    const unit = sessionStorage.getItem("p_place");

    // Coletar respostas do questionário (perguntas de 1 a 13)
    let quizAnswers = [];
    for (let i = 1; i <= 13; i++) {
        //lembrar de aumentar o número desse for pra quantidade de perguntas
        const resposta = sessionStorage.getItem("q" + i) || "Não respondida";

        // Respostars para a exportação
        // Não = 0
        // Sim = 1
        // Não sei = 2
        // Não respondida = 3

        switch (resposta) {
            case "1":
                quizAnswers.push(1);
                break;
            case "0":
                quizAnswers.push(0);
                break;
            // case "-1":
            //     quizAnswers.push(2);
            //     break;
            default:
                quizAnswers.push(3);
        }
    }
    // pega o dia de hoje
    const today = new Date().toLocaleDateString("pt-BR");

    // Criar um objeto com os dados coletados
    const patientData = {
        Nome: patientName,
        Idade: patientAge,
        "Data do AVC": patientAvcDate,
        Gênero: patientGender,
        "Local da lesão": patientWoundLocal,
        "Local do atendimento": unit,
        "Data do registro": today,
    };

    //dicionario do quiz
    const quizDict = {
        Q1: "Apresenta dificuldade de manter-se acordado?",
        Q2: "Apresenta histórico de dificuldade de deglutição?",
        Q3: "Apresenta dificuldade de manter-se sentado com apoio e com a cabeça reta?",
        Q4: "Apresenta alteração na voz?",
        Q5: "Apresenta dificuldade na fala e/ou linguagem?",
        Q6: "Apresenta assimetria facial?",
        Q7: "Apresenta dificuldade de movimentar lábios e língua?",
        Q8: "Apresenta dificuldade de engolir e gerenciar a deglutição de saliva/secreções espontaneamente ou sob comando?",
        Q9: "Demora muito para engolir, não engole, necessita de orientações verbais constantes para a deglutição.",
        Q10: "Apresenta escape de alguma consistência alimentar para fora da cavidade oral?",
        Q11: "Engoliu mais de 3 vezes a porção colocada na boca?",
        Q12: "Apresenta pigarros, tosses e/ou engasgos durante a refeição?",
        Q13: "Apresenta resíduo de alguma consistência alimentar na cavidade oral depois que engole?",
    };
    const wb = XLSX.utils.book_new(); // cria a planilha principal

    const wsPatientInfo = XLSX.utils.json_to_sheet([patientData]); // cria a subplanilha de informações do paciente
    XLSX.utils.book_append_sheet(wb, wsPatientInfo, "Informações do Paciente"); // adiciona o map da linha 39 direto na planilha

    const quizData = quizAnswers.map((answer, index) => ({
        Número: `Q${index + 1}`,
        Pergunta: quizDict[`Q${index + 1}`] || "???", // lógica estranha do javascript -P
        Resposta:
            answer === 0
                ? "Não"
                : answer === 1
                ? "Sim"
                : answer === 2
                ? "Não sei"
                : "Não respondida",
    }));
    const wsQuiz = XLSX.utils.json_to_sheet(quizData);
    XLSX.utils.book_append_sheet(wb, wsQuiz, "Respostas do Questionário");
    XLSX.writeFile(wb, `registro_${patientName}${today}.xlsx`);

    // Logar os dados para verificar se estão corretos antes de enviar
    console.log(
        "Dados a serem exportados (XLSX):",
        JSON.stringify(patientData)
    );
});
