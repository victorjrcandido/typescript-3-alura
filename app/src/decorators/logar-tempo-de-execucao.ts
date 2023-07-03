export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (target: any, propKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            let resultado = (t2 - t1) / divisor
            console.log(`${propKey}, tempo de execução ${resultado.toFixed(1)} ${unidade}`);
            retorno
        }
        return descriptor;
    }
};