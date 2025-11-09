import * as XLSX from "https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs";

document.getElementById("save-data-btn").addEventListener("click", () => {
    // Coletar dados do localStorage
    const patientName = localStorage.getItem("name");
    const patientAge = localStorage.getItem("age");
    const patientAvcDate = localStorage.getItem("dateAvc");
    const patientGender = localStorage.getItem("gender");
    const patientWoundLocal = localStorage.getItem("locallesao");
    const unit = localStorage.getItem("unit");

    // Coletar respostas do questionário (perguntas de 1 a 13)
    let quizAnswers = [];
    for (let i = 1; i <= 13; i++) {
        //lembrar de aumentar o número desse for pra quantidade de perguntas
        const resposta = localStorage.getItem("q" + i) || "Não respondida";

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
            case "-1":
                quizAnswers.push(2);
                break;
            default:
                quizAnswers.push(3);
        }
    }

    // Criar um objeto com os dados coletados
    const patientData = {
        Nome: patientName,
        Idade: patientAge,
        "Data do AVC": patientAvcDate,
        Gênero: patientGender,
        "Local da lesão": patientWoundLocal,
        "Local do atendimento": unit,
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
    XLSX.writeFile(wb, `sintomas_${patientName}.xlsx`);

    // Logar os dados para verificar se estão corretos antes de enviar
    console.log("Dados a serem enviados:", JSON.stringify(patientData));

    //Por algum motivo isso enviava para alguma API, nessa alteração, vamos usar uma library local para converter o json em xlsx. -P
    // Enviar os dados para o Google Sheets usando a URL da API
    // fetch(
    //     "not today spammy people",
    //     {
    //         method: "POST",
    //         mode: "no-cors",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(patientData),
    //     }
    // )
    //     .then(() => {
    //         alert("Dados gravados com sucesso!");

    //         localStorage.clear();

    //         window.location.href = "index.html";
    //     })
    //     .catch((error) => {
    //         console.error("Erro ao gravar os dados:", error);
    //         alert("Erro ao gravar os dados.");
    //     });
});
