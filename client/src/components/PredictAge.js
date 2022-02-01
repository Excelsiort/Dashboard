import React,{useState} from 'react'
import axios from 'axios'

const PredictAge=()=> {

    const [posts, setPosts]=useState([])
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
    const handle = (e) => {
        e.preventDefault();
        setShow(true);
        getPosts();
    };

    const getPosts = async () => {
        try {
        const userPosts = await axios.get('https://api.agify.io/?name=' + value)
    
        setPosts(userPosts.data);  // set State
  
        } catch (err) {
        console.error(err.message);
        }
    };
    
    return (
        <div class="predictage">
            <form action="" onSubmit= {handle}>
                <label htmlFor="age" class="labelform">Choose a name :</label>
                <br/>
                <input type="text" name="name" onChange={(e) => setValue(e.target.value)} value={value}></input>
                <input type="submit" value="Predict!"/>
            </form>
            <br/>
            {show? (
                <p>{posts.name?posts.name:"chargement"} is {posts.age?posts.age:"chargement"} years old</p>
            ) : (
                <div></div>
            )}
        </div>
    );
}
export default PredictAge;