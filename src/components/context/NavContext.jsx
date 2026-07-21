import React, { createContext, useState } from 'react'

export const NavbarContext =  createContext()

function Navcontext({children}) {

const [navOpen , setNavOpen] = useState(true)
  return (
    <div>
      <NavbarContext.Provider value={[navOpen , setNavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  )
}

export default Navcontext
