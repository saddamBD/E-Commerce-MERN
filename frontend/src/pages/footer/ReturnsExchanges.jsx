const ReturnsExchanges = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Returns & Exchanges</h1>
        <p className="text-gray-400 mb-4">
          We want you to be fully satisfied with every purchase, and we’re here to help make returns or exchanges as simple as possible.
        </p>

        {/* Return Policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          <p className="text-gray-300 mb-2">
            Items can be returned within 30 days of purchase for a full refund or exchange. Items must be in their original condition and packaging.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Return shipping costs are covered for defective items.</li>
            <li>Returns for other reasons will require the customer to cover return shipping.</li>
            <li>Refunds are processed within 5-7 business days after receiving the returned items.</li>
          </ul>
        </section>

        {/* Eligibility for Returns Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
          <p className="text-gray-300 mb-2">
            To qualify for a return or exchange, your item must meet the following criteria:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Item must be in new, unused condition with tags attached.</li>
            <li>Item must be in the original packaging without any damage.</li>
            <li>Proof of purchase (order number or receipt) is required.</li>
          </ul>
        </section>

        {/* How to Initiate a Return or Exchange Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return or Exchange</h2>
          <p className="text-gray-300 mb-2">
            Follow these steps to start a return or exchange:
          </p>
          <ol className="list-decimal pl-5 text-gray-300 space-y-2">
            <li>Contact our support team with your order details.</li>
            <li>Our team will provide instructions for return shipping.</li>
            <li>Ship the item back to the address provided.</li>
            <li>Once received, we will process the refund or send out an exchange item.</li>
          </ol>
        </section>

        {/* Non-Returnable Items Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
          <p className="text-gray-300 mb-2">
            Certain items are not eligible for return or exchange, including:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Final sale items</li>
            <li>Gift cards</li>
            <li>Personalized or custom-made items</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-300">
            If you have any questions regarding returns or exchanges, please reach out to our support team at{' '}
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

export default ReturnsExchanges;
