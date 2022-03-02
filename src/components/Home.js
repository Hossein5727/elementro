// images 
import banner from '../assets/bgHome2.png'

function Home() {
    return (
        <div className='home px-20 py-32 flex justify-between items-start'>
            <div className='flex flex-col justify-between items-start'>
                <div>
                    <h1 className='font-bold text-[72px] text-primary w-[320px] leading-[83px]'>Website Elements</h1>
                    <p className='w-[462px] text-[18px] text-primary leading-[25px]'>
                        We present you the free and minimal design template
                        to create elegent and beautiful website and
                        it’s completely free...
                    </p>
                </div>
                <div className='mt-20 flex flex-col'>
                    <p className='text-[18px] text-primary'>Subscribe us for more</p>
                    <div className='w-[360px] h-[66px] bg-white rounded-[10px] flex justify-between items-center py-3 mt-3 px-6'>
                        <input
                            className='bg-transparent h-full w-[220px] outline-none text-2xl px-2'
                        />
                        <button className='text-white bg-primary rounded-[10px] px-4 py-2 text-[18px]'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-transparent w-full h-full -mt-32 overflow-hidden bgImg'>
                <img
                    src={banner}
                    alt='banner'
                    className='bg-transparent '
                />
            </div>
        </div>
    )
}

export default Home
