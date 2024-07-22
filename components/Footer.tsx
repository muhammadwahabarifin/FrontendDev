/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full md:mb-5 pb-10 mb-[100px]' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw] text-[#6495ed]'>
                    Ready to take digital presence your<span className='text-cyan-400'> to the next level?</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:contact@wahabarf.com">
                    <MagicButton
                        title='Lets Get In Touch'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='text-sm md:text-base md:font-normal font-light text-white'>
                    Copyright © 2024 WahabArf_
                </p>

                <div className='flex items-center md:gap-3 gap-6 mt-4'>
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img
                                src={info.img}
                                alt="icons"
                                width={20}
                                height={20}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
