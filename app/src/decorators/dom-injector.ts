export function domInjector(seletor: string) {
    return function (target: any, propKey: string) {

        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        }
        Object.defineProperty(target, propKey, { get: getter })
    }
}