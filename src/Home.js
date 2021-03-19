import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    //outputing list to the jsx template
    const [ blogs , setBlogs ] = useState(null);

    const [ isPending, setpending ] = useState(true);

   
    const [name, setName] = useState('mario')
    // function fires on every render/update, every time the state changes
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
            setpending(false)
        })

        },1000)
        .catch((err) => {
            console.log(err.message)
        })
        

    },[name]) //add the empty array when you want useEffect to run nly once.
              //add the function or variable to the empty array you want to bee watched and changed/renderedn when invoked
    // let name = 'Mario';
    //useSTate hook keeps the variable declared in useSte updated 
    // const [name, setName] = useState('mario');
    
    // const handleClick = () => {
        // setName('Luigi') ///varialbe updated
    // }
    
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {/* output list */}
            {isPending && <div>is loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <button onClick={() => setName('luigi')}>change name</button>
            
            <p>{name}</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios blogs"/> */}


            {/* <p>{name}</p>
            <button onClick={handleClick}> Click me</button> */}
        </div>
     );
}
 
export default Home;