import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="mb-8">
      <h2 className="text-center font-bold text-6xl lg:text-8xl  ">{title}</h2>
    </div>
  );
};

export default Title;
