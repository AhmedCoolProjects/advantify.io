export function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center pt-12">
      <div className="relative w-10/12 h-[180px] sm:h-[400px]">
        <img src="/images/header.png" className="object-contain" alt="Header" />
      </div>
      <div className="arrow-down animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: "#6C5B7B;stop-opacity: 1",
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: "#C06C84;stop-opacity: 1",
                }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
}
