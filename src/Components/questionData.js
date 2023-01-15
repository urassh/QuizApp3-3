class QuizDataModel {
    constructor(text, buttonsList, correct, point) {
        this.text = text;
        this.buttonsList = buttonsList;
        this.correct = correct;
        this.point = point;
    }
}

const QUESTIONS = [
    new QuizDataModel("1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1問題文です問題文1です", ["1です。", "2です。", "3です。", "4です。"], 1, 2),
    new QuizDataModel("2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2問題文です問題文2です", ["1です。", "2です。", "3です。", "4です。"], 2, 2),
    new QuizDataModel("問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です", ["1です。", "2です。", "3です。", "4です。"], 3, 2),
    new QuizDataModel("問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です", ["1です。", "2です。", "3です。", "4です。"], 4, 2),
    new QuizDataModel("問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です", ["1です。", "2です。", "3です。", "4です。"], 1, 2),
];

export {QUESTIONS};