import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            count: 0,
            theme: '',
            asideCollapse: true,
            headerFixed: false,
            path: '/',
            scrollTop: 0,
        }
    },
    getters: {},
    actions: {
        add() {
            this.count++
        },
        setTheme(val: string) {
            this.theme = val
        },
        setAsideCollapse(val: boolean) {
            this.asideCollapse = val
        },
        setHeaderFixed(val: boolean) {
            this.headerFixed = val
        },
        setPath(val: string) {
            this.path = val
        },
        setScrollTop(val: number) {
            this.scrollTop = val
        }
    }
})