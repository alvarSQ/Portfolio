import { IQuestion } from '@/modules/interfaces/interfaces.ts'

export const questionsDefault = [
    {
        id: 1,
        title: '',
        answer: [],
        resultSurvey: [],
        typeCheck: 'radio',
        isActiv: true,
        isAnswer: false
    }] as IQuestion[]

export const questionsTest = [
    {
        id: 1,
        title: 'Для чего вы используете Findmykids?',
        answer: [
            {
                name: 'Присматриваю за своим ребенком',
                isFree: false
            },
            {
                name: 'Присматриваю за внуками/племянниками',
                isFree: false
            },
            {
                name: 'Присматриваю за младшим братом/сестрой',
                isFree: false
            },
            {
                name: '',
                isFree: true
            }
        ],
        resultSurvey: [],
        typeCheck: 'radio',
        isTextArea: true,
        isActiv: true,
        isAnswer: false
    },
    {
        id: 2,
        title: 'Почему вы используете веб-версию Findmykids?',
        answer: [
            {
                name: 'Удобнее смотреть с компьютера',
                isFree: false
            },
            {
                name: 'Телефон не всегда под рукой',
                isFree: false
            },
            {
                name: '',
                isFree: true
            }
        ],
        resultSurvey: [],
        typeCheck: 'checkbox',
        isActiv: false,
        isAnswer: false
    },
    {
        id: 3,
        title: 'Если бы вы могли внести любое изменение в Findmykids, что бы это было?',
        answer: [
            {
                name: '',
                isFree: true
            }
        ],
        resultSurvey: [],
        typeCheck: 'radio',
        isActiv: false,
        isAnswer: false
    }
] as IQuestion[]

export const firstPageDefault = {
    title: '',
    description: ''
}

export const firstPageTest = {
    title: 'Веб-версия Findmykids',
    description: 'Мы заметили, что вы активно пользуетесь веб-версией Findmykids помимо приложения на телефоне. Расскажите, что вам в ней нравится и как мы можем ее улучшить. Это поможет сделать Findmykids удобнее для вас.'
}