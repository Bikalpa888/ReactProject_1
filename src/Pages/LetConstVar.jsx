import React from 'react'

const LetConstVar = () => {
  return (
    <div>
    <h1 className='text-3xl font-bold text-center underline text-blue-500 bg-slate-200!'> Let/Const/Var</h1>
   
    
    <div className="lg:grid lg:grid-cols-3">
        <div>
            <h2>LET</h2>
            <ul>
              <li>defines variable</li>
            </ul>
        </div>

        <div>
            <h2>CONST</h2>
            <ul>
              <li>defines constant</li>
            </ul>
        </div>

        <div>
            <h2>VAR</h2>
            <ul>
              <li>defines variable</li>
            </ul> 
        </div>
    </div>

    </div>

  
  )
}

export default LetConstVar