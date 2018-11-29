import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';


function avarage(data){
    return  _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        
        <div>
            <Sparklines height={100} width={100} data={props.data}>
                    <SparklinesLine color={props.color} />
            </Sparklines>
            <div>{avarage(props.data)}</div>
        </div>
            
        );
}