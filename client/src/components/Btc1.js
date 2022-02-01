import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Btc1=()=> {
    const [posts, setPosts]=useState([])
    
    const getPosts = async () => {
        try {
        const userPosts = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    
        setPosts(userPosts.data);  // set State
  
        } catch (err) {
        console.error(err.message);
        }
    };
  
    useEffect(()=>{
    
        getPosts()
        const interval=setInterval(()=>{
          getPosts()
         },10000)
           
           
         return()=>clearInterval(interval)
    },[])
    
    return (
        <div class="bitcoin">
            <br/>
            {posts.chartName} rate: 
            <br/>
            <br/>
            Valeur: {posts.bpi?posts.bpi.EUR.rate:"chargement"}€
            <br/>
            Mis à jour le: {posts.time?posts.time.updated:"chargement"}
            <br/>
            <br/>
        </div>
    );
}
export default Btc1;