import React from 'react'


const Navbar = () => {

 

  return (
  
      <div id='navbar' class='w-full h-full '>

            <div class='w-full h-16 backdrop-blur-lg  shadow-lg '>
    
              <div class=' max-w-[1500px] w-full  mx-auto  h-full flex items-center justify-between '>
        
            <ul class='flex items-center '>
                <h2 id='logo'class='px-4 text-4xl  text-transparent bg-clip-text bg-gradient-to-t from-palete-400 to-pink-500'>Mika</h2>
                <li id='home' class='px-4   transition-all duration-300 ease-in    '><a href="" >Home</a> </li>
                <li id='dashboard 'class='px-4  transition-all duration-300 ease-in   '><a href="">Dashboard</a> </li>
            </ul>
        
        
            <ul class='flex items-center '>
                <li class='px-4  hover:font-bold  transition-all duration-300 ease-in hover:scale-105   hover:text-palete-100  '><a href="">Login</a></li>
                <li class='px-4  hover:font-bold transition-all duration-300 ease-in hover:scale-105  hover:text-palete-100  '><a href="">Register</a></li>
            </ul>
        
        
    </div>

</div>

</div>

  )
}

export default Navbar