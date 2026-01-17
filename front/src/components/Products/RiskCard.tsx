import React from 'react';

type RiskCardProps = {
  risk: 'bajo' | 'medio' | 'alto';
};

const RiskCard = ({ risk }: RiskCardProps) => {
  return (
    <div className="flex gap-2 items-center">
      {
        risk === 'bajo' && (
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        )
      }
      {
        risk === 'medio' && (
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        )
      }
      {
        risk === 'alto' && (
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        )
      }
      <p className="capitalize text-sm text-gray-600 font-semibold">{risk} riesgo</p>
    </div>
  );
};

export default RiskCard;