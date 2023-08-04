const IconButton = ({ icon, label }) => {
    return (
      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        {icon}
        <span>{label}</span>
      </button>
    );
  };
  export default IconButton
  