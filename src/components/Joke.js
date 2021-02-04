import React from 'react'

function Joke(props){
    return(
        <div>
            {props.question ? 
                <div className= 'question'> Question : {props.question}</div> :
                <div></div>
            }
            <div className='punchline'>Punch Line: {props.punchLine}</div>
        </div>
    )
}

export default Joke