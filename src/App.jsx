// import React, { useState } from 'react'
// import Navbar from './component/Navbar/Navbar'
// import './index.css'
// const App = () => {

// const [theme, setTheme] = useState('light');


//   return (
//     <div className={`container ${theme} `}>
//       <Navbar theme={theme} setTheme={setTheme}/>
//     </div>
//   )
// }

// export default App








import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Feed from './component/Navbar/feed/Feed'
import './index.css'
const App = () => {

  const current_theme = localStorage.getItem('current_theme');

const [theme, setTheme] = useState(current_theme ? current_theme  : 'light');

useEffect(()=>{
 localStorage.setItem('current_theme', theme);
},[theme])


  return (
    <div className={`container ${theme} `}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Feed/>
    </div>
  )
}
export default App
