import  { useState } from "react"; 
import Userlist from "./userList";


export default function RegisterForm() {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setage]=useState("");
    const [password, setPassword] = useState("");
   
    
    const [userList, setuserList] = useState([])   
    function handleSubmit (e) {   
      e.preventDefault();
    console.log( firstName, middleName, lastName, email, gender,  password);
      setuserList([...userList, {firstName, middleName, lastName, email, gender,  password}]);
  }
    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-6 w-2/3 mx-auto p-4 border border-1 m-6 border-yellow-500 rounded-lg">
          <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
          <div className="mb-6">
            <label
              htmlFor="FirstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="FirstName"
              id="FirstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              onChange = {(e) => { setFirstNam(e.target.value)}}
              required
            />
          </div>
          <label
              htmlFor="MiddleName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              MiddleName
            </label>
            <input
              type="MiddleName"
              id="MiddleName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              onChange = {(e) => { setMiddleName(e.target.value)}}
              required
              />

           <label
              htmlFor="LastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="LastName"
              id="LastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              onChange = {(e) => { setLastName(e.target.value)}}
              required
              />

            
             <label
             htmlFor="Email"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
           >
             Email
           </label>
           <input
             type="Email"
             id="Email"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
             onChange = {(e) => { setEmail(e.target.value)}}
             required
             />
            
            <label
             htmlFor="Gender"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
           >
             Gender
           </label>
           <input
             type="Gender"
             id="Gender"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
             onChange = {(e) => { setGender(e.target.value)}}
             required
  />


           <label
            htmlFor="Password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="Password"
            id="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            onChange = {(e) => { setPassword(e.target.value)}}
            required
            />


          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <Userlist userlist={userList} />
      </>
    );
}