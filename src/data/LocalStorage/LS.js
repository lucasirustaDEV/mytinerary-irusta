export const LS = {
    getText: (key) => {
        return localStorage.getItem(key)
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key))
    },
    set: (key, value) => {
        JSON.stringify(localStorage.setItem(key, value))
    },
    rm: (key) => {
        localStorage.removeItem(key)
    },
    clear: () => {
        localStorage.clear()
    }
}