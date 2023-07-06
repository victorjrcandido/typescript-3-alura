export function domInjector(seletor) {
    return function (target, propKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                const elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propKey, { get: getter });
    };
}
