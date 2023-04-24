import React from "react";
import styles from '../style'

const Contact = () => {
  const inputStyle = {
    backgroundColor: 'red', // Change this to the desired color
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none'
  };
  return (
    <div className="flex flex-row" >
        <div>
            <h1 className={styles.heading2}>Already a customer?</h1>
            <h2 className={`${styles.paragraph} mt-6 max-w-[500px]`}>At Vertex Cars, we highly value your thoughts - please take a moment to share your feedback with us and tell us more about your experience.</h2>
        </div>

        <div className="flex flex-col sm:ml-0 md:ml-[400px] xl:ml-[450px] " style={{display:'flex',justifyContent:'flex-end'}}>
          <form
            action="https://formspree.io/f/mrgvondo"
            method="POST"
            className="contact-inputs mt-[40px]">
            <div  className="mt-3 flex-row">
                <div className="flex flex-row">
                <h2 className={`${styles.paragraph} text-[14px]`}>First name</h2>
                <h2 className={`${styles.paragraph} text-[14px] ml-[93px]`}>Last name</h2>
                </div>
                
            <input
            style={{width: "150px",backgroundColor:"#272727",color:"white" }}
              type="text"
              name="first_name"
              placeholder="  First Name"
              autoComplete="off"
              required
            />
            <input
            style={{width: "150px",backgroundColor:"#272727",color:"white" }}
              type="text"
              name="last_name"
              placeholder="  Last Name"
              autoComplete="off"
              required
              className="ml-4"
            />
            </div>
            
            <div className="mt-3">
            <h2 className={`${styles.paragraph} text-[14px]`}>email-Id</h2>
            <input
            style={{width: "316px",backgroundColor:"#272727",color:"white" }}
              type="email"
              name="Email"
              placeholder="  Email"
              autoComplete="off"
              required
            />
            </div>
           
            <div className='mt-3'>
            <h2 className={`${styles.paragraph} text-[14px]`}>Feedback</h2>
            <textarea
            style={{backgroundColor:"#272727",color:"white" }}
              name="message"
              cols="41"
              rows="3"
              autoComplete="off"
              placeholder="  Tell us about your experience..."
              required></textarea>
            </div>
            

            <input type="submit"  value="Submit" className={`py-1.5 px-4 bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded mt-4 ${styles}`}/>
          </form>
        </div>
    </div>
  );
};

export default Contact;