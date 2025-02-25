import { MouseEventHandler, ReactNode } from "react";

interface Props{
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  children: ReactNode;
}

function Card({onClick, className, children}: Props){
  return (
    <>
      <div className={`${onClick ? "cursor-pointer" : ""} 
                       ${className}
                       w-full bg-white shadow-xl p-10 
                       overflow-hidden rounded-2xl flex justify-center items-center
                    `}
          onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default Card;