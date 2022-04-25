import React from 'react'
import "./intro.css"
import Me from '../../img/me.png'
import { ThemeContext } from '../../context'
import {useContext} from 'react'

const Intro = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Mehmet Anil Inec</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Frontend Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                      I am frontend developer looking for an opportunity in Vancouver’s tech industry.
                    </p>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg" style={{backgroundColor: darkMode && "rgb(34,34,34"}}></div>
                <img src={Me} alt="" className='i-img'/>
            </div>
        </div>
    )
}

export default Intro