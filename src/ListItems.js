import React from 'react';
import './ListItems.css'
// import {FontAwesomeIcon} from '@fortwesome/react-fontawesome';
function ListItems(props){
    
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className ="list" key={item.key}>
                <p>{item.text}
                <span>
                <button className="faicons" type="button"
                    onClick={() => props.deleteItem(item.key)}>X</button>
                </span>
                </p>
            </div>
        })
        return(
            <div>{listItems}</div>
        )
}
export default ListItems