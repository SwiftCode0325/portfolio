import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);

    emailjs
      .sendForm(
        "service_abr1f04", // Replace with your EmailJS Service ID
        "template_p3ien14", // Replace with your EmailJS Template ID
        event.target,
        "aWnSaPxgnQoVY3GTF" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          Swal.fire({
            icon: "success",
            iconColor: "#0DFC4B",
            title:
              "Thank you for contacting me. It will be a pleasure to work with you!",
            showConfirmButton: true,
            background: "#191a19",
            color: "#fff",
            confirmButtonColor: "#117911",
            backdrop: `
                        rgba(54, 55, 54,0.4)
                    `,
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );

    event.target.reset();
  };

  return (
    <section
      name="Contact"
      className="relative w-full md:h-screen p-4 text-white h-unset"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Contact
          </h2>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            ></textarea>

            <button
              type="submit"
              className="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
