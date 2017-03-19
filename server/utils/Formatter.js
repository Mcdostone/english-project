function formatQuestion (question) {
  let answer = {
    answers: []
  }
  answer.question = question.question;
  answer.answers[0] = question.answer1;
  answer.answers[1] = question.answer2;
  answer.answers[2] = question.answer3;
  answer.answers[3] = question.answer4;
  answer.visual = question.visual;
  return answer;
}

exports.formatQuestion = formatQuestion
