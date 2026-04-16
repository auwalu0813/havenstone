type IconProps = {
  className?: string;
};

export function HamburgerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LocationPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21C15.5 17.1 18 14.1 18 10.8C18 7.04 15.31 4 12 4C8.69 4 6 7.04 6 10.8C6 14.1 8.5 17.1 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20.5L10.7 19.33C5.8 14.94 3 12.41 3 9.3C3 6.77 5.04 4.8 7.58 4.8C9 4.8 10.36 5.46 11.2 6.5C12.04 5.46 13.4 4.8 14.82 4.8C17.36 4.8 19.4 6.77 19.4 9.3C19.4 12.41 16.6 14.94 11.7 19.33L12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="24" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M23 24H40V19H35V14H30V19H23" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 17L16 10L24 17L16 24L8 17Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 17L32 10L40 17L32 24L24 17Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 24L20.5 28.5C22.2 30.2 25 30.2 26.7 28.5L32 23.2M20 20L23 23C24.7 24.7 27.5 24.7 29.2 23L32 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 28L18 34M36 28L30 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 38V14L24 8L38 14V38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 38V28H30V38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 18H18.01M24 18H24.01M30 18H30.01M18 23H18.01M24 23H24.01M30 23H30.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 38H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 33V24M24 33V16M34 33V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18L20 11L27 16L36 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TwitterXIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 10V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19V13.5C12 11.84 13.34 10.5 15 10.5C16.66 10.5 18 11.84 18 13.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13.5 20V12H16.5L17 9H13.5V7.2C13.5 6.33 13.86 6 14.73 6H17V3H14.1C11.38 3 10.5 4.19 10.5 6.45V9H8V12H10.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BedIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 18V9.5A1.5 1.5 0 0 1 4.5 8H8a2 2 0 0 1 2 2v2h8a3 3 0 0 1 3 3v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5 18V20M19 18V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function BathIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12H19V13.5A4.5 4.5 0 0 1 14.5 18H9.5A4.5 4.5 0 0 1 5 13.5V12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 12V7.5A2.5 2.5 0 0 1 9.5 5H10A2 2 0 0 1 12 7V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function AreaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3H3V7M17 3H21V7M21 17V21H17M7 21H3V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8H16V16H8V8Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3V7M16 3V7M4 10H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6.5 4.5L9.5 4C10.1 3.9 10.69 4.22 10.94 4.78L12.2 7.62C12.42 8.11 12.31 8.68 11.93 9.05L10.3 10.69C11.26 12.44 12.67 13.84 14.42 14.8L16.05 13.18C16.43 12.8 17 12.69 17.49 12.91L20.33 14.17C20.89 14.42 21.21 15.01 21.1 15.61L20.6 18.61C20.49 19.28 19.92 19.78 19.24 19.8C15.87 19.9 12.61 18.58 10.02 15.98C7.42 13.39 6.1 10.13 6.2 6.76C6.22 6.08 6.82 4.61 6.5 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 7L12 12.5L19 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FilterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 12H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 18H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.7" />
      <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.7" />
      <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ListIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 7H20M8 12H20M8 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="4.5" cy="7" r="1.2" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="4.5" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 10.9L15.8 6.2M8.2 13.1L15.8 17.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PrintIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 8V4H17V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 16H5A2 2 0 0 1 3 14V10A2 2 0 0 1 5 8H19A2 2 0 0 1 21 10V14A2 2 0 0 1 19 16H17" stroke="currentColor" strokeWidth="1.6" />
      <rect x="7" y="13" width="10" height="7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8L9.4 4.5H14.6L16 6H17.5A2.5 2.5 0 0 1 20 8.5V17A2.5 2.5 0 0 1 17.5 19.5H6.5A2.5 2.5 0 0 1 4 17V8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5.5 15.5L7.2 10.7A2 2 0 0 1 9.08 9.4H14.92A2 2 0 0 1 16.8 10.7L18.5 15.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16.5C4 15.95 4.45 15.5 5 15.5H19C19.55 15.5 20 15.95 20 16.5V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V16.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7.5" cy="17.5" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="17.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
