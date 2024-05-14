import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Un = () => {
  const { name } = useParams();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const updateParams = () => {
    navigate(`/un/${inputValue}`);
  };
  
  return (
    <div className='p-4 px-8'>

<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">User Params</span> .... {name}</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"> Please attach your name to the URL </p>

<div className=" mt-4 p-4 border-2 border-gray-300 rounded-lg flex flex-col md:flex-row justify-between gap-4">
<div className="relative z-0 w-full mb-5 group">
      <input value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
         type="text"
          name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
  </div>
<button onClick={updateParams} type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Update Params</button>

</div>



    </div>
  )
}

export default Un