
const Button = ({ onClick, children }) => {
    return (
      <div className="flex items-center justify-center">
        <button className="bg-purple-600 text-white py-2 px-6 my-10 rounded hover:bg-purple-500"
        onClick={onClick}
      >
        {children}
      </button>
      </div>
    )
  }
  
  export default Button