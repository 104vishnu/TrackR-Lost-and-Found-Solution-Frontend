import React from "react";
import './Home.scss'

function Home() {
  return (
    <div className="">
      {/* Introduction Section */}
      <div>
        <h1 className="">Welcome to Lost & Found at NIT Trichy</h1>
        <p className="">
          At NIT Trichy, we understand how common it is for students to misplace or lose their belongings.
          Our Lost & Found platform is here to make the process of finding lost items and returning them to their owners more efficient and straightforward.
        </p>
        <img src="images/college.jpg" alt="Lost and Found Banner" className="" />

      </div>

      {/* Lost Items Section */}
      <section className="">
        <h2 className="">Lost Items</h2>
        <p className="">
          Have you lost something on campus? Don't worry! Our Lost Items section is where you can list the items you've lost.
          Provide details about the lost item and leave contact information so that if someone finds it, they can get in touch with you.
        </p>
        <img src="/images/lost.svg" alt="Lost Items" className="inline h-60 rounded-md shadow-lg mb-8" />
        {/* <img src="/images/rr.jpg" alt="Lost Items" className="inline h-60 rounded-md shadow-lg mb-8" /> */}
      </section>

      {/* Found Items Section */}
      <section className="">
        <h2 className="">Found Items</h2>
        <p className="">
          On the flip side, if you find an item on campus, check our Found Items section.
          You can browse through the listed found items and help reunite them with their owners.
          It's a community effort to ensure that lost items find their way back to the right hands.
        </p>
        <img src="/images/login-1.svg" alt="Found Items" className=" " />

      </section>

      {/* How It Works Section */}
      <section className="">
        <h2 className="">How It Works ⚒️?</h2>
        <p className="">
          Using our Lost & Found platform is easy! Here's a quick guide on how it works:
        </p>
        <ul className="">
          <li>Create an account to get started.</li>
          <li>List your lost or found item by providing relevant details and, if possible, an image.</li>
          <li>Get notified when someone posts an item matching your lost item or when your found item is claimed.</li>
        </ul>
        <img src="/images/bannerlostfound.jpg" alt="How It Works" className="" />
      </section>

      {/* Contact Form Section */}
      <section className="">
        <h2 className="">Contact Us/ Feedback 📨📬</h2>
        <p className="">
          If you have suggestions, questions, or just want to say hello, feel free to reach out using the contact form below.
          We appreciate your feedback and are here to assist you!
        </p>
        <img src="/path/to/your_contact_form_image.jpg" alt="Contact Form" className="" />
      </section>
    </div>
  );
}

export default Home;
