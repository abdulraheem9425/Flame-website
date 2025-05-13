const Button = ({ children, className = "", ...props }) => {
    return (
      <button className={`p-2 font-semibold ${className}`} {...props}>
        {children}
      </button>
    );
  };
  export { Button };
  