export const getProduct=async()=>{
    try {
        const res= await fetch("http://localhost:8000/product",{
            method:"GET",
             headers:{
            "Content-Type":"application/json",
             },
            
        })
        const data=await res.json()
        return data
        
        
    } catch (error) {
        console.log(error)
    }
    
}

export const getCategory=async (params) => {
    try {
        const res =await fetch("http://localhost:8000/category",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            }
        })

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}