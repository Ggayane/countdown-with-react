import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    onInputChange(term) {
        this.props.changeDate(term);
    }

    render() {
        return (
            <div className="wrap">
                <input type="number"
                       placeholder="Days to add until the deadline"
                       onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}


export default Input;