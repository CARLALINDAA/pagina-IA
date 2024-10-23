const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Em que ano ocorreu a 1 guerra mundial",
        alternativas: [
            {
                texto:"1914!",
                afirmacao:"afirmação"
            },
            {
                texto:"1920!",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Quem foi o primeiro presidente do Brasil?",
        alternativas: [
            {
                texto:"Marechal Deodoro Da Fonseca.",
                afirmacao:"afirmação"
            },
            {
                texto:"Fernando Collor De Melo.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Qual foi o presidente do Brasil que morreu antes de assumir o seu mandato ?.",
        alternativas: [
            {
                texto:"Tancredo De Almeida Neves.",
                afirmacao:"afirmação"
            },
            {
                texto:"Joaquim José Da Silva Xavier (Tiradentes).",
                afirmacao:"afirmação."
                

            }
        
    
        ]


    },
    {
        enunciado: "Quantas republicas teve o Brasil?",
        alternativas: [
            {
                texto:"cinco.",
                afirmacao:"afirmação"
            },
            {
                texto:"sete.",
                afirmacao:"afirmação"
                

            }
        
        
        ]

    },
    {
        enunciado: "O Brasil em seus dentre os vários marcos da sua história tem um dos mais importantes que é sobre a presidência deste país, as perguntas trazem curiosidades e descobertas sobre essa história a você leitor .",
        

    },

];

let atual = 0;
let perguntaAtual;
let hitoriaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        motraReultados();
        return;
    }[]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => repostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function repostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
    const afirmacoes = opcaoSelecionada.afirmacoes
}

function mostraResultados(){
    caixaPerguntas.textContent = "em 2019...";
    textoResultados.textContent = hitoriaFinal += afirmacoes + "";
    caixaAlternativas.textContent = "";

}
mostraPergunta();