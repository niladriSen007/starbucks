import React from "react";



export const withFeaturedSlider = (FeatureSlider) => {
  // eslint-disable-next-line react/display-name
  return ({ recommendedItem }) => {
    return (
      <div className="relative">
        <p className="absolute top-2 rounded-full left-2 bg-green-800 text-white px-2 py-1 z-30">Best Seller</p>
        <FeatureSlider recommendedItem={recommendedItem} />
      </div>
    );
  };
};
