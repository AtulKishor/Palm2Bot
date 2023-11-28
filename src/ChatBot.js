import React from 'react'
import { useState } from 'react'

const Bot = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  console.log('messages',messages);

  const getResponse = async () =>{
    const response = await fetch(`http://localhost:8000/prompt/${text}`)
    const data = await response.json()
    console.log("data", data);
    setMessages([...messages,
    {
      author: data.messages[0].content,
      bot: data.candidates[0].content
    },
    ])
    setText('')
  }

  return (
    <div className="chat-bot">
      <div className="chat-header">
        <div className="info-container">
          <h3>Chat with</h3>
          <h2>PALM 2 Bot</h2>
        </div>
        <svg id="visual" viewBox="0 0 400 100" width="400" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 36L6.7 41C13.3 46 26.7 56 40 56.2C53.3 56.3 66.7 46.7 80 46.8C93.3 47 106.7 57 120 57.2C133.3 57.3 146.7 47.7 160 40.7C173.3 33.7 186.7 29.3 200 31C213.3 32.7 226.7 40.3 240 47.7C253.3 55 266.7 62 280 62.5C293.3 63 306.7 57 320 52.5C333.3 48 346.7 45 360 41.2C373.3 37.3 386.7 32.7 393.3 30.3L400 28L400 0L393.3 0C386.7 0 373.3 0 360 0C346.7 0 333.3 0 320 0C306.7 0 293.3 0 280 0C266.7 0 253.3 0 240 0C226.7 0 213.3 0 200 0C186.7 0 173.3 0 160 0C146.7 0 133.3 0 120 0C106.7 0 93.3 0 80 0C66.7 0 53.3 0 40 0C26.7 0 13.3 0 6.7 0L0 0Z" fill="#067854" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      </div>
        
      <div className="feed">
        {messages?.map((message, _index) =>
          <div key="_index">
            <div className="question bubble">{message.author}</div>
            <div className="response bubble">{message.bot}</div>
          </div>
        )}

      </div>
      <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
      <button onClick={getResponse}>⇒</button>    
    </div>
  )
}

export default Bot