import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        isModal: false
    }),
    getters: {},
    actions: {
        trigerModal() {
            this.isModal = !this.isModal
        }
    },

})

