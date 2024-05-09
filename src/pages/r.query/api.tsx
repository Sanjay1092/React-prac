export const apiData = async()=>{
   try {
    const response = await fetch('https://dummyjson.com/products/1')
     if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
    const jsonData = response.json()
    console.log(response.json());
    return jsonData
   } catch (error) {
    console.log(error);
    
   }
}