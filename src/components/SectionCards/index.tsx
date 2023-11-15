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
    const sectionRef = useRef(null)
    const card01Ref = useRef(null)
    const card02Ref = useRef(null)
    const card03Ref = useRef(null)
    const card04Ref = useRef(null)
    const card05Ref = useRef(null)
    const card06Ref = useRef(null)

    const section = sectionRef.current

    const animateCards = (img: null[], position: number) => {
        gsap.fromTo(img, {
            opacity: 0,
            x: position
        }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: .1,
            scrollTrigger: {
                trigger: section,
                start: 'center center'
            }
        })
    }

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
            scrollTrigger: {
                trigger: section,
                start: '65% center',
            }
        })

        //animação dos cards 

        const card01 = card01Ref.current
        const card02 = card02Ref.current
        const card03 = card03Ref.current
        const card04 = card04Ref.current
        const card05 = card05Ref.current
        const card06 = card06Ref.current

        const leftImages = [card01, card02, card03]
        const rightImages = [card04, card05, card06]

        animateCards(leftImages, 50)
        animateCards(rightImages, -50)
    }, [])

    return (
        <section className='w-full mx-auto pb-20' ref={sectionRef}>
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
                    className='absolute top-8 left-44 opacity-0'
                    alt='carde de imagem 01'
                    ref={card01Ref}

                />
                <Image
                    src={Card02}
                    className='absolute bottom-32 left-0 opacity-0'
                    alt='carde de imagem 02'
                    ref={card02Ref}
                />
                <Image
                    src={Card03}
                    className='absolute bottom-0 left-80 opacity-0'
                    alt='carde de imagem 03'
                    ref={card03Ref}
                />
                <Image
                    src={Card04}
                    className='absolute top-0 right-32 opacity-0'
                    alt='carde de imagem 04'
                    ref={card04Ref}
                />
                <Image
                    src={Card05}
                    className='absolute right-0 bottom-28 opacity-0'
                    alt='carde de imagem 05'
                    ref={card05Ref}
                />
                <Image
                    src={Card06}
                    className='absolute bottom-0 right-80 opacity-0'
                    alt='carde de imagem 06'
                    ref={card06Ref}
                />
            </div>
        </section>
    )
}

export default SectionCards