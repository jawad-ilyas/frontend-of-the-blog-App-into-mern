// components/FormError.jsx
const FormError = ({ error }) => {
  return (
    error && (
      <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M5.22 5.22a9 9 0 1113.56 13.56A9 9 0 015.22 5.22z"
          />
        </svg>
        <span>{error.message}</span>
      </div>
    )
  );
};

export default FormError;
