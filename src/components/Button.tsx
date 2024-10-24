function Button({ label = "" }: { label: string }) {
  return (
    <button
      type="button"
      className="w-full rounded-lg text-white bg-cc-grey-700 hover:text-cc-grey-700 hover:bg-cc-green py-3 font-semibold transition-colors duration-150"
    >
      {label}
    </button>
  );
}

export default Button;
