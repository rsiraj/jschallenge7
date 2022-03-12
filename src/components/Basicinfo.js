import React from 'react'
import './Basicinfo.css'

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className='App'>
            {this.props.data.map((person) =>(
                    <div className='Person'>
                        <p>{person.name}</p>
                        <p>{person.number}</p>
                        <p>Birthday: {person.dob}</p>
                    </div>
                    ))}
        </div>
        )
    }
}

export default BasicInfo