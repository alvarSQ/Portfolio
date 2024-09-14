import { defineStore } from 'pinia'
import { IQuestion, IJson } from '@/modules/interfaces/interfaces'

export const useQuestionsStore = defineStore('questions', {
    state: () => ({
        questions: [
            {
            id: 1,
            title: '',
            answer: [],
            resultSurvey: [],
            freeAnswer: '',
            typeCheck: 'radio',
            isTextArea: false,
            isActiv: true,
            isAnswer: false
            }
        ] as IQuestion[],
        questionsDefault: [
            {
                id: 1,
                title: '',
                answer: [],
                resultSurvey: [],
                freeAnswer: '',
                typeCheck: 'radio',
                isTextArea: false,
                isActiv: true,
                isAnswer: false
            }] as IQuestion[],
        questionsTest: [
            {
                id: 1,
                title: 'Для чего вы используете Findmykids?',
                answer: [
                    'Присматриваю за своим ребенком',
                    'Присматриваю за внуками/племянниками',
                    'Присматриваю за младшим братом/сестрой'
                ],
                resultSurvey: [],
                freeAnswer: '',
                typeCheck: 'radio',
                isTextArea: true,
                isActiv: true,
                isAnswer: false
            },
            {
                id: 2,
                title: 'Почему вы используете веб-версию Findmykids?',
                answer: [
                    'Удобнее смотреть с компьютера',
                    'Телефон не всегда под рукой'
                ],
                resultSurvey: [],
                typeCheck: 'checkbox',
                isTextArea: true,
                isActiv: false,
                isAnswer: false
            },
            {
                id: 3,
                title: 'Если бы вы могли внести любое изменение в Findmykids, что бы это было?',
                answer: [],
                resultSurvey: [],
                typeCheck: 'free',
                isTextArea: true,
                isActiv: false,
                isAnswer: false
            }
        ],
        jsonAnswer: [] as IJson[],
        json: {},
        fileOut: [],
        firstPage: {
            title: '',
            description: ''
        },
        firstPageDefault: {
            title: '',
            description: ''
        },
        firstPageTest:
        {
            title: 'Веб-версия Findmykids',
            description: 'Мы заметили, что вы активно пользуетесь веб-версией Findmykids помимо приложения на телефоне. Расскажите, что вам в ней нравится и как мы можем ее улучшить. Это поможет сделать Findmykids удобнее для вас.'
        }
    }),
    persist: {
        storage: localStorage,
        pick: ['questions', 'firstPage'],
    },
    getters: {
        getJson: state => state.json,
        getQuestions: state => state.questions,
        getQuestionsDefault: state => state.questionsDefault,
        getQuestionsTest: state => state.questionsTest,
        getQuestionById: state => (id: number) => state.questions.find(el => el.id === id),
        getFirstPage: state => state.firstPage,
        getFirstPageDefault: state => state.firstPageDefault,
        getFirstPageTest: state => state.firstPageTest,
        getFileOut: state => state.fileOut,

        getByActiv(state) {
            let st = state.questions
            return st = st.filter(el => el.isActiv === true)
        },
        getByNoActiv(state) {
            let st = state.questions
            return st = st.filter(el => el.isActiv === false)
        },

        validQuestions(state) {
            return state.questions.some(el => el.title === '' || (el.answer[0] === undefined && !el.isTextArea))
        },

        validFirstPage(state) {
            const oP = [state.firstPage]
            return oP.some(el => el.title === '' || (el.description === ''))
        }

    },
    actions: {
        handleFileUpload(e: any) {
            const fr = new FileReader();
            fr.readAsText(e.target.files[0])
            fr.onload = () => {
                this.questions = JSON.parse(fr.result as string)
            }
        },
        triggerActiv(id: number) {
            this.questions.forEach(el => el.isActiv = false)
            const q = this.getQuestionById(id)
            if (q) {
                return q.isActiv = true
            }
            return
        },
        validId() {
            let i = 0
            this.getQuestions.forEach(el => {
                i += 1
                el.id = i
            })
        },
        defaultQeuestions() {
            this.questions = this.getQuestionsDefault
            this.firstPage = this.getFirstPageDefault
            localStorage.clear()
        },
        testQeuestions() {
            this.questions = Object.assign(this.questions, this.getQuestionsTest)
            this.firstPage = Object.assign(this.firstPage, this.getFirstPageTest)
        }


    },

})

