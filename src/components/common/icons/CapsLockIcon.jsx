const CapsLockIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19h6"/>
    <path d="M9 15v-3H5l7-7 7 7h-4v3H9z"/>
  </svg>
);

export default CapsLockIcon; 