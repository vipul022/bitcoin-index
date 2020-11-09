import React from 'react'

const DataDisplay = ({data}) =>{
    return (
        <div>
            {Object.keys(data).map((date)=>
                <div key={date}>Date: {date} Value: {data[date]}</div>
            )}
        </div>

    );
}

export default DataDisplay