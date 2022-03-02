// files 
import { BlogInfo, Calender, ManageTask, Notif, Profile, ProfileInfo, SearchBar, Skils, StatusBar, WeatherInfo } from "."

function Information() {
    return (
        <div className='flex px-8 py-6 bg-bgInfo '>
            <div>
                <WeatherInfo />
                <Profile />
                <BlogInfo />
            </div>
            <div className="ml-5">
                <ProfileInfo />
                <Calender />
                <StatusBar />
            </div>
            <div className="ml-5">
                <SearchBar />
                <Skils />
                <Notif />
                <ManageTask />
            </div>
        </div>
    )
}

export default Information
