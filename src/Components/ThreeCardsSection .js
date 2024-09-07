import React from 'react';

const ThreeCardsSection = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        The Power of Collective Effort: Uniting a Billion People
      </h2>
      
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
            Provide Meals
          </h3>
          <p className="text-gray-700">
            You can contribute directly by donating meals. Whether you’re an individual, a business, or an organization, your meal donations will go a long way in providing essential nutrition to those in need.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
            Gift in Cash or Kind
          </h3>
          <p className="text-gray-700">
            Financial contributions are crucial for supporting the logistics and procurement of food supplies. Your monetary donations help us purchase, store, and distribute food effectively. Additionally, donating food items, non-perishable goods, or other resources can directly support our meal distribution efforts.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
            Help with Distribution
          </h3>
          <p className="text-gray-700">
            Efficient distribution is key to reaching those who need it most. Volunteer your time or resources to assist in the logistics of food distribution. This could involve helping with sorting and packing food, coordinating delivery routes, or working with local agencies to ensure timely and effective delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsSection;
