import React, { useState } from 'react';
import joinTheMovement from '../assets/images/join-the-movement.jpg';

const JoinTheMovement = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Submitting email:', email);
      setIsSubmitted(true);
      setEmail('');
      // Reset submission state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="flex flex-col py-10 w-11/12 mx-auto mb-10">
      <h1 className="main-heading text-5xl text-zu-pink mx-auto mt-15 mb-10 text-center">
        Join The Movement
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image container */}
        <div className="h-auto w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={joinTheMovement}
              alt="join"
              className="w-full h-60 md:h-72 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold main-heading text-zu-pink">Stay Connected</h2>
          <p className="text-gray-700 mb-6 body-text">
          Join our community and stay in the loop with everything happening at Zu. When you subscribe to our newsletter, you'll receive exclusive updates on upcoming events, exciting new initiatives, behind-the-scenes stories, and meaningful ways you can get involved. Whether you're passionate about making a difference, curious about our journey, or looking to connect with like-minded individuals, our newsletter is the perfect way to stay connected
          </p>

          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <span className="block sm:inline">Thank you for subscribing!</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zu-pink transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-zu-pink text-white font-medium rounded-md transition-all duration-300 hover:bg-opacity-80 hover:shadow-lg hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovement;
