import { defineStore } from 'pinia'
import { IQuestion, IJson } from '@/modules/interfaces/interfaces.ts'
import { questionsDefault, questionsTest, firstPageDefault, firstPageTest } from '@/modules/variables/formMaster.ts'


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
        jsonAnswer: [] as IJson[],
        json: {},
        firstPage: {
            title: '',
            description: ''
        }
    }),
    persist: {
        storage: localStorage,
        pick: ['questions', 'firstPage', 'jsonAnswer'],
    },
    getters: {
        getJson: state => state.json,
        getQuestions: state => state.questions,
        getQuestionById: state => (id: number) => state.questions.find(el => el.id === id),
        getFirstPage: state => state.firstPage,
        getDelQuestion: state => (id: number) => state.questions.filter(el => el.id !== id),

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
        delQuestion(id: number) {
            this.questions = JSON.parse(JSON.stringify(this.getDelQuestion(id)))
        },
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
            this.jsonAnswer = []
            this.questions = JSON.parse(JSON.stringify(questionsDefault))
            Object.assign(this.firstPage, firstPageDefault)            
        },
        testQeuestions() {            
            this.questions = JSON.parse(JSON.stringify(questionsTest))
            Object.assign(this.firstPage, firstPageTest)
        }


    },

})

