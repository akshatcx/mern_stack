import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',

        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeVendor = this.onChangeVendor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeVendor(event) {
        this.setState({ vendor: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            vendor: this.state.vendor
        }
        console.log(this.state.vendor);
        axios.post('http://localhost:5000/api/users', newUser)
             .then(res => {
                 console.log(res.data)
                 this.props.history.push('/login');
             })

        this.setState({
            name: '',
            email: '',
            password: '',
            vendor:''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Vendor (true, false): </label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.vendor}
                               onChange={this.onChangeVendor}
                               />  
                    </div>
                    <button type="submit" className = "btn btn-primary">Sign-Up</button>
                    {/* <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div> */}
                </form>
            </div>
        )
    }
}