const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas=[
    {
        enunciado:"Carla está na aula de história e sua professora a fez a seguinte pergunta, em que ano o Brsil foi descoberto?",
            alternativas: [
                "Em 1500",
                "Em 1505",
            ]

    },

    {
        enunciado:"A professora te fez a pergunta que garante 5 pontos na sua média, qual o primeiro governante do Brasil?",
            alternativas: [
                "Tomé de Souza.",
                "Duarte da Costa.",

            ]
    },
    {

        enunciado:"Muito bem você é bom nisso, saberia responder também qual a duração da guerra dos farrapos? ",
             alternativas: [
                "De 1835 a 1845.",
                "De 1845 a 1851.",

        ]

    },
    {
        enunciado:"E por fim a pergunta do milhão, qual presidente do brasil morreu antes de assumir seu mandato?.",
            alternativas: [
                "Tancredo De Almeida Neves.",
                "Joaquim José Da Silva Xavier (Tiradentes).",
            ]
    }
]