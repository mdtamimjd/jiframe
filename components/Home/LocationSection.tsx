import React from 'react'
const locationData = [
  "Dhaka",
  "Gulshan",
  "Banani",
  "Mirpur",
  "Dhanmondi",
  "Uttara",
  "Old Dhaka",
  "Purbachal",
  "Bhashani Studio",
  "Tejgaon",
  "Mohakhali",
  "Badda",
  "Rampura",
  "Khilgaon",
  "Basabo",
  "Mughda",
  "Motijheel",
  "Paltan",
  "Shahbagh",
  "New Market",
  "Azimpur",
  "Lalmatia",
  "Mohammadpur",
  "Adabor",
  "Shyamoli",
  "Kalyanpur",
  "Agargaon",
  "Kafrul",
  "Cantonment",
  "Nikunja"
]

export default function LocationSection() {
    return (
        <div className='my-10'>
            <div className='mb-8 text-center px-6 md:px-12'>
                <div>
                    <p className='mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600'>Where we do</p>
                    <h2 className='text-3xl font-bold text-blue-500 md:text-5xl'>Our Services Location</h2>
                </div>
            </div>
            <div className='location-marquee overflow-hidden' aria-label='Service locations'>
                <div className='location-marquee-track flex w-max'>
                    {[0, 1].map((copy) => (
                        <div key={copy} className='flex shrink-0 gap-4 pr-4' aria-hidden={copy === 1}>
                            {locationData.map((location) => (
                                <span key={location} className='whitespace-nowrap rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm'>
                                    {location}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes location-scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .location-marquee-track {
                        animation: location-scroll 60s linear infinite;
                    }
                    .location-marquee:hover .location-marquee-track {
                        animation-play-state: paused;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .location-marquee-track { animation: none; }
                    }
                `}</style>
            </div>
        </div>
    )
}
