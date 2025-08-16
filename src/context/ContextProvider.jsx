import React, { useState } from 'react'
import { createContext } from 'react'
import main from '../config/gemini'

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState("")
  const [recentPrompt, setRecentPrompt]= useState("")
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showRes, setShowRes] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resData, setResData] = useState("")

  //shows the response in typing effect
  const delayPara = (index, nextWord) =>{
    setTimeout(()=>{
      setResData(prev => prev+nextWord)
    }, 75*index)
  }

  const newChat = () =>{
    setLoading(false)
    setResData(false)
  }

  const onSent = async(prompt) => {
    console.log('getting result')
    // await main(prompt)

    setResData('')
    setLoading(true)
    setShowRes(true)
    setRecentPrompt(input)
    let response
    if(prompt !== undefined){
      response = await main(prompt) //from recent prompt
      setRecentPrompt(prompt) 
    }else {
      setPrevPrompts(prev=>[...prev, input])
      setRecentPrompt(input)
      response = await main(input) //new prompt
    }
    // setPrevPrompts(prev=>[...prev + input])
    
    // const response = await main(input)
    let resArray = response.split("**") //split the response for more asthetics
    let newArr = ""
    for(let i=1; i < resArray.length; i++){
      if(i%2 === 0)
        newArr += resArray[i]
      else
        newArr += "<b>"+resArray[i]+"</b>"
    }
    let newArr2 = newArr.split("*").join("</br>")
    // setResData(newArr2)
    let newResArray = newArr2.split(" ") //typing effect
    for(let i=0; i<newResArray.length; i++){
      const nextWord = newResArray[i]
      delayPara(i, nextWord+" ")
    }

    console.log('Result Form Gemini', response)
    setLoading(false)
    setInput('')
  }
  // onSent("What is react js?")

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showRes,
    loading,
    resData,
    input,
    setInput,
    newChat
  }

  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
