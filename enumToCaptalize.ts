export const enumToCaptalize = (val: string) => {
    if (!val) {
        return val;
    }
    return val.split('_').map(v => v[0].toLocaleLowerCase() + v.slice(1, v.length)).join(' ')
}