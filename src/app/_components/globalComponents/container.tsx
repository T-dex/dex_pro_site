type Props = {
    children?: React.ReactNode;
  };
  
  const Container = ({ children }: Props) => {
    return <div className="container-fluid h-screen justify-center">{children}</div>;
  };
  
  export default Container