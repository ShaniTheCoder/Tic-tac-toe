type Question = {
    category: string;
    type: string;
    difficulty: string;
    question:string;
    correct_answer: string;
    incorrect_answers: string[];
}
type ApiResponse = {
    response_code: number;
    results: Question[];
}

const url = "https://opentdb.com/api.php?amount=9&category=9&difficulty=easy&type=multiple";

async function fetchTrivia(): Promise<ApiResponse> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! error code : ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching the trivia question",error);
        throw error;
    }    
}

let ques = document.getElementById("question") as HTMLHeadingElement;
let option_buttons = [
    document.getElementById("option1") as HTMLButtonElement,
    document.getElementById("option2") as HTMLButtonElement,
    document.getElementById("option3") as HTMLButtonElement,
    document.getElementById("option4") as HTMLButtonElement
]
fetchTrivia().then(data => {
    console.log(data);
    ques.innerHTML = data.results[0].question;
    option_buttons[0].innerHTML = data.results[0].correct_answer;
    option_buttons[1].innerHTML = data.results[0].incorrect_answers[0];
    option_buttons[2].innerHTML = data.results[0].incorrect_answers[1];
    option_buttons[3].innerHTML = data.results[0].incorrect_answers[2];
    
})
