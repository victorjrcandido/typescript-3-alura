export function domInjector(seletor: string) {
    return function (target: any, propKey: string) {

        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                const elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }
        Object.defineProperty(target, propKey, { get: getter })
    }
}