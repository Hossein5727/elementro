// images
import completedTodo from '../assets/CheckCircle.svg'
import deleteTask from '../assets/Delete.svg'
import addTodo from '../assets/Add Button.svg'
// data
import { taskData } from '../data/taskData'

function ManageTask() {
    return (
        <div className='manageTask flex flex-col gap-5 px-6 py-4 w-[420px] rounded-[20px] bg-white mt-8'>
            <div className='flex flex-col text-[30px] text-primary font-bold '>
                <h2>Task to do</h2>
                <p className='text-[14px] textWeather font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                    pretium placerat ut platea. Purus blandit integer sagittis
                    massa vel est hac.
                </p>
            </div>
            <div className='mt-8'>
                {taskData.map(item => (
                    <div key={item.id} className='w-[380px] h-[70px] mb-6 bg-[#EEF7FE] rounded-[10px] px-2 py-1 flex justify-between items-center'>
                        <div className='flex items-center'>
                            {item.status && (
                                <img
                                    src={completedTodo}
                                    alt='completedTodo'
                                    className='mr-3'
                                />
                            )}
                            <h1 className='text-[20px] font-bold text-primary '>{item.text}</h1>
                        </div>
                        <div className='mr-3 cursor-pointer'>
                            <img
                                src={deleteTask}
                                alt='deleteTask'
                            />
                        </div>
                    </div>
                ))}
                <div className=' w-full flex justify-end mt-12 cursor-pointer '>
                    <img
                        src={addTodo}
                        alt='addTodo'
                    />
                </div>
            </div>
        </div>
    )
}

export default ManageTask
