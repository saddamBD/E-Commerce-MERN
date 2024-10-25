
const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-400 mb-4 text-center">
          Discover more about our journey, our mission, and the values that guide us every day.
        </p>

        {/* Company Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-300">
            Founded in 2024, we’re a dedicated team of innovators, working to bring the best products and services to our customers. Our commitment to quality and customer satisfaction drives us to constantly improve and evolve.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to empower individuals by providing high-quality, innovative solutions that make life easier and more enjoyable. We strive to bring positive change to the communities we serve.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Quality: We’re committed to delivering the highest standards in all that we do.</li>
            <li>Integrity: Transparency and honesty are at the core of our operations.</li>
            <li>Innovation: We continuously seek new ways to improve and create value.</li>
            <li>Customer Focus: Our customers are our priority, and we work to meet their needs in every way.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            Have questions? We’d love to hear from you. Reach out to us at{' '}
            <a href="mailto:saddam.doict@gmail.com" className="text-emerald-400 hover:text-emerald-300">
              saddam.doict@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
