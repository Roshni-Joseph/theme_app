import React , {useContext} from 'react'
import {DarkModeContext} from './context/DarkModeContext';
import Lightswitch from './Lightswitch';

export const Container = () => {
    const darkMode = useContext(DarkModeContext)
  return (
    <div className={darkMode? 'Container Container-dark' : 'Container Container-light'}>.
                    <Content/>

        <Lightswitch/>
    </div>
  )
}
