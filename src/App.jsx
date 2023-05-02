import "./App.css";
import {useForm , Controller} from "react-hook-form"
import {yupResolver} from "@hookForm/resolvers/yup"
import * as yup from "yup";
import {useState} from "react"





const App = () => {


  const schema = yup.object().shape({

    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: yup
      .string()
      .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Invalid phone number format"),
    gender: yup
      .string()
      .oneOf(["male", "female", "other"], "Please select a gender")
      .required(),
    country: yup
      .string()
      .oneOf(["lebanon", "uae", "qatar", "dubai"], "Please select a country")
      .required(),
    subject: yup.string().required("Subject is required"),
    message: yup.string().max("500").required("Message is required"),
  });

  function onSubmit(data){
    setFirstName(data.firstName)
    setLastName(data.lastName);
    setEmail(data.email);
    setPhoneNumber(data.mobile)
    setGender(data.gender);
    setCountry(data.country)
    setSubject(data.subject)
    setMessage(data.message)
setToggle(true)
  }


  const {register , handleSubmit , formState : {errors}}=useForm({
    resolver:yupResolver(schema),
  })
  

  const [toggle,setToggle]=useState(false)
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")

const [email,setEmail]=useState("")
const [phoneNumber,setPhoneNumber]=useState("")
const [gender,setGender]=useState("")
const [country,setCountry]=useState("")
const [subject,setSubject]=useState("")
const [message,setMessage]=useState("")


 

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
<p className="error">{errors?.firstName?.message}</p>
        <input type="text" placeholder="Name" {...register('firstName')} />
        <p className="error">{errors?.lastName?.message}</p>
        <input type="text" placeholder="LastName" {...register('lastName')} />
        <p className="error">{errors?.email?.message}</p>
        <input type="email" placeholder="Email" {...register('email')} />
        <p className="error">{errors?.mobile?.message}</p>
        <input
          type="tel"
          placeholder="Mobile"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          {...register('mobile')}
        />
<p className="error">{errors?.gender?.message}</p>
        <label>
          Gender: 
          </label> <br />
          <select name="gender" {...register('gender')}>
            <option value="">____Gender____</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        
        <p className="error">{errors?.country?.message}</p>
        <select {...register('country')} name="country" placeholder="Country">
          <option value="" disabled selected>
            Select a country
          </option>
          <option value="lebanon">Lebanon</option>
          <option value="uae">UAE</option>
          <option value="qatar">Qatar</option>
          <option value="dubai">Dubai</option>
        </select>
        <p className="error">{errors?.subject?.message}</p>
        <input {...register('subject')} type="text" placeholder="Subject" />
        <p className="error">{errors?.message?.message}</p>
        <textarea {...register('message')} placeholder="Message"></textarea>
        <p className="error"></p>
        <input type="submit" value="Submit" />
      </form>
      {toggle && 
       <div>
       <p>FirstName : {firstName}</p>
       <p>Last Name : {lastName}</p>
       <p>Email : {email}</p>
       <p>Phone Number : {phoneNumber}</p>
       <p>Gender : {gender}</p>
       <p>Country : {country}</p>
      
       <p>Subject :{subject}</p>
       <p>Message :{message}</p>

     </div>
      
      }
     
    </div>
  );
};

export default App;
