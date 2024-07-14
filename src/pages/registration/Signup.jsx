import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import Mycontext from '../../context/data/Mycontext';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

import { fireDB } from '../../firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';


function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(Mycontext);
    const { loading, setLoading } = context;

    const signup = async () => {
        if (name === '' || email === '' || password === '') {
            return toast.error("Please fill all the fields");
        }
        
        try {
            setLoading(true);
            const users = await createUserWithEmailAndPassword(auth, email, password);
            console.log(users);
            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email, 
                time: Timestamp.now(),
                
            }
            const userRef = collection(fireDB, "users");
            await addDoc(userRef, user);
            toast.success("Accounted created successfully");
            setName("");
            setEmail("");
            setPassword("");
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error("Account creation failed");
        }
        setLoading(false);
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            {
                loading && <Loader/>
            }
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Account-Create Then Login</h1>
                </div>
                <div>
                    <input type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={signup}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Create
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup