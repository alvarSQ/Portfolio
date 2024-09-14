export interface IQuestion {
    id: number,
    title: string,
    answer: string[],
    resultSurvey: string[],
    freeAnswer?: string,
    typeCheck: 'free' | 'checkbox' | 'radio',
    isTextArea: boolean,
    isActiv: boolean,
    isAnswer: boolean
}

export interface IJson {
    title?: string,
    answer?: string[]
}