// images 
import calender from '../assets/calendar.svg'

function Calender() {
    return (
        <div className='calender flex w-[420px] rounded-[30px] bg-white flex-col gap-6  mt-8 px-6 py-4'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-primary text-[18px] font-bold '>Calendar</h2>
                <h1 className='text-primary text-[38px] font-bold '> Jan 2020</h1>
            </div>
            <img
                src={calender}
                alt='calender'
            />
        </div>
    )
}

export default Calender
