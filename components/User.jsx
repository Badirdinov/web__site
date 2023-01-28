import React from 'react'
import UserStyle from '@/styles/user.module.scss'
import Image from 'next/image'
import BgImage from '../public/user1.jpg'
import UserImage from '../public/user.png'
import Insta from '../public/svg/instagram.svg'
import Vk from '../public/svg/vk.svg'
import Pintres from '../public/svg/pintres.svg'

function User() {
    return (
        <div className={UserStyle.user}>
            <div>
                <Image src={BgImage} alt='/' />
                <Image className={UserStyle.user__img} src={UserImage} alt='/' />
            </div>
            <div className={UserStyle.container}>
                <div className={UserStyle.user__info}>
                    <h3>Азизбек Бадирдинов</h3>
                    <p>блог front-end разработчика</p>
                    <div className={UserStyle.user__social}>
                        <Image src={Insta} alt='/' />
                        <Image src={Vk} alt='/' />
                        <Image src={Pintres} alt='/' />
                    </div>
                </div>
                <p className={UserStyle.user__text}>
                    Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2022 года. Работал в нескольких ИТ компаниях и наработал более 1000 часов в создании сайтов различной сложности.
                </p>
                <div className={UserStyle.user__btns}>
                    <button className={UserStyle.user__btnRed}>Мои работы</button>
                    <button className={UserStyle.user__btnBlue}>Мои работы</button>
                </div>
            </div>
        </div>
    )
}

export default User