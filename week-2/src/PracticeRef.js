import React from 'react';

class PracticeRef extends React.Component {
    constructor(props) {
        super(props);

        this.text = React.createRef();
    }

    componentDidMount() {
        console.log(this.text);
        console.log(this.text.current); // current라는 변수에 담겨 있다.
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.text} />
            </div>
        )
    }
}

export default PracticeRef;