import React,{Component} from 'react';

const loginUrl = "http://localhost:5000/api/auth/login";

class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

    handleChangeEmail=(event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword=(event) => {
        this.setState({password:event.target.value})
    }


    handleSubmit =() => {
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data)=>{
            sessionStorage.setItem('_ltk',data.token)
            this.props.history.push('/profile')
        })
    }


    render(){
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h4>Login</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" name="email" value={this.state.email} 
                            onChange={this.handleChangeEmail} className="form-control"/>
                            
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="text" name="password" value={this.state.password} className="form-control" onChange={this.handleChangePassword}/>
                        </div>
                        

                        <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default LoginComponent