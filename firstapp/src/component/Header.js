import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){
        super()

        this.state={
            title:'React State App',
            keyword:'User Input Here',
        }
    }

    inputChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }
    render(){
        console.log("Render function calll")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.inputChange} placeholder="My text"/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
 
        )
    }
}
export default Header;



/*

const Header = () => {
    return(
        <Fragment>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </Fragment>

    )
}
*/