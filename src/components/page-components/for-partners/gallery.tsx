import Image from 'next/image'
import React from 'react'
const galleries = [
    {
        name: "gallery-1",
        image: "/assets/interface.png"
    },
    {
        name: "gallery-2",
        image: "/assets/partners.jpg"
    },
    {
        name: "gallery-3",
        image: "/assets/partners.jpg"
    }, {
        name: "gallery-4",
        image: "/assets/gallery-4.jpg"
    },
    {
        name: "gallery-5",
        image: "/assets/hero-image.jpeg"
    },
]

const Gallery = () => {
    return (
        <div className='flex flex-col gap-10 items-center justify-center' data-aos="fade-up">
            <div className='space-y-3'>

                <h2 className='text-4xl text-center font-bold text-mainColor'>Our Gallery</h2>
                <p className='text-center text-muted-foreground'>Capturing Moments from Our Global Network</p>
            </div>
            <div className='w-11/12 mx-auto flex flex-col  px-6 gap-6'>
                <div className="masonry sm:masonry-sm md:masonry-md w-11/12 mx-auto">
                    {galleries?.map((gallery) => (

                        <div className="mb-[1.5em] relative group rounded-sm overflow-hidden" key={gallery.name}>
                            <Image
                                src={gallery.image}
                                alt={gallery.name}
                                width={800}
                                height={700}
                                priority={true}
                                className="rounded-lg h-full w-full object-cover"
                            />

                            {/* overlay fade up */}
                            {/* <Link href={`/gallery/${gallery.id}`} className="absolute inset-0 size-full grid place-items-center bg-black/50 group-hover:scale-y-100 scale-y-0 transition-all text-white duration-300 origin-bottom cursor-pointer">
                                <h3 className="font-semibold md:text-xl text-center">
                                    {gallery.title}
                                </h3>
                            </Link> */}

                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default Gallery