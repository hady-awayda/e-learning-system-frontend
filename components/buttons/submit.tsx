const Submit = ({
  text,
  handleOpen,
}: {
  text: string;
  handleOpen?: () => void;
}) => {
  return (
    <button
      type="submit"
      onClick={handleOpen}
      className="w-40 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-500"
    >
      {text}
    </button>
  );
};

export default Submit;
