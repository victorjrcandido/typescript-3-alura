export function domInjector(seletor) {
    return function (target, propKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propKey, { get: getter });
    };
}
