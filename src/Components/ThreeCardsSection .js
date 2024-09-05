import React from 'react';

const ThreeCardsSection = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">The Power of Collective Effort: Uniting a Billion People</h2>
      <div className="flex space-x-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-1/3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">Provide Meals</h3>
          <p className="text-gray-700">
            You can contribute directly by donating meals. Whether you’re an individual, a business, or an organization, your meal donations will go a long way in providing essential nutrition to those in need.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-1/3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">Gift in Cash or Kind</h3>
          <p className="text-gray-700">
            Financial contributions are crucial for supporting the logistics and procurement of food supplies. Your monetary donations help us purchase, store, and distribute food effectively. Additionally, donating food items, non-perishable goods, or other resources can directly support our meal distribution efforts.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-1/3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">Help with Distribution</h3>
          <p className="text-gray-700">
            Efficient distribution is key to reaching those who need it most. Volunteer your time or resources to assist in the logistics of food distribution. This could involve helping with sorting and packing food, coordinating delivery routes, or working with local agencies to ensure timely and effective delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsSection;
