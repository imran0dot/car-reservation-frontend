import React, { ReactNode } from 'react';
import { FaCar, FaCarCrash, FaMoneyBillAlt, FaUserShield, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';


interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const IconBox: React.FC<FeatureItem> = ({ icon, title, description }) => {
  return (
    <div className="flex justify-start items-start gap-3">
      <div className="feature-icon text-2xl mb-4 bg-indigo-600 text-indigo-100 p-2 -skew-x-6">{icon}</div>

      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

    </div>
  );
};

const ChooseUsSection = () => {
  const chooseUsList = [
    {
      icon: <FaCar />,
      title: 'Extensive Fleet Selection',
      description: 'We offer a wide variety of vehicles to suit any occasion, from compact cars',
    },
    {
      icon: <FaCarCrash />,
      title: '24/7 Roadside Assistance',
      description: 'Your safety is our priority. With 24/7 roadside assistance, you can drive confidently',
    },
    {
      icon: <FaMoneyBillAlt />,
      title: 'Affordable Pricing',
      description: 'Our transparent pricing ensures you get the best value with no surprises',
    },
    {
      icon: <FaUserShield />,
      title: 'Exceptional Cost Service',
      description: 'Our dedicated team is always ready to assist you with any questions or concerns',
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Easy and Fast Booking',
      description: 'Our streamlined online booking system makes renting a car quick and hassle-free',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Convenient Locations',
      description: 'We have multiple convenient pick-up and drop-off locations, including major airports',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
      {chooseUsList.map((feature, index) => (
        <IconBox
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default ChooseUsSection;