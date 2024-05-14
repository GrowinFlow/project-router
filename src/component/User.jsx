import React from 'react'

const User = () => {
  return (
    <div className='w-full'>

<div class="mx-auto my-10 flex flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
  <div class="mb-4 md:mr-6 md:mb-0">
    <img class="h-56 rounded-lg object-cover " src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" />
  </div>
  <div class="">
    
    <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-rose-400 capitalize">Theo marson</p>
    <p class="mb-4 text-sm font-medium text-gray-500">Senior Devloper</p> 
    <div class="flex space-x-2">
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Project</p>
        <p class="text-3xl font-medium text-gray-600">1.4K</p>
      </div>
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Connections</p>
        <p class="text-3xl font-medium text-gray-600">7.3K</p>
      </div>
      <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
        <p class="text-sm font-medium text-gray-500">Followers</p>
        <p class="text-3xl font-medium text-gray-600">4.2M</p>
      </div>
      <div class=""></div>
    </div>
    <div class="mb-3"></div>
    <div class="flex space-x-2">
      <button class="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">Message</button>
      <button class="w-full rounded-lg border-2 border-transparent bg-gray-600 px-4 py-2 font-medium text-white">Follow</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default User