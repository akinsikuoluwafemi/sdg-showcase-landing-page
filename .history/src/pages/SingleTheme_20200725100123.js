import React, { Component} from 'react';
import { ProjectContext } from '../contexts/context';



class SingleTheme extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: this.props.match.params.theme
        }
    }


    static contextType = ProjectContext;

    render(){
        
        const {getTheme} = this.context;
        
        const theme = getTheme(this.state.theme);
        console.log(theme);

       

        const renderedTheme = theme.map(item => {
            return (
                <div>
                    {item.name}
                    
                </div>
            )
        })
            
        
        

        return (
            <div>
                Single theme{renderedTheme}
        </div>
        )
    }
}


export default SingleTheme;