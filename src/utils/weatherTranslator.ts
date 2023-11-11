export const weatherTranslator = (weather:string):number => {
    return Math.ceil((parseInt(weather) - 32) * (5/9));
}