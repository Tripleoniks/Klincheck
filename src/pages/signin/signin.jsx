import {useState} from "react"
import axios from "axios";


const Signin = () => {

const   [email, setEmail] = useState('');
const   [password, setPassword] = useState('');

const userData = {
    "email" : email,
    "password": password
}

const submit = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios.post("http://giropay.xyz/api/v1/giro-app/auth/register", userData);
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

    return ( 
        <div>
           <form onSubmit={submit} >

               <input type="text"  name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
               <input type="password"  name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
               <button>submit</button>
           </form>
        </div>
     );
}
 
export default Signin;