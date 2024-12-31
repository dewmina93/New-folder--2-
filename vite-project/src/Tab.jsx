import React from 'react';
import { Link } from 'react-router';
function Tab(props){

    const handleClick=(e)=>{
        props.onTabClick(props._id);
        
    }

    if (props._id==props.selectedCategoryId1) {
        return(<button  className="bg-[#edeef1] px-2 py-1 rounded-md">
            {props.name}
            
        </button>

        )
        
    }else
    return(
        <Link to={`/category/${props.name}`} className="border-[#edeef1] px-2 py-1 rounded-md" onClick={handleClick}>
        {props.name}
         </Link>
    )
}

export default Tab
    
