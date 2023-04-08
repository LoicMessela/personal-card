import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className="mainSection">
      <h1>Loïc Messela</h1>
      <h4>Frontend Developer</h4>
      <a>loicmessela.com</a>
      <button>
        <img src="/Mail.png" />
        <p>Email</p>
      </button>
      <div className="about-interest">
        <h3 className="about-h3">About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3 className="interest-h3">Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  )
}

export default Main
