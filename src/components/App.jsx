import React, { useState } from "react";

function App() {

  const [inputText , setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){

    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
    setItems( (prevItems) => {
      return [...prevItems , inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange ={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <li key={index} >{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from "react";


//==========================================================
// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       return {
//         ...prevValue,
//         [name]: value
//       };
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           value={contact.fName}
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           name="lName"
//           value={contact.lName}
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           name="email"
//           value={contact.email}
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
