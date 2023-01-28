import User from '@/components/User'
import React from 'react'
import HomeStyle from '../styles/home.module.scss'
import Image from 'next/image'
import CardImg from '../public/card1.png'
import IconCam from '../public/iconCamer.png'
import IconArrow from '../public/iconArrow.png'
import CardImg2 from '../public/card2.jpg'

function Home() {
    return (
        <div>
            <User />
            <div className={HomeStyle.home}>
                <div className={HomeStyle.nav}>
                    <div>
                        <ul className='flex gap-16 text-lg text-white px-12 uppercase'>
                            <li><a href='#' >Главная</a></li>
                            <li><a href='#' > Статьи</a></li>
                            <li><a href='#' >Обо мне</a></li>
                            <li><a href='#' >Реклама</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-6  items-center text-white uppercase'>
                        <a href='#'>Профиль</a>
                        <input className='px-6 py-6 w-60 bg-slate-800 focus:outline-none' type="text" placeholder='Поиск по блогу' />
                    </div>
                </div>
                <div className={HomeStyle.home__item}>
                    <div className={HomeStyle.home__card}>
                        <Image src={CardImg} alt='/' />
                        <p className={HomeStyle.card__title}>Отдыхаю на природе</p>
                        <p className={HomeStyle.card__text}>21.09.2020</p>
                    </div>
                    <div className={HomeStyle.home__card}>
                        <Image src={CardImg} alt='/' />
                        <p className={HomeStyle.card__title}>Отдыхаю на природе</p>
                        <p className={HomeStyle.card__text}>21.09.2020</p>
                    </div>
                    <div className={HomeStyle.home__card}>
                        <Image src={CardImg} alt='/' />
                        <p className={HomeStyle.card__title}>Отдыхаю на природе</p>
                        <p className={HomeStyle.card__text}>21.09.2020</p>
                    </div>
                    <div className={HomeStyle.home__card}>
                        <Image src={CardImg} alt='/' />
                        <p className={HomeStyle.card__title}>Отдыхаю на природе</p>
                        <p className={HomeStyle.card__text}>21.09.2020</p>
                    </div>
                    <div className={HomeStyle.home__card}>
                        <Image src={CardImg} alt='/' />
                        <p className={HomeStyle.card__title}>Отдыхаю на природе</p>
                        <p className={HomeStyle.card__text}>21.09.2020</p>
                    </div>
                </div>
                <div className={HomeStyle.home__input}>
                    <input className={HomeStyle.home__inp} type='text' placeholder='Напишите что-нибудь' />
                    <a href='#'><Image className={HomeStyle.iconCam} src={IconCam} alt='' /></a>
                    <a href='#'><Image className={HomeStyle.iconArrow} src={IconArrow} alt='/' /></a>
                </div>
                <div className={HomeStyle.block__text}>
                    <div className={HomeStyle.text__item}>
                        <h5 className={HomeStyle.block__title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                        </h5>
                        <p>21.06.2020</p>
                    </div>
                    <div className={HomeStyle.block__cards}>
                        <div className={HomeStyle.block__card}>
                            <div className={HomeStyle.card__img}>
                                <Image src={CardImg2} alt='/' />
                            </div>
                            <div className={HomeStyle.card__title}>
                                <h3>Как писать код быстро и безболезненно?</h3>
                                <p className={HomeStyle.card__desc}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                                </p>
                                <div className={HomeStyle.card__footer}>
                                    <div className={HomeStyle.card__data}>
                                        <p>21.06.2020</p>
                                        <p>создание сайтов</p>
                                    </div>
                                    <a href='#'>читать</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home