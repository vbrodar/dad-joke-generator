import React, {useState,useEffect} from 'react';
import axios from 'axios';
import oval from "../components/images/oval.svg";

function Card(){
    const [joke,setJoke] = useState("");
    const [loading, setLoading] = useState(true);
    const [fetching, setFetching] = useState(false);


    useEffect(() =>{
        const fetchData = async() =>{
            setLoading(true);

            const result = await axios("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general");

            setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
            setLoading(false);
        }
        fetchData();
    },[fetching])


    return(
        <div>
        {loading ? (<img className="image" src={oval} alt="loader" />) : (<h2>{joke}</h2>) }
        <p onClick={() => setFetching(!fetching)}>Another one!</p>
        </div>
    );
}

export default Card;