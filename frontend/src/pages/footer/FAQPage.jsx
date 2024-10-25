
const FAQPage = () => {
  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any item within 30 days of purchase. Ensure the product is in its original packaging with all tags intact.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days. You can track your order using the tracking link provided after purchase.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number. Use this number to track your order on our website.",
    },
    {
      question: "Can I change my delivery address?",
      answer:
        "Yes, you can update your delivery address before your order is shipped. Please contact our support team for assistance.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards such as Visa, MasterCard, and PayPal.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Help & FAQs</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
