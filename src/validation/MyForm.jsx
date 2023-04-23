import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setage] = useState("");
  const [password, setPassword] = useState("");
    const [country, setCountry] = useState("India");
  const emailPattern = /^[0-9]+#[a-zA-Z]+[*][a-zA-Z0-9]+$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert(`The name you entered was: ${name}`)
    if (emailPattern.test(email)) {
      alert("Email is valid.")
       } else {
        alert("Email is not valid.")
       }
  }
  // const email = "1234#gmail*com";


  return (
    <form onSubmit={handleSubmit}>
        <p>"1234#gmail*com" format </p>
        <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onChange={(e) => setCountry(e.target.country)}
         
        />
        </label>
        <br /><br />

        
        
        <label>Enter your Email:
        
         <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label><br /><br />
        <label>Enter your age:
        <input
          type="Number" 
          value={age}
          onChange={(e) => setage(e.target.value)}
        />        
        </label><br /><br />
        <label for="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.password);
                        }}
                        required
                        minLength={8}
                    ></input><br /><br />
                    <select value={country} onChange={(e) => setCountry(e.target.country)}>
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="Newyork">Newyork</option>
                    </select><br /><br />
        <input type="submit" />
      
    
    </form>
  )
}
export default MyForm
