"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const CustomersPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    productInterest: "",
    message: "",
    preferredContact: "email",
    budget: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer enquiry submitted:", formData);
    alert("Thank you for your enquiry! We will contact you soon.");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      productInterest: "",
      message: "",
      preferredContact: "email",
      budget: ""
    });
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Customer <span className="text-yellow-900">Enquiry</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your furniture needs. We&apos;re here to help you create the perfect space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaPhone className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaEnvelope className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">sales@kalikaindustries.com</p>
                    <p className="text-gray-600">info@kalikaindustries.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Kalika Industries<br />
                      Industrial Area, Sector 12<br />
                      New Delhi - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaClock className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Why Choose Kalika Furniture?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Premium Quality Materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Custom Design Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Expert Craftsmanship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Timely Delivery
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    After-Sales Support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us your Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter company name (optional)"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter state"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>

                {/* Product Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Product Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select product category</option>
                      <option value="Living Room Furniture">Living Room Furniture</option>
                      <option value="Bedroom Furniture">Bedroom Furniture</option>
                      <option value="Dining Room Furniture">Dining Room Furniture</option>
                      <option value="Office Furniture">Office Furniture</option>
                      <option value="Kitchen Furniture">Kitchen Furniture</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="Home Decor">Home Decor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                      <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="mr-2 text-yellow-900"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="mr-2 text-yellow-900"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleInputChange}
                        className="mr-2 text-yellow-900"
                      />
                      WhatsApp
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message/Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Please describe your requirements, preferred timeline, or any specific questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-yellow-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-800 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaEnvelope />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;