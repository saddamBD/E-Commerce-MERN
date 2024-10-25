
const ShippingDelivery = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Shipping & Delivery</h1>
        <p className="text-gray-400 mb-4">
          We’re committed to delivering your orders in the fastest and safest way possible.
        </p>

        {/* Shipping Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <p className="text-gray-300 mb-2">
            All orders are processed and shipped within 1-2 business days of purchase. Once your order is shipped, you’ll receive a confirmation email with tracking details.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Standard Shipping (5-7 business days)</li>
            <li>Expedited Shipping (2-3 business days)</li>
            <li>Next Day Delivery (1 business day)</li>
          </ul>
        </section>

        {/* Shipping Costs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
          <p className="text-gray-300 mb-2">
            Shipping costs vary based on the location and weight of the package. Here’s a quick estimate:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Standard Shipping: $5.00 - Free for orders over $50</li>
            <li>Expedited Shipping: $15.00</li>
            <li>Next Day Delivery: $25.00</li>
          </ul>
        </section>

        {/* International Shipping Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
          <p className="text-gray-300 mb-2">
            We offer international shipping to select countries. Please note that customers are responsible for customs and duties.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>International Shipping (10-20 business days): $20.00 - $40.00</li>
          </ul>
        </section>

        {/* Return & Refund Policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Return & Refund Policy</h2>
          <p className="text-gray-300 mb-2">
            If you’re not satisfied with your purchase, you may return it within 30 days for a full refund.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Items must be unused and in original packaging.</li>
            <li>Refunds will be processed within 5-7 business days after receiving the return.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
          <p className="text-gray-300">
            If you have any questions regarding your order or shipping options, please reach out to our support team at{' '}
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

export default ShippingDelivery;
