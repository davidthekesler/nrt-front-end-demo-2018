import React, { Component } from 'react';


class ScheduleComponent extends Component {

    constructor() {
        super();
        this.state = {
            //keeps track of form data and variables to control view.
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            error: false,
            loading: false,
            submitted: false,
            errorMessage: '',
        }
    }

    validateEmail(email) {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    sendForm = () => {
        console.log('in send form');
        if ((this.state.firstName === '') && (this.state.lastName !== '') && (this.validateEmail(this.state.email) === true) && (this.state.date !== '')) {
            this.setState({
                error: true,
                errorMessage: 'Please include your first name.'
            })
        } else if ((this.state.lastName === '') && (this.state.firstName !== '') && (this.validateEmail(this.state.email) === true) && (this.state.date !== '')) {
            this.setState({
                error: true,
                errorMessage: 'Please include your last name.'
            })
        } else if ((this.validateEmail(this.state.email) === false) && (this.state.firstName !== '') && (this.state.lastName !== '') && (this.state.date !== '')) {
            this.setState({
                error: true,
                errorMessage: 'Please include a valid email.'
            })
        } else if ((this.state.date === '') && (this.state.firstName !== '') && (this.state.lastName !== '') && (this.validateEmail(this.state.email) === true)) {
            this.setState({
                error: true,
                errorMessage: 'Please include a date.'
            })
        } else if ((this.state.date !== '') && (this.state.firstName !== '') && (this.state.lastName !== '') && (this.validateEmail(this.state.email) === true)) {
            this.setState({
                error: false,
                errorMessage: '',
                loading: true,
                submitted: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })
                }, 3000);

            })
        } else {
            this.setState({
                error: true,
                errorMessage: 'Please make sure all forms are filled out.'
            })
        }
    }

    //uses the name of the user input as a key to set value of user input in state
    handleChange = (inputText) => {
        return (event) => {
            this.setState({
                [inputText]: event.target.value
            });
        }
    }//end handleChange

    errorMessage = () => {
        return (
            <div className="outputItems">
                {this.state.errorMessage}
            </div>
        )
    }

    processing = () => {
        if (this.state.loading) {
            return (
                <div className="loader"></div>
            )
        } else {
            return (
                <div className="thankYou">Thank you!</div>
            )
        }
    }


    formInputs = () => {
        return (
            <div id="inputContainer">
                <div>
                    <div className="inputItems">
                        <input className="input"
                            type="text" onChange={this.handleChange("firstName")}
                            placeholder="First Name" value={this.state.firstName} />
                        <input className="input"
                            type="text" onChange={this.handleChange("lastName")}
                            placeholder="Last Name" value={this.state.lastName} />
                    </div>
                    <div className="inputItems">
                        <input className="input"
                            type="email" onChange={this.handleChange("email")}
                            placeholder="E-mail" value={this.state.email} />
                        <input className="input"
                            type="date" onChange={this.handleChange("date")}
                            placeholder="Date" value={this.state.date} />
                    </div>
                </div>
                <button className="button" onClick={this.sendForm}>
                    SUBMIT</button>
            </div>
        )
    }

    render() {
        return (
            <div id="scheduleSection">
                <p className="titlesText">SCHEDULE APPOINTMENT</p>
                <div id="scheduleDiv">
                    {!this.state.submitted ? this.formInputs() : this.processing()}
                </div>
                {this.state.error ? this.errorMessage() : null}
            </div >
        )
    }//end render  
}//end ScheduleComponent

export default ScheduleComponent;