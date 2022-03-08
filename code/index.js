const magicString = {
  unanswered: "unanswered",
  rightAnswered: "rightAnswered",
  wrongAnswered: "wrongAnswered",
  green: "green",
  red: "red",
};

class Question {
  constructor(letter, question, answer) {
    this.letter = letter;
    this.question = question;
    this.answer = answer;
    this.answerState = magicString.unanswered;
  }

  getQuestion() {
    return this.question;
  }

  getAnswer() {
    return this.answer;
  }

  getAnswerState() {
    return this.answerState;
  }

  answerQuestion(answer) {
    let isCorrect = null;
    if (answer?.toLowerCase() === this.answer.toLowerCase()) {
      this.answerState = magicString.rightAnswered;
      isCorrect = true;
    } else {
      this.answerState = magicString.wrongAnswered;
      isCorrect = false;
    }
    return isCorrect;
  }
}

const questions = [
  new Question(
    "a",
    "Objeto mágico de waldo que aún no ha sacado ningún 20",
    "Anillo"
  ),
  new Question(
    "b",
    "Palabra coloquial latina pardefinir un tiroteo",
    "Balasera"
  ),
  new Question("c", "No puedo, estoy...", "Chiquito"),
  new Question(
    "d",
    "Western de Tarantino sobre un negro que se encuentra con un cazarrecompensas alemán",
    "Django"
  ),
  new Question("e", "La palabra que mas se escribe al cerrar un if{}", "else"),
  new Question("f", "insulto multipropósito en inglés", "fuck"),
  new Question(
    "g",
    "especie todo poderosa de los actuales regentes de la casa San Nicolás",
    "gato"
  ),
  new Question(
    "h",
    "apellido de la familia de acogidas de Agallas el perro cobarde",
    "Habichuela"
  ),
  new Question("i", "País en forma de bota", "Italia"),
  new Question(
    "j",
    "Piedra preciosa de color verde muy apreciada en japón",
    "Jade"
  ),
  new Question("k", "Lo que cargan los superSayans", "Ki"),
  new Question(
    "l",
    "Adjetivo: que algo está preparado o alguien es inteligente",
    "listo"
  ),
  new Question("m", "Lo que sen interponia entre eren y sus enemigos", "mar"),
  new Question(
    "n",
    "enfermedad que provoca el sueño espontaneo e intermitente",
    "Narcolepsia"
  ),
  new Question(
    "o",
    "apodo cariñoso que JD da a turk en scrubs (ojo las tildes)",
    "osito marrón"
  ),
  new Question(
    "p",
    "orden de mamiferos que englobaba los elefantes, los rinocerontes, hipopotamos...",
    "paquidermos"
  ),
  new Question("q", "pregunta en inglés", "question"),
  new Question(
    "r",
    "utensilio similar a una escoba utilizado para recoger y agrupar hojas",
    "rastrillo"
  ),
  new Question(
    "s",
    "para evitar que la comida 'esté sosa' utilizamos la...",
    "sal"
  ),
  new Question("t", "Apellido de un calvo yonki de la familia", "Toretto"),
  new Question(
    "u",
    "Adjetivo usado para especificar que solo existe uno; El anillo... (ojo las tildes)",
    "Único"
  ),
  new Question(
    "v",
    "Nombre de el personaje ficticio que portaba y popularizó la máscara de anonymous",
    "V"
  ),
  new Question(
    "w",
    "Personaje que había que encontrar en las páginas llenas de caricaturas en un libro de nuestra infancia",
    "Wally"
  ),
  new Question(
    "x",
    "Nombre y apellido del calvo minúsálido de los X-Men",
    "Xals Xavier"
  ),
  new Question(
    "y",
    "Palabra coloquial para definir a un adicto a las sustancias psicotrópicas",
    "Yonki"
  ),
  new Question(
    "z",
    "Profesional del calzado y antiguo presidente español",
    "Zapatero"
  ),
];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const questionsArray = [];

letters.forEach((letter) => {
  let letterQuestions = questions.filter(
    (question) => question.letter === letter
  );
  questionsArray.push(
    letterQuestions[Math.floor(Math.random() * letterQuestions.length)]
  );
});

let currentQuestion = null;

function play() {
  currentQuestion = questionsArray.find(
    (question) => question.letter === letters[0]
  );
}
function submitAnswer(answer) {
  currentQuestion.answerQuestion(answer);
  const buble = document.getElementById(currentQuestion.letter);
  buble.style.backgroundColor = currentQuestion.isCorrect
    ? magicString.green
    : magicString.red;
}
play();
