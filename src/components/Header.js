// pakejes
import { Link } from 'react-router-dom'
// data
import { linkData } from '../data/linkData'
// images
import logo from '../assets/logo.png'
import search from '../assets/SearchIcon.jpg'

function Header() {
    return (
        <nav className='bg-white px-6 py-4 '>
            <div className='w-full flex justify-between items-center'>

                <div className='flex items-center w-[220px]'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-[70px] h-[70px]'
                    />
                    <h2 className='font-bold text-[30px] text-primary'>Elementro</h2>
                </div>

                <div className='flex items-center gap-11 nav'>
                    {linkData.map(item => (
                        <Link to={item.link} key={item.id} className={`${item.special && 'bg-bgNav px-7 py-2 rounded-[10px] text-white'} text-[15px] text-right text-primary not-italic leading-[22px]`}>{item.text}</Link>
                    ))}
                    <img
                        src={search}
                        alt='searchIcon'
                        className='w-[25px] h-[25px] mr-6 cursor-pointer'
                    />
                </div>

            </div>
        </nav>
    )
}

export default Header
