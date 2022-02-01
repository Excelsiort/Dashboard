import React,{useState} from 'react'
import axios from 'axios'

const Act=()=> {
    const [posts, setPosts]=useState([])
    
    const getPosts = async () => {
        try {
        const userPosts = await axios.get('https://www.boredapi.com/api/activity')
    
        setPosts(userPosts.data);
  
        } catch (err) {
        console.error(err.message);
        }
    };
    
    return (
        <div class="activity">
            <br/>
            Activity to do Today: {posts.activity} 
            <br/>
            <br/>
            Type of activity:  {posts.type} 
            <br/>
            <br/>
            <button onClick={getPosts}>Load an idea</button>
        </div>
    );
}
export default Act;