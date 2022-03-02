// images 
import profile from '../assets/profileInfo.jpg'
import socialmediaicons from '../assets/socialmediaicons.svg'

function ProfileInfo() {
    return (
        <div className='profileInfo w-[420px] rounded-[30px] bg-white flex flex-col gap-6  px-6 py-4'>
            <div className='w-full flex justify-center items-center'>
                <img
                    src={profile}
                    alt='profile'
                />
            </div>
            <div className='w-full flex justify-center items-center'>
                <button className='bg-[#EEF7FE] text-primary w-[90px] px-4 py-2 '>PRO</button>
            </div>
            <div className='w-full flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-primary text-[18px] font-bold '>Neelesh Chaudhary</h1>
                <p className='text-primary text-[15px]'>UI / UX Designer</p>
                <p className='textWeather text-[14px] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare pretium placerat ut platea.
                </p>
                <img
                    src={socialmediaicons}
                    alt='socialmediaicons'
                />
            </div>
            <div className='flex justify-between items-center '>
                <button className='text-primary border-2 rounded-[16px] w-[175px] h-[60px] border-primary '>Message</button>
                <button className='rounded-[16px] w-[175px] text-white h-[60px] bg-primary '>Connect</button>
            </div>
        </div>
    )
}

export default ProfileInfo
