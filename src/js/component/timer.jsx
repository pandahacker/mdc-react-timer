import React from 'react';

export class Timer extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    componentDidMount() {
        this.timer = setInterval(this.myTimer.bind(this), 1000);
    }

    myTimer() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    render(){
        return(
            <div className="container">           
                <div className="timer text-center">
                    <h1>You have been on this page for {this.state.seconds} seconds.</h1>
                </div>
            </div>
        );
    }

}