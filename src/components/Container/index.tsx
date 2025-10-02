const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-xl bg-bg mx-auto px-4 lg:px-0">{children}</div>;
};

export default Container;
