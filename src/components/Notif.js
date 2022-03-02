// images 
import notif from '../assets/Notification.svg'

function Notif() {
    return (
        <div className='notif flex gap-5 px-6 py-4 w-[420px] rounded-[20px] bg-white mt-8'>
            <div>
                <img
                    src={notif}
                    alt='notif'
                />
            </div>
            <div className='flex flex-col'>
                <h2 className='text-[20px] font-bold text-primary '>You have 1 new message</h2>
                <p className='text-[18px] textWeather  '>Hi Neelesh , we have a task for you...</p>
            </div>
        </div>
    )
}

export default Notif
