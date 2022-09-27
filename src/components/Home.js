import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
   /* const history = useHistory();
    const [userRegister, setUserRegister] = useState({
      name: "",
      email : "",
      password: "",
      password2: "",
      mobile:"",
      city:"",
      state:"",
      address:"",
    });
    const handleInput = (e) => {
      const {name,value} = e.target;
  
      setUserRegister({ ...userRegister, [name]: value });
    };
    const signup = ()=>
    {
      const{username,email,password,password2,mobile,city,state,address} = userRegister;
      if(username && email && password && mobile&& city && state && address && (password2 === password)){
      axios.post('http://localhost:3000/',userRegister).then((res)=>
        {
          alert(res.data.message);
          history.push('/');
        })}
        else
        {
          alert("invalid input");
        }
      }*/
  )
}
