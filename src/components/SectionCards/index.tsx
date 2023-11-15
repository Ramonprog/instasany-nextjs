'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Mockup from '/public/mockup-main.png'
import Card01 from '/public/image-01.png'
import Card02 from '/public/image-02.png'
import Card03 from '/public/image-03.png'
import Card04 from '/public/image-04.png'
import Card05 from '/public/image-05.png'
import Card06 from '/public/image-06.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionCards = () => {

    const mockupRef = useRef(null)
    const titleRef = useRef(null)


    useEffect(() => {
        const mPhone = mockupRef.current
        const title = titleRef.current

        //animação do mockup
        gsap.fromTo(mPhone, {
            opacity: 0,
            scale: .5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power4.out'
        })

        //animação do titulo
        gsap.fromTo(title, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,

        })
    }, [])

    return (
        <section className='w-full mx-auto pb-20'>
            <Image
                src={Mockup}
                alt='mockup celular com foto de uma garota'
                className='sticky top-56 mx-auto -mt-[32rem] mb-16 z-10 opacity-0'
                ref={mockupRef}
            />

            <h2 className='text-center text-7xl font-semibold mb-56 opacity-0' ref={titleRef}>Faça <span className='text-[#719d96]'>voçe</span> mesmo de casa</h2>

            <div className='w-full max-w-[1320px] mx-auto h-[562px] relative'>
                <Image
                    src={Card01}
                    className='absolute top-8 left-44'
                    alt='carde de imagem 01'

                />
                <Image
                    src={Card02}
                    className='absolute bottom-32 left-0'
                    alt='carde de imagem 02'
                />
                <Image
                    src={Card03}
                    className='absolute bottom-0 left-80'
                    alt='carde de imagem 03'
                />
                <Image
                    src={Card04}
                    className='absolute top-0 right-32'
                    alt='carde de imagem 04'
                />
                <Image
                    src={Card05}
                    className='absolute right-0 bottom-28'
                    alt='carde de imagem 05'
                />
                <Image
                    src={Card06}
                    className='absolute bottom-0 right-80'
                    alt='carde de imagem 06'
                />
            </div>
        </section>
    )
}

export default SectionCards