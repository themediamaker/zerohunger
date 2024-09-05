import React from 'react';

const MidDayMealsSection  = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-gray-800 p-8 sm:p-12 lg:p-16 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 border-b-4 border-orange-600 pb-4">
          Mission Zero Hunger: Uniting a Billion People for 3 Billion Meals a Day
        </h1>

        <p className="text-lg leading-relaxed text-center mb-8">
          At Mission Zero Hunger, we are driven by a singular, transformative goal: to eradicate hunger and ensure that everyone has access to nutritious food. Our byline, "Uniting a Billion People for 3 Billion Meals a Day," captures the scale and scope of our mission: mobilizing a global community to address one of the most pressing issues of our time and to create a world where hunger is a thing of the past.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-500 pb-2">
              Our Vision: 3 Billion Meals a Day
            </h2>
            <p className="text-lg leading-relaxed">
              Our target of providing 3 billion meals each day highlights the magnitude of our commitment to tackling hunger. The current global population is approximately 8 billion people, and a significant portion of this population faces food insecurity. By focusing on delivering 3 billion meals a day, Mission Zero Hunger aims to ensure that a substantial percentage of this need is met, providing immediate relief and laying the foundation for long-term food security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-orange-500 pb-2">
              The Power of Collective Effort: Uniting a Billion People
            </h2>
            <p className="text-lg leading-relaxed">
              To achieve this monumental goal, we are calling upon one billion people to join our movement. Uniting a billion individuals is not just about numbers; it’s about harnessing diverse talents, resources, and networks to create a powerful force for change. Your support, whether through time, resources, or advocacy, is crucial in achieving our goal. Here’s how you can be a part of this transformative effort:
            </p>

            <ul className="list-disc pl-5 space-y-4 mt-4">
              <li className="text-lg leading-relaxed">
                <strong>Provide Meals:</strong> You can contribute directly by donating meals. Whether you’re an individual, a business, or an organization, your meal donations will go a long way in providing essential nutrition to those in need.
              </li>
              <li className="text-lg leading-relaxed">
                <strong>Gift in Cash or Kind:</strong> Financial contributions are crucial for supporting the logistics and procurement of food supplies. Your monetary donations help us purchase, store, and distribute food effectively. Additionally, donating food items, non-perishable goods, or other resources can directly support our meal distribution efforts. Every bit helps in getting us closer to our goal of 3 billion meals a day.
              </li>
              <li className="text-lg leading-relaxed">
                <strong>Help with Distribution:</strong> Efficient distribution is key to reaching those who need it most. Volunteer your time or resources to assist in the logistics of food distribution. This could involve helping with sorting and packing food, coordinating delivery routes, or working with local agencies to ensure timely and effective delivery. Your time and effort can make a significant difference in our operations.
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              By harnessing the power of a million dedicated people, we create a multiplier effect that amplifies our resources and reaches more individuals in need. This collective action is essential for scaling up operations, optimizing supply chains, and ensuring that food distribution is both efficient and equitable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-4 border-b-2 border-orange-500 pb-2">
              Join Us in Making History
            </h2>
            <p className="text-lg leading-relaxed">
              Mission Zero Hunger is more than an initiative or campaign; it’s a call to action. By uniting a billion people, we can turn our ambitious goal of 3 billion meals a day into a reality. Each contribution, whether big or small, is crucial in building a world where no one goes hungry.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Together, we have the power to make a lasting difference. Join us in this vital mission to end hunger and to create a more equitable world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidDayMealsSection ;
