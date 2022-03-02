// images 
import WeatherIcon from '../assets/WeatherIcon.svg'

function WeatherInfo() {
    return (
        <div className='bg-white w-[420px] rounded-[30px] flex justify-between items-center p-3 infoCom'>
            <div className='flex flex-col items-start justify-between'>
                <p className='textWeather pb-2 text-[14px]'>New Delhi</p>
                <h2 className='text-[30px] pb-2 font-bold text-primary'>06:20 AM</h2>
                <p className='text-[14px] pb-2 textWeather'>Novemaber 10.2020 | Wednesday</p>
            </div>
            <div className="flex items-center p-2 mr-5">
                <img
                    src={WeatherIcon}
                    alt='WeatherIcon'
                />
                <h2 className='text-primary text-[24px] font-bold'>18° C</h2>
            </div>
        </div>
    )
}

export default WeatherInfo
