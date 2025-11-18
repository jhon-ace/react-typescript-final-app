import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Dashboard from "./pages/dashboard";

export default function App() {
  const fullname = localStorage.getItem("fullname");

  return (
    <Routes>
      <Route
        path="/"
        element={fullname ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={fullname ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}






















// import React, { useState } from "react";
// import "./App.css";

// type UserRole = "admin" | "guest";
// interface User {
//   id: number;
//   name: string;
//   role: UserRole;
// }

// interface MathOperation {
//     (x: number, y: number): number;
//   }

// const add: MathOperation = (x, y) => x + y;
// const subtract: MathOperation = (x, y) => x - y;
// const multiply: MathOperation = (x, y) => x * y;
// const divide: MathOperation = (x, y) => (y !== 0 ? x / y : NaN);

// function Calculator() {
//   const [num1, setNum1] = useState<number>();
//   const [num2, setNum2] = useState<number>();
//   const [result, setResult] = useState<number | null>(null);

//   const [user, setUser] = useState<User | null>(null);
//   const [name, setName] = useState<string>("");
//   const [role, setRole] = useState<UserRole>("guest");

//   const handleLogin = () => {
//     if (!name.trim()) {
//       alert("Please enter your name");
//       return;
//     }
//     setUser({ id: 1, name, role });
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setResult(null);
//     setNum1(undefined);
//     setNum2(undefined);
//   };

//   const handleOperation = (operation: MathOperation) => {
//     if (!user || user.role !== "admin") return; 
//     setResult(operation(num1 ?? 0, num2 ?? 0));
//   };

//   if (!user) {
//     return (
//       <div style={{ padding: 20 }}>
//         <h2>Calculator Login</h2>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <select value={role} onChange={(e) => setRole(e.target.value as UserRole)}>
//           <option value="admin">Admin</option>
//           <option value="guest">Guest</option>
//         </select>
//         <br />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     );
//   }

//   if (user.role !== "admin") {
//     return (
//       <div style={{ padding: 20 }}>
//         <p>
//          Welcome, <b>{user.name}</b> ({user.role})
//         </p>
//         <p> Guests cannot use the calculator.</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   }
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Mini - Calculator</h2>
//       <p>
//         Welcome, <b>{user.name}</b> ({user.role}){" "}
//         <button onClick={handleLogout}>Logout</button>
//       </p>

//       Num 1:{" "}
//       <input
//         type="number"
//         value={num1 ?? ""}
//         onChange={(e) => setNum1(Number(e.target.value))}
//       />
//       <br />
//       Num 2:{" "}
//       <input
//         type="number"
//         value={num2 ?? ""}
//         onChange={(e) => setNum2(Number(e.target.value))}
//       />

//       <div style={{ marginTop: 10, border: "1px" }}>
//         <button onClick={() => handleOperation(add)}>+  Add</button>
//         <button onClick={() => handleOperation(subtract)}>-  Subtract</button>
//         <button onClick={() => handleOperation(multiply)}>x Multiply</button>
//         <button onClick={() => handleOperation(divide)}>/ Divide</button>
//       </div>

//       {result !== null && <h3>Result: {result}</h3>}
//     </div>
//   );
// }

// export default Calculator;
















// import React, { useState } from "react";
// import './App.css';

// export default function App() {

//   interface Book {
//     name: string,
//     author: string,
//     year?: number,

//     readonly x: number
//     readonly y: number
//   }

//   const book: Book = {
//     name: "Harry Potter",
//     author: "JK Rowling",
//     x: 45,
//     y: 90
//   }

//   interface MathOperation {
//     (x: number, y: number): number
//   }

//   const Add: MathOperation =(x,y)=> x + y;
//   const Subtract: MathOperation =(x,y) => x - y;

//   interface Person {
//     nationality: string
//   }

//   interface Jhon extends Person {
//     age: number
//   }

//   const ace: Jhon = {
//     nationality: "Pinoy",
//     age: 56
//   }

//   interface Box<Dwight> {
//     value: Dwight, 

//   }

//   const boxes: Box<string> = {
//     value: "Hello Dwight"
//   }

//   const boxes2: Box<number> = {
//     value: 69
//   }

//   //type assertion
//   let grade: unknown = "1";
//   let equivalentGrade: number = (grade as number) + 1;
//   console.log(equivalentGrade)
//  //const assertion

//  let danielsGF = ["Daniela", "Gabriela", "Viola"] as const;
//  danielsGF.push("Matilda");


//  function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p,c) => p + c, 3);
//  }

//   return (
//     <>
//     {add(2,2, 10,4,6,7,3,6,9,8,10,3)} 
    
//     <br/>
//     {danielsGF}
//     <h1>{boxes.value}, {boxes2.value}</h1>
//     <h1>gjjkg</h1>
//     </>
//   )
// }














// import React, { useState } from "react";

// type Operator = "+" | "-" | "*" | "/" | "";

// export default function Calculator() {
//   const [num1, setNum1] = useState<string>("");
//   const [num2, setNum2] = useState<string>("");
//   const [operator, setOperator] = useState<Operator>("");
//   const [result, setResult] = useState<number | null>(null);

//   const calculate = () => {
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);
//     if (isNaN(a) || isNaN(b) || !operator) return;

//     let res: number;
//     switch (operator) {
//       case "+":
//         res = a + b;
//         break;
//       case "-":
//         res = a - b;
//         break;
//       case "*":
//         res = a * b;
//         break;
//       case "/":
//         res = b !== 0 ? a / b : NaN;
//         break;
//       default:
//         return;
//     }
//     setResult(res);
//   };

//   const reset = () => {
//     setNum1("");
//     setNum2("");
//     setOperator("");
//     setResult(null);
//   };

//   return (
//     <div style={{ textAlign: "center", maxWidth: 300, margin: "auto" }}>
//       <h2>Calculator</h2>
//       <input
//         type="number"
//         placeholder="First number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       />
//       <select value={operator} onChange={(e) => setOperator(e.target.value as Operator)}>
//         <option value="">Select</option>
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="*">*</option>
//         <option value="/">/</option>
//       </select>
//       <input
//         type="number"
//         placeholder="Second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />
//       <div style={{ marginTop: 10 }}>
//         <button onClick={calculate}>Calculate</button>
//         <button onClick={reset} style={{ marginLeft: 5 }}>Reset</button>
//       </div>
//       {result !== null && (
//         <h3 style={{ marginTop: 15 }}>
//           Result: {isNaN(result) ? "Error (invalid input or divide by zero)" : result}
//         </h3>
//       )}
//     </div>
//   );
// }







// import {useState} from 'react';
// import './App.css'

// function App() {

//   let name: string = "Alice"; //Explicit Type
//   let name2 = "Wonderland" //Implicit or inferring type directly
//   let age: number = 90;
//   let isTrue: boolean = true;
//   let result: string = "";
//   if(isTrue) {
//     result = "Ok";
//   }
//   let bigValue: bigint = BigInt(4359734095634760);
//   let numbers: number[] = [1,2,3,4]
//   let names: string[] = ["Joy ", " To", " The", " World"];
//   let number1: (number | string)[] = [1 , 2 , " Three", " Four"];
//   let values: number | string | boolean = "dfd";
//   let Person : {
//     name: string,
//     age: number,
//     address: {
//       city: string,
//       brgy: string
//     }
//   } = {name: "Luke", age: 69, address: {city: "panglao",brgy: "tawala"}}
  
//   function addNUmbers(num1: number, num2: number):number {
//     return num1 + num2;
//   }
//   const display = addNUmbers;

//   function greet(name: string, greeting?:string): void {
//     if(greeting){ //calling optional parameter
//         console.log(`${greeting}, ${name}`);
//     } else {
//        console.log(`Hello, ${name}`); //if no optional parameter
//     }
//   }
//   greet("Dwight"); //without optional parameter
//   greet("Dwight", "Gwapoha"); //with optional parameter

//   //custom type
//   type Status = "Single" | "Taken" | "Complicated";
//   let iAmSingle: Status = "Single";
//   let iAmTaken: Status = "Taken";
//   let iAmInComplicated: Status = "Complicated";

//   type Person = {name: string, age: number};
//   type Employee = {id: number, department: string};
//   type EmployeeDetails = Person & Employee;
//   const employee: EmployeeDetails = {
//     name: "Dwight",
//     age: 69,
//     id: 1102,
//     department: "Mens Department"
//   }

//   let data: any = 10;
//   data= "Hello";
//   data: true;

//   let answer: null = null;
//   let behavior: undefined = undefined;

//   let manage: unknown = "BSIT";
//   let length: number;
//   if(typeof manage === "string") {
//     length = manage.length;
//   } else {
//     length = 0;
//   }

//   interface Classmate {
//     name: string,
//     section: string
//   }

//   function haha() {
//     let toDisplay: Classmate = { name: "Jocel", section: "A"};
//     console.log(toDisplay.name, toDisplay.section);
//   }
//   console.log(haha())

//   const noFunction: Classmate = {
//     name: "Matthew",
//     section: "A"
//   } 
//   console.log(noFunction.name, noFunction.section);

//   interface hayskul extends Classmate {
//     grade: number
//   }

//   const displayHayskul: hayskul = {
//     name: "Paldo",
//     section: "Super Ace",
//     grade: 7
//   }
//   console.log(displayHayskul.name, displayHayskul.section, displayHayskul.grade)

//   const [inputValue, setInputValue] = useState<string>("");
//   const [result1, setResult1] = useState<AgeInformation | null>(null);

//   type DisplayResult = "Senior" | "Adult" | "Minor";
//   type AgeInformation = {
//     age: number,
//     description: DisplayResult
//   }

//   function identifyAge(age: number):AgeInformation {
//       let description: DisplayResult = age >= 60 ? "Senior" : age <= 17 ? "Minor" : "Adult";
//       return {age, description};
//   }
  
//   const handleAge = () => {
//     const age = Number(inputValue);
//     if(isNaN(age) || age <= 0) {
//       alert("Invalid Age");
//       return;
//     }
//     setResult1(identifyAge(age));
//     }

//   return (
//     <>
//         <h1>Age Identifier</h1>
//         <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//         <br/>
//         <button onClick={handleAge}> Check Age</button>
//         {result1 && (
//           <div>
//             Age: {result1.age}
//             Description: {result1.description}
//           </div>
//         )}

//         Age: {result1?.age} <br/>
//         Description: {result1?.age}

//         <br/>
//         {length}<br/>
//         {name}, {name2}, {age}, {result}, {bigValue}, {numbers}<br/>
//         {names}, {number1}, {values}, {Person.name}, {Person.age}, {Person.address.city}<br/>
//         {addNUmbers(68, 1)}, {display(67, 1)}, {iAmInComplicated}<br/>
//         {employee.name}, {employee.age}, {employee.id}, {employee.department}
//     </>
//   )
// }

// export default App;

































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
