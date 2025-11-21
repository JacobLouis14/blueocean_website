import React from "react";

const Watermark = () => {
  return (
    <div className="absolute z-0 -top-10 left-0 text-primary opacity-3 text-[18rem] font-rakkas w-min h-fit">
      <h6 className="whitespace-nowrap leading-48 verticalWatermarkText select-none pointer-events-none">
        Blue Ocean
      </h6>
    </div>
  );
};

export default Watermark;
