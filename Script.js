const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPergunta = document.querySelector(".caixa-Pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-Resultados");
const textoResultados = document.querySelector(".texto-Resultados");

const perguntas=[
    {
        enunciado:"Carla está na aula de história e sua professora a fez a seguinte pergunta, em que ano o Brsil foi descoberto?",
            alternativas: [
                {
                    texto: "Em 1500",
                    afirmacao:"afirmação",
                }
               
                
            ]

    },

    {
        enunciado:"A professora te fez a pergunta que garante 5 pontos na sua média, qual o primeiro governante do Brasil?",
            alternativas: [
                {
                    texto:  "Tomé de Souza.",
                    afirmacao:"afirmação",
                }
              
             

            ]
    },
    {

        enunciado:"Muito bem você é bom nisso, saberia responder também qual a duração da guerra dos farrapos? ",
             alternativas: [
                {
                    texto: "De 1835 a 1845.",
                    afirmacao:"afirmação",
                }
               
               
        ]

    },
    {
        enunciado:"E por fim a pergunta do milhão, qual presidente do brasil morreu antes de assumir seu mandato?.",
            alternativas: [
                {
                    texto:"Tancredo De Almeida Neves.",
                    afirmacao:"afirmação",
                }
            
               
            ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++
            mostraPergunta();
    });
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

mostraPergunta();

