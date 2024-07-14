import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Mycontext from '../../context/data/Mycontext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { useState } from 'react';
import Loader from '../../components/loader/Loader';
import toast from 'react-hot-toast';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(Mycontext);
    const {loading, setLoading, islogin, setIslogin} = context;

    const nevigate = useNavigate();

    const log = async () => {
        setLoading(true);
        if(email === '' || password === ''){
           return toast.error("Please fill all the fields");
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result)); 
            toast.success("Login successful");
            nevigate('/');
            setIslogin(false);

        } catch (error) {
            console.log(error);
            toast.error("Login failed");
        }
        setLoading(false);
    }
   
    return (
        <div className=' flex justify-center items-center h-screen' >
            {
                loading && <Loader/>
            }
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={log}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login