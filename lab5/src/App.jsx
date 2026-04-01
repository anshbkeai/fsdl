import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");

  const [pass ,setPassed] = useState(false);

  const[error , setError] = useState("");

   const[loading , setLoading] = useState(false);

   const [hideform , setHidefrom] = useState();

  const handleSubmit = async () => {
      setLoading(true);
      const resp = await validate();

      console.log(resp);
      console.log(name + "  "+ email + " "+phoneNumber);
      
      
      if(resp == true) {
        setPassed(resp);
        setHidefrom(true);
      }

      setLoading(false);
  }

  async function validate() {
    setTimeout(() => {
        console.log("DO Work");
        
    }, 5000); 

    if(name === null || email === null || phoneNumber === null || name === "" || email === "" || phoneNumber==="") {
       setError("Phone Number Or Name or Email cannot be null");
      return false;
    }
    if(phoneNumber.length !== 10 || isNaN(phoneNumber)) {

      setError("Phone number must be 10 digits");
      return false;
    }
    if( !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ) {
       setError("Email Not valid");
       return false;
    }
  
  return true;

  }

  useEffect(() => {
    console.log(name);
    
  },[name])


  return (
    <>
      {
        !hideform && (
           <div className=' '>
              <label htmlFor="name">Name</label>
              <input type='text' onChange={(e) => setName(e.target.value)}  />

              <label htmlFor="email">Email</label>
              <input type='text' onChange={(e) => setEmail(e.target.value)}  />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input type='text' onChange={(e) => setPhoneNumber(e.target.value)}  />

             <button type="button " onClick={handleSubmit}>Submit </button>

             {error != "" && (
                <div>
                    {error}
                </div>
             )}
           </div>
        )
      }

      {
        loading && (
          <div>
            Loading 
          </div>
        )
      }

      {
        pass && (
            <div>
               <p>SuccessFully Submitted From</p>
            </div>
        )
      }
    </>
  )
}

export default App
