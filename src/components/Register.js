import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Profile.css"
export default class Profile extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        oldUsername: ""
    }

    async componentDidMount(){
        const uid = this.props.match.params.uidA;
        const res = await axios.get(`/api/user/${uid}`);
        if(res.data){
            this.showUser(res.data);
        } else {
            alert("No user is found with given id");
        }
    }

    showUser = (user) => {
        const {username, email, firstName, lastName, password} = user;
        this.setState({
            username, 
            email, 
            firstName, 
            lastName, 
            password, 
            oldUsername: username
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async e => {
        e.preventDefault();
        const {username, email, firstName, lastName, password, oldUsername} = this.state;
        if(username !== oldUsername) {
             // Check if username is available
            const res = await axios.get(`/api/user?username=${username}`);
            if(res.data){
                alert("Username is taken, please try another one");
                return;
            } 
        }
        const newUser = {
            _id: this.props.match.params.uid,
            username,
            password,
            email,
            firstName,
            lastName
        }
        await axios.put("/api/user", newUser);
        alert("Update Successfully")
    }

    

    render() {
        const {username, email, firstName, lastName} = this.state;
        return (
            <div className="background">
           
                <div className="container">
                    <form id="profileForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                placeholder="Enter or edit your username..."
                                className="form-control"
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="Enter or edit your email address..."
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                placeholder="Enter or edit your first name..."
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={this.onChange}
                            />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                placeholder="Enter or edit your last name..."
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={this.onChange}
                            />
                        </div>
                        <Link
                            className="btn btn-primary btn-block"
                            to={`/user/${this.props.match.params.uid}/website`}
                        >
                         
                        </Link>
                        <Link to="/login" className="btn btn-danger btn-block">
                       Register
                        </Link>
                    </form>
                </div>
                
                    <Link to="/Profile">
                    
                    </Link>
          
            </div>
        );
    }
}
