import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Data({ tasks, setTasks }) {
    const [completedTasks, setCompletedTasks] = useState([]);
    function makeUnderLine(task) {
        if (completedTasks.includes(task)) {
            setCompletedTasks(completedTasks.filter(t => t !== task));
        } else {
            setCompletedTasks([...completedTasks, task]);
        }
    }
    function deleteLine(task) {
        const newTask = tasks.filter(t => t != task)
        setTasks(newTask)
    }

    useEffect(() => {
        const storedTasks = localStorage.getItem('localTasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [setTasks])

    const cleardata = () => {
        setTasks([])
        localStorage.clear();

    }


    return (
        <>

            {tasks && tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className="bg-white mt-4  rounded-full flex justify-between items-center flex-wrap p-4 lg:max-w-xl lg:items-center lg:m-auto lg:mt-4 ">
                        <div key={index} className={`font-semibold ${completedTasks.includes(task) ? 'line-through' : ''}`}>{task}</div>
                        <div>
                            <button type="button" onClick={() => makeUnderLine(task, index)} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" >Complete</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => deleteLine(task)} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " >Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-red-500 text-center" >No tasks available</div>
            )}
            {/* <button className="bg-orange-500 h-11 mt-3 text-center" onClick={cleardata} ><span className="text-slate-200 p-6 text-center">Clear All</span></button> */}

            <div className="flex justify-center mt-4">
                <button
                    className="bg-orange-500 h-11 flex items-center justify-center px-6 rounded-lg"
                    onClick={cleardata}
                >
                    <span className="text-slate-200">Clear All</span>
                </button>
            </div>


        </>
    );
}

Data.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTasks: PropTypes.func.isRequired,
};

export default Data;
