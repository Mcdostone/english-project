class AppStore {
  constructor() {
    this.state = {
      username: 'guest',
      questions: [],
      current: 0,
    };
  }

  addQuestion(question) {
    this.state.questions.push(question);
  }

  hasQuestions() {
    return this.state.questions.length !== 0;
  }

  currentQuestion() {
    return this.state.questions[this.state.current];
  }

  reset() {
    this.state.username = 'guest';
    this.state.questions = [];
    this.state.current = 0;
  }
}

export default new AppStore();
