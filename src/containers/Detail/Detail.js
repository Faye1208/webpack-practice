import React, {Component} from 'react';

class Detail extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.backHistory= this.backHistory.bind(this);
    }

    backHistory(){
        this.props.history.goBack();
    }

    handleClick () {
        console.log(this.props);
    }

    render () {
        return (
            <div>
                <div onClick={this.backHistory}>返回</div>
                <p onClick={this.handleClick}>the detail params is: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Detail;