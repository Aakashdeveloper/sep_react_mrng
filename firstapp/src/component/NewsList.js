import React from 'react';

const NewsList = (props) => {
    console.log(props)


    return(
        <div>
            <h2>{props.newsdata}</h2>
        </div>
    )
}
export default NewsList;