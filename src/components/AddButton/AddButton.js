import React, { Component } from 'react';

export default class AddButton extends Component {

    render() {
        return (

            <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <button onClick={this.props.onClick}><i className="fas fa-plus-circle"></i></button>
            </div>

        );
    }

}