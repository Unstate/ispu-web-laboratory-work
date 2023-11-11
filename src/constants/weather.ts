export interface IWeather {
    city: string;
    autumn: string;
    winter: string;
    spring: string;
    summer: string
}

export const columnNames:string[] = ['Город','Осень','Зима','Весна','Лето']

export const weather:IWeather[] = [
    {
        city: 'Санкт-Петербург', autumn: '42,8', winter: '23,9', spring: '41,9', summer: '43,7',
    },
    {
        city: 'Париж', autumn: '56,3', winter: '40,1', spring: '52,7', summer: '66,2',
    },
    {
        city: 'Абу-Даби', autumn: '82,4', winter: '66,2', spring: '80,6', summer: '92,3',
    },
    {
        city: 'Сидней', autumn: '62,6', winter: '71,6', spring: '64,4', summer: '55,4',
    },
    {
        city: 'Пекин', autumn: '58,1', winter: '26,6', spring: '59', summer: '77,9',
    }
]