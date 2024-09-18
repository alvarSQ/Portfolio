export interface IQuestion {
    id: number,
    title: string,
    answer: IAnswer[],
    resultSurvey: string[],
    typeCheck: 'checkbox' | 'radio',
    isActiv: boolean,
    isAnswer: boolean
}

export interface IJson {
    title?: string,
    answer?: string[]
}
interface IAnswer {
    name: string,
    isFree: boolean
}