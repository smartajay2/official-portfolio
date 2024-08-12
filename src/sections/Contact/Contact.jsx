import React from 'react'

function Contact() {
  return (
    <section className="flex flex-col items-center  text-black p-6">
      <div className="w-full max-w-lg mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact</h1>
        <form className="space-y-4 ml-8 mr-8 " action="https://formspree.io/f/mrbzkoyg" method="post">
          <div className="formGroup">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="w-full p-2 border-black rounded"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-black rounded "
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              className="w-full p-2 border border-black rounded h-30"
            ></textarea>
          </div>

          <input
            className="w-full p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>

  )
}

export default Contact