import React from 'react';

const Cat = (props) => {
    console.log(props.match);
    return (
        <div>
            내 고양이 이름은 "{props.match.params.cat_name}"랸다.
        </div>
    );
}

export default Cat;