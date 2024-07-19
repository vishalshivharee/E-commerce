import React, { useEffect, useState } from 'react'
import Mycontext from './Mycontext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import {fireDB} from '../../firebase/FirebaseConfig';
import { orderBy } from 'firebase/firestore';

function Mystate(props) {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const addproduct = async () => {
    if (products.title === null || products.price === null || products.imageUrl === null || products.category === null || products.description === null) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products)
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      toast.success("add product successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductData();
  },[]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time'),
      )
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({
            id: doc.id,
            ...doc.data()
          })
          setProduct(productArray);
        })
        return () => data;
      })
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  const edithandle = (item) => {
    setProducts(item);
  }

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id),products);  
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      toast.success("Product updated successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products",item.id));
      toast.error("Product deleted successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')


  useEffect(() => {
    getOrderData();
    getProductData();
    getUserData();

  }, []);

  const [islogin, setIslogin] = useState(true);
  return (
    <Mycontext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addproduct, product , edithandle, updateProduct, deleteProduct, order, user, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, islogin, setIslogin}}>
      {props.children}
    </Mycontext.Provider>
  )
}

export default Mystate