// import React from 'react';
import logo from '../assets/logo.png'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About MealMates</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to MealMates, your ultimate food ordering destination. Our mission is to bring delicious meals
          from your favorite local restaurants straight to your doorsteps quickly and conveniently.
        </p>
        <img src={logo} alt="MealMates" className="mb-4 rounded-lg shadow-lg" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2021, MealMates was born out of a passion for great food and a desire to support local restaurants.
          We started with a small team of food enthusiasts who wanted to make it easier for people to enjoy their favorite
          meals at home. Today, we partner with hundreds of local restaurants to bring you a diverse range of cuisines.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-4">
          At MealMates, we believe that everyone deserves a great meal without the hassle of cooking or dining out. 
          Our mission is to provide a seamless and enjoyable food ordering experience, connecting you with the best local 
          eateries and delivering your favorite dishes with care.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 text-left">
          <li>Wide variety of cuisines from local restaurants</li>
          <li>Fast and reliable delivery service</li>
          <li>Easy-to-use app interface</li>
          <li>Frequent promotions and discounts</li>
          <li>Committed to supporting local businesses</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h3>
        <p className="text-lg text-gray-700 mb-4">
          Become a part of the MealMates community today. Whether you’re craving comfort food, exploring new cuisines,
          or simply looking for a convenient way to enjoy a meal, we’ve got you covered. Thank you for choosing MealMates!
        </p>
      </div>
    </div>
  );
};

export default About;
