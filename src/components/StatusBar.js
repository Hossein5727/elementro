// images 
import cloudIcon from '../assets/cloud.svg'

function StatusBar() {
    return (
        <div className='statusBar  w-[420px] rounded-[30px] bg-white mt-8 h-[102px]'>
            <div className='w-[321px] bg-[#567DF4] h-full rounded-tl-[30px] rounded-bl-[30px] p-6 flex justify-start items-center gap-3 '>
                <img
                    src={cloudIcon}
                    alt='cloudIcon'
                />
                <div className='flex justify-start text-white ml-5 items-start flex-col '>
                    <h2 className='text-[12px] font-bold '>Downloading File</h2>
                    <h1 className='text-[18px] font-bold '>75%</h1>
                    <h5 className='text-[12px] text-[rgba(255, 255, 255, 0.7)] '>10 min remaining</h5>
                </div>
            </div>
        </div>
    )
}

export default StatusBar
