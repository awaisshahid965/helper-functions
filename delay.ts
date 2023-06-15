export const delay = (time: number) => {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            resolve(0)
        }, time)
    })
}