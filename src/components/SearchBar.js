// images
import Search from '../assets/SearchIcon.svg'

function SearchBar() {
    return (
        <div className='searchBar flex justify-start  px-6 py-4 w-[420px] rounded-[20px] bg-white'>
            <img
                src={Search}
                alt='Search'
                className='mr-4'
            />
            <h2 className='text-[20px] text-primary '>Search</h2>
        </div>
    )
}

export default SearchBar
