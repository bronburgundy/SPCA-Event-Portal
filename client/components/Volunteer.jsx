import React from 'react'

class Volunteer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder: 12
        }
    }

    render(){
        return(
            <div>
                <h3> Volunteer </h3>
                <div>
                    <h4>{this.props.id} </h4>
                    
                    

                </div>

            </div>
        )
    }
}

export const Volunteer