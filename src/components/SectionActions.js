import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default class SectionActions extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'http://js.hs-scripts.com/8492701.js';
        document.body.appendChild(script);
    }
    
    render() {
        const actions = _.get(this.props, 'actions');
        return _.map(actions, (action, index) => <Action key={index} action={action} />);
    }
}
