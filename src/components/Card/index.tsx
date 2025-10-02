const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white p-3 md:p-6 mt-6 mb-8 rounded-xl md:rounded-[28px]">{children}</div>;
};

export default Card;
