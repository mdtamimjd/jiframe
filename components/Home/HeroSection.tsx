"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const circlesRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            circlesRef.current.forEach((circle, index) => {
                if (!circle) return

                gsap.to(circle, {
                    y: index % 2 === 0 ? 16 : -16,
                    x: index < 2 ? 10 : -10,
                    scale: 1.08,
                    duration: 2.5 + index * 0.35,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.2,
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef} className='relative h-screen w-full overflow-hidden bg-pink-500/20'>
            <div ref={(element) => { circlesRef.current[0] = element }} aria-hidden='true' className='absolute -left-12 -top-12 h-40 w-40 rounded-full bg-blue-500' />
            <div ref={(element) => { circlesRef.current[1] = element }} aria-hidden='true' className='absolute left-28 top-8 h-40 w-40 rounded-full bg-blue-500/50' />
            <div ref={(element) => { circlesRef.current[2] = element }} aria-hidden='true' className='absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-500' />
            <div ref={(element) => { circlesRef.current[3] = element }} aria-hidden='true' className='absolute right-28 top-8 h-40 w-40 rounded-full bg-pink-500/50' />

            {/* add flower */}
            <Image
                alt='flower image'
                src={"/flower-1.png"}
                width={200}
                height={200}
                loading='eager'
                sizes='100'
                className='absolute bottom-0 left-0'
            />
            <main className='relative z-10 flex min-h-screen w-full items-center justify-center px-6'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:true
                    }}
                    // navigation={true}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper w-full"
                >
                    <SwiperSlide className='flex justify-center'>
                        <section className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 rounded-lg bg-pink-100/30 p-8 md:grid-cols-3'>
                            <div className='relative h-[550] w-full'>
                                <Image
                                    alt='hero image'
                                    src={"/hero-1.jpg"}
                                    fill
                                    loading='eager'
                                    sizes='100'
                                    className='rounded-md'

                                />
                            </div>
                            <div className='col-span-2 text-center space-y-4'>
                                <h2 className='text-3xl'>WEDDING & EVENT PLANNER</h2>
                                <h1 className='text-8xl flex flex-col font-semibold'><span className='text-blue-500'>Planning Your </span><span className='text-pink-500'>Best Day Ever.</span></h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nobis natus nisi libero laboriosam molestias cupiditate voluptate provident recusandae accusamus.</p>
                                <div className='flex justify-center gap-4 mt-6'>
                                    <button className='inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-pink-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300'>
                                        Contact Us
                                    </button>
                                    <button className='inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500'>
                                        Services
                                    </button>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <section className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 rounded-lg bg-pink-100/30 p-8 md:grid-cols-3'>
                            <div className='relative h-[550] w-full'>
                                <Image
                                    alt='hero image'
                                    src={"/hero-2.jpg"}
                                    fill
                                    loading='eager'
                                    sizes='100'
                                    className='rounded-md'

                                />
                            </div>
                            <div className='col-span-2 text-center space-y-4'>
                                <h2 className='text-3xl'>WEDDING & EVENT PLANNER</h2>
                                <h1 className='text-8xl flex flex-col font-semibold'><span className='text-blue-500'>Planning Your </span><span className='text-pink-500'>Best Day Ever.</span></h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nobis natus nisi libero laboriosam molestias cupiditate voluptate provident recusandae accusamus.</p>
                                <div className='flex justify-center gap-4 mt-6'>
                                    <button className='inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-pink-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300'>
                                        Contact Us
                                    </button>
                                    <button className='inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500'>
                                        Services
                                    </button>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <section className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 rounded-lg bg-pink-100/30 p-8 md:grid-cols-3'>
                            <div className='relative h-[550] w-full'>
                                <Image
                                    alt='hero image'
                                    src={"/hero-3.jpg"}
                                    fill
                                    loading='eager'
                                    sizes='100'
                                    className='rounded-md'

                                />
                            </div>
                            <div className='col-span-2 text-center space-y-4'>
                                <h2 className='text-3xl'>WEDDING & EVENT PLANNER</h2>
                                <h1 className='text-8xl flex flex-col font-semibold'><span className='text-blue-500'>Planning Your </span><span className='text-pink-500'>Best Day Ever.</span></h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nobis natus nisi libero laboriosam molestias cupiditate voluptate provident recusandae accusamus.</p>
                                <div className='flex justify-center gap-4 mt-6'>
                                    <button className='inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-pink-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300'>
                                        Contact Us
                                    </button>
                                    <button className='inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500'>
                                        Services
                                    </button>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </main>
        </div>
    )
}
