import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_txprokj", // EmailJS Service ID
            "template_s5yu62h", // EmailJS Template ID
            formData, 
            "Xf0PgVhiG3pjrCNxZ" // EmailJS Public Key
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                setFormData({ email: "", name: "", message: "" });
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Something went wrong!");
            }
        );
    };

    return (
        <div>
            <section className="contact-form">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Me
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Contact me or send a message with questions and suggestions.
                    </p>
                    <form onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Your message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 border"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
