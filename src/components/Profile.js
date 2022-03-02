// images 
import ProfileImage from '../assets/ProfileImage.svg'
import { profileData1 } from '../data/profileData1'

function Profile() {
    return (
        <div className="profile flex w-[420px] rounded-[30px] bg-white flex-col mt-8 px-6 py-4">
            <div className="w-full flex justify-between items-center">
                <img
                    src={ProfileImage}
                    alt='ProfileImage'
                    className='w-[72px] h-[72px]'
                />
                {profileData1.map(item => (
                    <div key={item.id}>
                        <p className='text-[15px] text-primary'>{item.title}</p>
                        <h5 className='text-[18px] font-bold text-primary'>{item.numbers}</h5>
                    </div>
                ))}
            </div>
            <div className='mt-6 flex flex-col'>
                <h1 className='text-[18px] text-primary font-bold'>Neelesh Chaudhary</h1>
                <h2 className='text-[15px] text-primary '>UI / UX Designer</h2>
            </div>
            <div className='mt-6 flex flex-col'>
                <h1 className='text-[15px] text-primary font-bold'>About</h1>
                <p className='text-[14px]  textWeather'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ornare pretium placerat ut platea. Purus blandit
                    integer sagittis massa vel est hac.
                </p>
            </div>
        </div>
    )
}

export default Profile
