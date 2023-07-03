export function inspect(target, propKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Metodo ${propKey}`);
        console.log(`Parametros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`retorno ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
