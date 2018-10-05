import React, { Component } from 'react';
import "../../signup.css";


//Sign In Component
const SignIn = ({ submit, switchHandler}) => {
	return(
		<div className="tc">
      <div style = {{height : 60 + "px"}}></div>
          <div className="card horizontal card__rounded mid" style={{width: 30 + "rem"}}>
             <div className="mid" style={{width:"80%"}}>
                <div className="card-title pa2 black-text ma4">
                  <h3>Login:</h3>
                </div>
                <form onSubmit = {submit} style = {{width:"100%"}}>
                   <div className="pa1 ma1 input-field mid">
                     <input name="username" 
                            className=" validate col s10" 
                            type="text"
                            required/>
                     <label htmlFor="username">Username</label>
                    </div>
                    <div style={{height:"20px"}}></div>
                    <div className="mid pa1 ma1 input-field">
                        <input name="password" 
                               className="validate col s10" 
                               type="password"
                               required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="text-center ma4">
                        <button name="submit"
                                type="submit" 
                                className="btn__hero center-align green waves-effect waves-light">Login</button>
                    </div>
                 </form>
                    <div className="ma4">
                     <p className = "black-text">Not a member? <a onClick={switchHandler}>Sign Up</a></p>
                     <p className="black-text">Forgot <a href="">Password?</a></p>
                    </div>
            </div>
        </div>
        </div>
		);
}

//SignIn Component

const SignUp = ({submit, switchHandler}) => {
	return(
		<div className="tc">
			<div style = {{height : 50 + "px"}}></div>
              <div className="card horizontal card__rounded mid" style={{width: 28 + "rem"}}>
                 <div className="ma1 pa1 tc mid" style={{width:"80%"}}>
                    <div className="card-title black-text pa2 ma4">
                      <h3>Sign Up</h3>
                    </div>
                    <form onSubmit = {submit} style={{width:"100%"}}>
                    	<div className="ma1 pa1 input-field col s12">
                            <input name="name" 
                                className="validate col s12 mab" 
                                type="text" 
                                required/>
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="ma1 pa1 input-field">
                            <input name="username" 
                                className="validate col s12 mab" 
                                type="text" 
                                required/>
                            <label htmlFor="username">Username</label>
                        </div>
                       <div className="ma1 pa1 input-field">  
                            <input name="email" 
                                    className="validate col s12 mab" 
                                    type="text"
                                    required/>
                              <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="ma1 pa1 input-field"> 
                            <input name = "password" 
                                    className="validate col s12 mab" 
                                    type="password"
                                    required/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="ma1 pa1 input-field"> 
                            <input name="confirmPassword" 
                                   className="validate col s12 mab" 
                                   type="password"
                                   required/>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <div className="text-center">
                            <button name="submit"
                                    type="submit" 
                                    className="btn__hero green waves-effect waves-light">Sign Up</button>
                        </div>
                    </form>
                    <div className="ma4">
                            <p className="black-text">Already a member? <a onClick={switchHandler}>Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
		);
}


class UserSetUp extends Component
{
	constructor()
  {
		super();
		this.state = {
			showLogin : false,
			showRegister : true
		}
  }

	handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event);

		fetch('/api/form-submit-url', {
			method : 'POST',
			body : data,
		});
		console.log(data);
	}

	switchHandler = () => {
		this.setState({
				showLogin : !this.state.showLogin,
				showRegister : !this.state.showRegister
		})
	}

	renderView = () => {
		if(this.state.showLogin){
			return <SignIn submit = {this.handleSubmit}
						   switchHandler = {this.switchHandler} />;
		}
		else return <SignUp submit = {this.handleSubmit}
							switchHandler = {this.switchHandler} />;
	}
  render()
  {

    return(
    	<div className="tc">
			{
				this.renderView()
			}
    	</div>
    	);
  }
}


export default UserSetUp;