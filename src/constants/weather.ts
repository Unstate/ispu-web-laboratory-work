export interface IWeather {
    city:string
    weather: number[]
}

export const weather:IWeather[] = [
    {
        city: 'Санкт-Петебург',
        weather: [42.8, 23.9, 41.9, 43.7]
    },
    {
        city: 'Париж',
        weather: [56.3, 40.1, 52.7, 66.2]
    },
    {
        city: 'Абу-Даби',
        weather: [82.4, 66.2, 80.6, 92.3]
    },
    {
        city: 'Сидней',
        weather: [42.8, 23.9, 41.9, 43.7]
    }
]