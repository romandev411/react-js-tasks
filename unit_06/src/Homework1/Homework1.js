import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            s1: props.p1,
        }
        this.s2 = 201;
    }

    componentDidMount() {
        this.increase(5);
    }

    buttonHander = () => {
        this.increase(50);
    }

    increase(num) {
        let valS1 = this.state.s1;

        this.setState({
            s1: valS1 = valS1 + num,
        });

        this.s2 = this.s2 + num;
    }

    render() {
        return (
            <>
                <div>{this.state.s1}</div>

                <div>{this.s2}</div>

                <button onClick={this.buttonHander}>Press</button>
            </>
        )
    }
}

export default Homework1;
