const questions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      question: "Which element has the chemical symbol O?",
      options: ["Oxygen", "Gold", "Silver", "Iron"],
      correctAnswer: 0,
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
      correctAnswer: 0,
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1923"],
      correctAnswer: 1,
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Claude Monet",
        "Pablo Picasso",
        "Leonardo da Vinci",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
      correctAnswer: 1,
    },
    {
      question: "Which country is the largest by land area?",
      options: ["Canada", "China", "Russia", "United States"],
      correctAnswer: 2,
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: 2,
    },
    {
      question: "Who was the first person to walk on the moon?",
      options: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Yuri Gagarin",
        "Michael Collins",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      correctAnswer: 2,
    },
    {
      question: "What is the longest river in the world?",
      options: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which language has the most native speakers?",
      options: ["English", "Spanish", "Mandarin", "Hindi"],
      correctAnswer: 2,
    },
    {
      question: "Which vitamin is known as ascorbic acid?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: 2,
    },
    {
      question: "Who is known as the father of computers?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Charles Babbage",
        "Alan Turing",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: 3,
    },
    {
      question: "Which country invented tea?",
      options: ["India", "China", "Japan", "England"],
      correctAnswer: 1,
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Garlic"],
      correctAnswer: 1,
    },
    {
      question: "Which city is known as the Big Apple?",
      options: ["Los Angeles", "Chicago", "New York", "San Francisco"],
      correctAnswer: 2,
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Marie Curie",
        "Alexander Fleming",
        "Louis Pasteur",
        "Gregor Mendel",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the capital of Japan?",
      options: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
      correctAnswer: 1,
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Earth", "Venus", "Mercury", "Mars"],
      correctAnswer: 2,
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: [
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
        "William Shakespeare",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
      correctAnswer: 2,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "South Korea"],
      correctAnswer: 1,
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Molecule", "Cell", "Organism"],
      correctAnswer: 2,
    },
    {
      question: "What is the speed of light?",
      options: [
        "300,000 km/s",
        "150,000 km/s",
        "500,000 km/s",
        "1,000,000 km/s",
      ],
      correctAnswer: 0,
    },
    {
      question: "Who painted the Sistine Chapel ceiling?",
      options: [
        "Raphael",
        "Donatello",
        "Michelangelo",
        "Leonardo da Vinci",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which country has the most natural lakes?",
      options: ["United States", "Canada", "Russia", "Brazil"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest desert in the world?",
      options: [
        "Sahara Desert",
        "Arabian Desert",
        "Gobi Desert",
        "Antarctic Desert",
      ],
      correctAnswer: 3,
    },
    {
      question: 'Who wrote the "Harry Potter" series?',
      options: [
        "J.K. Rowling",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "C.S. Lewis",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Dollar"],
      correctAnswer: 2,
    },
    {
      question: "Which element is said to keep bones strong?",
      options: ["Iron", "Calcium", "Potassium", "Magnesium"],
      correctAnswer: 1,
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "George Washington",
        "John Adams",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      correctAnswer: 3,
    },
    {
      question: "What is the primary ingredient in hummus?",
      options: ["Chickpeas", "Lentils", "Black beans", "Kidney beans"],
      correctAnswer: 0,
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      correctAnswer: 0,
    },
    {
      question: "Which ocean is the largest?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Southern Ocean",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      correctAnswer: 3,
    },
    {
      question: "Which planet is known as the Blue Planet?",
      options: ["Earth", "Neptune", "Uranus", "Saturn"],
      correctAnswer: 0,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correctAnswer: 0,
    },
    {
      question: 'Who is the author of "1984"?',
      options: [
        "Aldous Huxley",
        "George Orwell",
        "Ray Bradbury",
        "Jules Verne",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the largest continent?",
      options: ["Africa", "Asia", "Europe", "North America"],
      correctAnswer: 1,
    },
    {
      question: "Which gas is most abundant in the Earth’s atmosphere?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
      correctAnswer: 2,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const optionElements = document.querySelectorAll(".option");
  const prevQuestionButton = document.getElementById("prev-question");
  const nextQuestionButton = document.getElementById("next-question");
  const scoreElement = document.querySelector(".score");

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].querySelector(".name").textContent =
        currentQuestion.options[i];
    }

    resetOptions();

    prevQuestionButton.disabled = currentQuestionIndex === 0;


    nextQuestionButton.disabled =
      currentQuestionIndex === questions.length - 1;
  }

  function handleOptionClick(event) {
    const selectedIndex = Array.from(
      event.target.parentNode.children
    ).indexOf(event.target);

    const currentQuestion = questions[currentQuestionIndex];

    resetOptions();

    if (selectedIndex === currentQuestion.correctAnswer) {
      event.target.style.border = "3px solid green";
      event.target.nextElementSibling.style.display = "block";
      score++;
    } else {
      event.target.style.border = "3px solid red";
      event.target.nextElementSibling.style.display = "block";

      const correctOption = optionElements[currentQuestion.correctAnswer];
      correctOption.querySelector(".name").style.border = "3px solid green";
      correctOption.querySelector(".cancel i").style.display = "block";
    }

    scoreElement.textContent = score;
  }

  function resetOptions() {
    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].querySelector(".name").style.border = "none";
      optionElements[i].querySelector(".cancel i").style.display = "none";
    }
  }

  for (let i = 0; i < optionElements.length; i++) {
    optionElements[i]
      .querySelector(".name")
      .addEventListener("click", handleOptionClick);
  }

  prevQuestionButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion();
    }
  });

  nextQuestionButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    }
  });

  displayQuestion();