import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className='a-img'/>
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-desc'>Frontend web developer with a background in mining software design. My engineering background has led to me pursue a career in frontend development because I love solving problems, learning new technologies and solving real-life problems.  I want to hone my skills as a frontend developer in a team where I can learn new technologies and improve on my existing skills.</p>
        </div>
    </div>
  )
}

export default About