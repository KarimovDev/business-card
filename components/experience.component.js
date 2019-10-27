import { Component } from 'react';
import { getDifferenceInDays } from '../helpers/dates.helper';

class Experience extends Component {
    constructor() {
        super();
        this.expInMonth = ~~(getDifferenceInDays(new Date(2014, 7, 15)) / 30.4375);
    }

    render() {
        return (
            <p>
                I have {this.expInMonth} month of professional developer experience.
            </p>
        );
    }
}

export default Experience;
