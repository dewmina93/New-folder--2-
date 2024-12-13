function Tab(props){

    if (props._id==props.selectedCategory) {
        return(<button  className="bg-[#edeef1] px-2 py-1 rounded-md">
            {props.name}
            
        </button>

        )
        
    }
    return(
        <button  className="border-[#edeef1] px-2 py-1 rounded-md">
            {props.name}
            
        </button>
    )
}

export default Tab
    
