import React from 'react'
import Flight from '../Assets/Flight.jpg'
import Lab from '../Assets/Lab.jpg'
import Faculty from '../Assets/Faculty.jpg'
import Task from '../Assets/Task.jpg'
import Wordle from '../Assets/Wordle.jpg'
import Hospital from '../Assets/Hospital.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'> 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div  style={{backgroundImage:`url(${Flight})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Flight Reservation
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href='https://github.com/davidMumpasa/FlightReservation.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>  
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${Task})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Task management
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/davidMumpasa/TaskManagementSystemFrontend.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Frontend</button>
                            </a>
                            <a href='https://github.com/davidMumpasa/TaskManagementSystem.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Backend</button>
                            </a>  
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${Lab})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           Lab management
                        </span>
                        <div className='pt-8 text-center'>
                             
                            <a href='https://github.com/davidMumpasa/Laboratorymanagement.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>  
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${Faculty})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Faculty dashboard
                        </span>
                        <div className='pt-8 text-center'>
                          
                            <a href='https://github.com/davidMumpasa/FacultyManagementSystem.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>  
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${Wordle})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wordle Game
                        </span>
                        <div className='pt-8 text-center'>
                           
                            <a href='https://github.com/davidMumpasa/WordleMobileApp.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>  
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${Hospital})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                    <div className='oppacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Hospital management
                        </span>
                        <div className='pt-8 text-center'>
                          
                            <a href='https://github.com/davidMumpasa/HospitalManagementSystem.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work