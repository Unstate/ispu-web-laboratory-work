import { IconType } from 'react-icons';
import {BsCodeSquare, BsBook} from 'react-icons/bs'
import {BiWalk} from 'react-icons/bi'

export interface IHobbies {
    image: IconType;
    description: string;
}

export const hobbies:IHobbies[] = [
    {
        image: BsCodeSquare,
        description: 'Frontend разработка это то, что мне действительно нравится. Так же это мой путь в жизнь!'
    },
    {
        image: BsBook,
        description: 'Чтение книг, а в особенности манги очень помогает мне расслабится и вдохновляет меня',
    },
    {
        image: BiWalk,
        description: 'Ходьба наедине с собой помогает мне разгрузится от всей городской суеты, а так же перезагрузится'
    }
]