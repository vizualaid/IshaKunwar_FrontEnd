// import React, { useState } from "react";

// export const Form = () => {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [password, setPassword] = useState("");
//     const [country, setCountry] = useState("India");
//     function handleChange(e) {
//         setCountry(e.target.country);
//     }
//     console.log(country)
//     const style = {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     };
//     function handleSubmit(e) {
//         // const passwordinput = e.target.value; 
//         // if (passwordinput.length < 8) { 
//         // alert("Password must be at least 8 characters"); 
//         // } else { 
//         // alert(`the name of user is: ${name}`); 
//         // } 
//         alert(`The name of user is: ${name}`);
//     }
//     return (
//         <div style={style}>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <label for="name">Name:</label>
//                     <input
//                         type="text"
//                         placeholder="name"
//                         value={name}
//                         onChange={(e) => {
//                             setName(e.target.name);
//                         }}
//                         required
//                     ></input><br /><br />
//                     <label for="age">Age:</label>
//                     <input
//                         type="number"
//                         placeholder="Age"
//                         value={age}
//                         onChange={(e) => {
//                             setAge(e.target.age);
//                         }}
//                         required
//                     ></input><br /><br />
//                     <label for="password">Password:</label>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => {
//                             setPassword(e.target.password);
//                         }}
//                         required
//                         minLength={8}
//                     ></input><br /><br />
//                     <select value={country} onChange={handleChange}>
//                         <option value="India">India</option>
//                         <option value="Russia">Russia</option>
//                         <option value="Newyork">Newyork</option>
//                     </select><br /><br />
//                     {/*<textarea></textarea>*/}
//                     <button type="submit">submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };
// // export default Form;
import React, { useState } from 'react';

function Form() {
  // Controlled components using useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Uncontrolled component
  let messageInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    alert(`Thank you for submitting the form, ${name}!`);
    setName('');
    setEmail('');
    messageInput.current.value = '';
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageInput}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
