import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', {
    state: () => ({
        questions: [
            {
                id: 1,
                title: 'Для чего вы используете Findmykids?',
                answer:
                    [
                        'Присматриваю за своим ребенком',
                        'Присматриваю за внуками/племянниками',
                        'Присматриваю за младшим братом/сестрой'
                    ],
                resultSurvey: [],
                freeAnswer: '',
                typeCheck: 'radio',
                isChecked: false,
                isTextArea: true,
                isActiv: true,
                isAnswer: false
            },
            {
                id: 2,
                title: 'Почему вы используете веб-версию Findmykids?',
                answer:
                    [
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
        isJson: true,
        jsonAnswer: [],
        json: {},
        fileOut: [],
        onePage:
        {
            title: "Веб-версия Findmykids",
            description: 'Мы заметили, что вы активно пользуетесь веб-версией Findmykids помимо приложения на телефоне. Расскажите, что вам в ней нравится и как мы можем ее улучшить.Это поможет сделать Findmykids удобнее для вас.'
        },
    }),
    // persist: {
    //     paths: ['questions'],
    // },
    getters: {
        getJson: state => state.json,
        getQuestions: state => state.questions,
        getQuestionById: state => (id: number) => state.questions.find(el => el.id === id),
        getOnePage: state => state.onePage,
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
        }

    },
    actions: {        
        handleFileUpload(e: any) {
            const fr: FileReader | null = new FileReader();
            fr.readAsText(e.target.files[0])
            fr.onload = () => {
                this.questions = JSON.parse(fr.result)
            }
        },
        triggerActiv(id: number) {
            this.questions.forEach(el => el.isActiv = false)
            const q = this.getQuestionById(id)
            return q.isActiv = true
        },
        validId() {
            let i = 0
            this.getQuestions.forEach(el => {
                i += 1
                el.id = i
            })
        },

    },

})

