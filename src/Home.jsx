import React, { useState } from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'



const Home = () => {
    const [mode, setMode] = useState('light')

    const [label, setLabel] = useState({
        color: 'black'
    })
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setLabel({
                color: 'white'
            })
            document.body.style.backgroundColor = '#1F2933';
            document.body.style.color = 'white';
            showAlert("Dark mode enabled", "success")
        }
        else {
            setMode('light');
            setLabel({
                color: 'black'
            })
            document.body.style.backgroundColor = 'aquamarine';
            document.body.style.color = 'black';
            showAlert("Dark mode Disabled", "success")
        }
    }
    const newtoggle = () => {
        if (mode === 'light') {
            setMode('dark');
            setLabel({
                color: 'white'
            })
            document.body.style.backgroundColor = 'rgb(11 106 5)';
            document.body.style.color = 'white';
            showAlert("Green mode enabled", "success")
        }
        else {
            setMode('light');
            setLabel({
                color: 'black'
            })
            document.body.style.backgroundColor = 'aquamarine';
            document.body.style.color = 'black';
            showAlert("Green mode Disabled", "success")
        }
    }
    return (
        <>
                <Navbar title="TypoHere" subtitle="About" mode={mode} toggleMode={toggleMode} label={label} newtoggle={newtoggle} />
                <Alert alert={alert} />
                
                <Routes>
                    <Route  exact path='/another' element={<Textform title="Enter text to analyze" showAlert={showAlert} />}/>
                    <Route exact path='/about' element={<About mode={mode}/>}/>
                </Routes>
                
        </>
    )
}

export default Home