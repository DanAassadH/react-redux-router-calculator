import React from 'react';
import { connect } from 'react-redux';

function OldResultsList(props){

    return(
        <div>
            <h2> Previous Claculations</h2>

            <ul>
                {props.resultList.map((calculatedResult) =>{
                    return( <li>{calculatedResult.task}</li>);
                    }
                )}
            </ul>
           
        </div>
    );
}

export default connect(state=>{return{resultList:state}})(OldResultsList);
