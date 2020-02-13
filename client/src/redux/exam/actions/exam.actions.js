import ExamActionType from "./exam.types";

export const getCSSExam = (cssexam) => ({
    type: ExamActionType.GET_CSSEXAM,
    payload: cssquestions
});

export const listCssQuestions = () => ({
    type: ExamActionType.LIST_CSSQUESTIONS,

});