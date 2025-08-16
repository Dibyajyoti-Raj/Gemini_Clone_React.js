import React, { useContext, useState } from 'react'
import { Context } from '../context/ContextProvider'

const Sidebar = () => {
  const [click, setClick] = useState(false)
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)
  const loadprompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  const handelClick = () =>{
    console.log('clicked')
    if(!click)
      setClick(!click)
    else
    setClick(!click)
  }
  return (
    <div className='sidebar flex flex-col justify-between px-4 py-3 items-center bg-slate-100'>
      {/* Top */}
      <div className='flex flex-col gap-3'>
        <img onClick={handelClick} src='src/assets/menu.png' alt="" className='size-6 md:size-8 mx-auto cursor-pointer '/>        

        <div onClick={()=>newChat()} className={`${click ? "hidden" : "block"} bg-gray-300  size-8 md:size-9 p-1 rounded-full`}><img src="src/assets/add.png" alt="" className={` size-6 md:size-8 cursor-pointer`}/></div>
        <div className={`${click ? "block" : "hidden"} px-3 py-1.5 bg-gray-300 rounded-full items-center flex cursor-pointer`}>
          <img src="src/assets/add.png" alt="" className='size-6  cursor-pointer pe-2'/>
          <p>New Chat</p>
        </div>
        <div>
        <p className={` text-left font font-semibold cursor-pointer`}>Recent</p>
        { prevPrompts.map((item, index)=>{
            return(<div onClick={()=>loadprompt(item)} className={`${click ? "block" : "hidden"} flex`}>
              <img src="src/assets/message.png" alt="" className='size-4 md:size-5 cursor-pointer'/>
              <p className={`(${click} ? block : hidden)`}>{item.slice(0,18)}..</p>
            </div>)
          })
        }
        </div>
      </div>

      {/* Bottom */}
      <div className={`flex flex-col gap-3 items-start ${click ? "px-2" : "p-0"}`}>
        <img src='src/assets/qn.png' alt="" className={`${click ? "hidden" : "block"}  size-6 md:size-7 cursor-pointer`}/> 
        <div className={`${click ? "block" : "hidden"} hover:bg-gray-200 rounded-2xl md:rounded-3xl ps-3 pe-8 py-1 md:py-1 text-center items-start flex space-x-2  cursor-pointer`}>
          <img src='src/assets/qn.png' alt="" className='size-6 md:size-7 cursor-pointer'/>
          <p>Help</p>
        </div>

        <img src='src/assets/history.png' alt="" className={`${click ? "hidden" : "block"} size-6 md:size-7 cursor-pointer`}/>
        <div className={`${click ? "block" : "hidden"} hover:bg-gray-200 rounded-2xl md:rounded-3xl ps-3 pe-8 py-1 md:py-1 text-center items-start flex space-x-2  cursor-pointer`}>
          <img src='src/assets/history.png' alt="" className='size-6 md:size-7 cursor-pointer'/>
          <p>Activity</p>
        </div>

        <img src='src/assets/setting.png' alt="" className={`${click ? "hidden" : "block"} size-6 md:size-7 cursor-pointer`}/>
        <div className={`${click ? "block" : "hidden"} hover:bg-gray-200 rounded-2xl md:rounded-3xl ps-3 pe-8 py-1 md:py-1 text-center items-start flex space-x-2  cursor-pointer`}>
          <img src='src/assets/setting.png' alt="" className='size-6 md:size-7 cursor-pointer'/>
          <p>Setting</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
