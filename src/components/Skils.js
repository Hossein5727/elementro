// images 
import chart from '../assets/Pie.svg'
// data
import { skilsData } from '../data/skilsData'

function Skils() {
    return (
        <div className='skils flex justify-between items-center gap-5 px-6 py-4 w-[420px] rounded-[20px] bg-white mt-8'>
            <div className='flex flex-col items-start justify-start gap-2 '>
                <h2 className='text-primary text-[30px] font-bold mb-5 '>Expertise</h2>
                {skilsData.map(item => (
                    <p className='flex items-center text-[18px] text-primary ' key={item.id}><div className={`w-3 h-3 rounded-full mr-4 `} style={{ background: item.color }}></div> {item.text}</p>
                ))}
            </div>
            <div>
                <img
                    src={chart}
                    alt='chart'
                />
            </div>
        </div>
    )
}

export default Skils
