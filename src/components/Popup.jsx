const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-zu-pink text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-zu-green transition duration-300"
        >
          ×
        </button>

        {/* Video Section */}
        <div className="relative rounded-t-2xl overflow-hidden">
          <video
            className="w-full h-64 object-cover"
            controls
            poster="https://via.placeholder.com/800x400/b24863/ffffff?text=Zu+Bar+Video"
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-zu-pink mb-4">
            Help Us Launch Zu Bar!
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            We're building something incredible – a lounge that's more than just a place to grab drinks. 
            Zu Bar will be the heartbeat of nightlife in our city, where music lovers, creatives, and 
            night owls come together to create unforgettable memories.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            From our signature cocktails crafted by expert mixologists to our carefully curated 
            atmosphere featuring local artists and DJs, every detail is designed to give you an 
            experience you won't find anywhere else. We're talking premium sound systems, 
            Instagram-worthy interiors, and that perfect lighting that makes every moment feel magical.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Your support will help us secure the perfect location, install state-of-the-art equipment, 
            and create the kind of space where every night feels like a celebration. Join our movement 
            and be part of something special from day one!
          </p>

          {/* GoFundMe Button */}
          <div className="text-center">
            <a
              href="https://gofundme.com/your-campaign-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-zu-pink to-zu-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Support Our GoFundMe
            </a>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Every contribution brings us closer to opening our doors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;