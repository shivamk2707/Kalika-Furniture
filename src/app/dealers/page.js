"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandshake, FaStore } from "react-icons/fa";

const DealersPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    emailId: "",
    pincode: "",
    stateName: "",
    cityName: "",
    preferredTime: "",
    locationPreference: "",
    ownFranchisee: "No",
    ownRetailSpace: "No",
    propertyAvailability: "",
    areaOfProperty: "",
    businessExperience: "",
    investmentCapacity: "",
    currentBusiness: "",
    targetMarket: ""
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
    console.log("Dealer enquiry submitted:", formData);
    alert("Thank you for your interest in becoming a dealer! We will contact you soon.");
    // Reset form
    setFormData({
      fullName: "",
      mobileNo: "",
      emailId: "",
      pincode: "",
      stateName: "",
      cityName: "",
      preferredTime: "",
      locationPreference: "",
      ownFranchisee: "No",
      ownRetailSpace: "No",
      propertyAvailability: "",
      areaOfProperty: "",
      businessExperience: "",
      investmentCapacity: "",
      currentBusiness: "",
      targetMarket: ""
    });
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Become a <span className="text-yellow-900">Kalika Dealer</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our network of successful dealers and grow your business with India&apos;s leading furniture brand. 
            Partner with us for exclusive products, marketing support, and profitable opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dealer Benefits */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Dealer Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaHandshake className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Exclusive Territory Rights</h4>
                    <p className="text-gray-600 text-sm">Get exclusive dealership rights for your area with protected territory.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaStore className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Marketing Support</h4>
                    <p className="text-gray-600 text-sm">Complete marketing and promotional support including advertising materials.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaPhone className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Training & Support</h4>
                    <p className="text-gray-600 text-sm">Comprehensive training programs and ongoing business support.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-900/10 p-3 rounded-full">
                    <FaEnvelope className="text-yellow-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Products</h4>
                    <p className="text-gray-600 text-sm">Access to premium quality furniture with competitive pricing.</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Contact Our Team</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-yellow-900" />
                    <span className="text-gray-600">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-yellow-900" />
                    <span className="text-gray-600">dealers@kalikaindustries.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-yellow-900 mt-1" />
                    <span className="text-gray-600">Kalika Industries, Industrial Area, Sector 12, New Delhi - 110001</span>
                  </div>
                </div>
              </div>

              {/* Investment Requirements */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Investment Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Minimum 1000-2000 sq ft showroom
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Investment: ₹5-15 Lakhs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Business experience preferred
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-900 rounded-full mr-3"></span>
                    Prime location in city center
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dealer Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Register for Kalika Dealership</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
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
                      Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Id <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email address"
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
                    <p className="text-sm text-blue-500 mt-1 flex items-center">
                      <span className="mr-1">ℹ️</span>
                      Enter Pincode for State & City
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      State Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="stateName"
                      value={formData.stateName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter state name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      City Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cityName"
                      value={formData.cityName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter city name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Preferred time for discussion <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Location Preference <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="locationPreference"
                      value={formData.locationPreference}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                      placeholder="Enter preferred location"
                    />
                  </div>
                </div>

                {/* Business Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Business Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="businessExperience"
                      value={formData.businessExperience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select experience</option>
                      <option value="No Experience">No Experience</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5-10 Years">5-10 Years</option>
                      <option value="Above 10 Years">Above 10 Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Investment Capacity <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="investmentCapacity"
                      value={formData.investmentCapacity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select investment range</option>
                      <option value="₹2-5 Lakhs">₹2-5 Lakhs</option>
                      <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                      <option value="₹10-15 Lakhs">₹10-15 Lakhs</option>
                      <option value="₹15-25 Lakhs">₹15-25 Lakhs</option>
                      <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                    </select>
                  </div>
                </div>

                {/* Current Business */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Current Business/Profession
                  </label>
                  <input
                    type="text"
                    name="currentBusiness"
                    value={formData.currentBusiness}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    placeholder="Describe your current business or profession"
                  />
                </div>

                {/* Radio Button Questions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">
                      Do you own any franchisee
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ownFranchisee"
                          value="Yes"
                          checked={formData.ownFranchisee === "Yes"}
                          onChange={handleInputChange}
                          className="mr-2 text-yellow-900"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ownFranchisee"
                          value="No"
                          checked={formData.ownFranchisee === "No"}
                          onChange={handleInputChange}
                          className="mr-2 text-yellow-900"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">
                      Do you own a retail space
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ownRetailSpace"
                          value="Yes"
                          checked={formData.ownRetailSpace === "Yes"}
                          onChange={handleInputChange}
                          className="mr-2 text-yellow-900"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ownRetailSpace"
                          value="No"
                          checked={formData.ownRetailSpace === "No"}
                          onChange={handleInputChange}
                          className="mr-2 text-yellow-900"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Property Availability
                    </label>
                    <select
                      name="propertyAvailability"
                      value={formData.propertyAvailability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select property availability</option>
                      <option value="Immediately Available">Immediately Available</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="Within 6 Months">Within 6 Months</option>
                      <option value="Looking for Property">Looking for Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Area of property available
                    </label>
                    <select
                      name="areaOfProperty"
                      value={formData.areaOfProperty}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select area of property</option>
                      <option value="500-1000 sq ft">500-1000 sq ft</option>
                      <option value="1000-2000 sq ft">1000-2000 sq ft</option>
                      <option value="2000-3000 sq ft">2000-3000 sq ft</option>
                      <option value="3000-5000 sq ft">3000-5000 sq ft</option>
                      <option value="Above 5000 sq ft">Above 5000 sq ft</option>
                    </select>
                  </div>
                </div>

                {/* Target Market */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Target Market/Customer Base
                  </label>
                  <textarea
                    name="targetMarket"
                    value={formData.targetMarket}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-900 focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Describe your target market, customer base, or marketing strategy..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Send Dealership Enquiry
                  </button>
                </div>

                {/* Contact Info */}
                <div className="text-center pt-4 border-t">
                  <p className="text-gray-600">
                    Have More Questions? Write to Us at{" "}
                    <a
                      href="mailto:dealers@kalikaindustries.com"
                      className="text-blue-500 hover:underline"
                    >
                      dealers@kalikaindustries.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealersPage;