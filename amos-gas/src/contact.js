
import React from 'react';

export default function Contact() {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76167.61081029163!2d-2.213467117358862!3d53.374793851327404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spt!4v1681040498723!5m2!1sen!2spt"></iframe>



      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Enquiries and quotes</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Address</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="options" class="leading-7 text-sm text-gray-600">Service</label>
            <select id="options" name="options" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">-- Select an option --</option>
              <option value="option1">Maintenance</option>
              <option value="option2">Repair</option>
              <option value="option3">Installation</option>
            </select>
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
          <p class="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </section>

  )
}