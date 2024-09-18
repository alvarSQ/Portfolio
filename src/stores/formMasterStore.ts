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
                typeCheck: 'radio',
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
                typeCheck: 'radio',
                isActiv: true,
                isAnswer: false
            }] as IQuestion[],
        questionsTest: [
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
    // persist: {
    //     storage: localStorage,
    //     pick: ['questions', 'firstPage'],
    // },
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

        validAnswer(state) {
            let res = true
            state.questions.forEach(el => {
                let i = 0
                res = true
                if (el.title) {
                    el.answer.forEach(el => {
                        if ((el.name === '' && el.isFree) || (el.name !== '' && !el.isFree)) {
                            i++
                        }
                    });

                    if (i === el.answer.length && i > 0) {
                        res = false
                    }
                }
            })
            return res
        },

        validFirstPage(state) {
            const fP = [state.firstPage]
            return fP.some(el => el.title !== '' && el.description !== '')
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
        defaultQeuestions() {
            this.questions = this.getQuestionsDefault
            this.firstPage = this.getFirstPageDefault
            // localStorage.clear()
        },
        testQeuestions() {
            this.questions = Object.assign(this.questions, this.getQuestionsTest)
            this.firstPage = Object.assign(this.firstPage, this.getFirstPageTest)
        }


    },

})

