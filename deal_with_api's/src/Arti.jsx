import axios from "axios"


function Arti() {


    var response = axios.get('https://dummyjson.com/users')
    .then(console.log(response.data)).
    catch()



    return (

        <>
            <div>{response}</div>
        </>


    )
}

export default Arti