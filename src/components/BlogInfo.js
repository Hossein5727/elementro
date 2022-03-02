// images
import blog from '../assets/blog.jpg';

function BlogInfo() {
    return (
        <div className='blogInfo w-[420px] rounded-[30px] bg-white flex flex-col mt-8 px-6 py-4'>
            <div>
                <img
                    src={blog}
                    alt='blog'
                    className=''
                />
            </div>
            <div className='flex flex-col items-start mt-6 gap-4'>
                <h1 className='text-primary text-[30px] font-bold '>Learn Microinteraction</h1>
                <p className='text-primary text-[14px]  '>Monday Jan 20 , 2020</p>
                <h5 className='textWeather text-[14px]  '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare pretium placerat ut platea. Purus blandit integer
                    sagittis massa vel est hac.
                </h5>
            </div>
            <div className='mt-6 flex justify-between items-start w-full'>
                <h3 className='text-[14px] text-primary cursor-pointer'>Read Full Blog</h3>
                <button className='w-[90px] px-2 py-1 text-primary text-[14px] bg-[#EEF7FE] rounded-[5px] '>Blog</button>
            </div>
        </div>
    )
}

export default BlogInfo
