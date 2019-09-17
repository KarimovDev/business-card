import { Component } from 'react';
import { getDifferenceInDays } from '../helpers/dates';

class Age extends Component {
    constructor() {
        super();
        this.age = ~~(getDifferenceInDays(new Date(1990, 8, 30)) / (365.25));
    }

    render() {
        return (
            <p>
                I am {this.age} years old.
            </p>
        );
    }
}

export default Age;
