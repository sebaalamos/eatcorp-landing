type LogoProps = {
  size?: number
  showText?: boolean
  textColor?: string
}

export function Logo({ size = 40, showText = true, textColor = 'text-slate-100' }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        width={size}
        height={size}
        className="flex-shrink-0"
      >
        <defs>
          <clipPath id="eatcorp-logo-clip">
            <rect width="64" height="64" rx="13" />
          </clipPath>
        </defs>
        <g clipPath="url(#eatcorp-logo-clip)">
          <rect width="64" height="64" fill="#10b981" />
          <path d="M44 0 H64 V20 Z" fill="#e1623d" />
          <path d="M19 16 H45 V24 H27.5 V28 H41 V35 H27.5 V40 H45 V48 H19 Z" fill="#faf7f2" />
        </g>
      </svg>
      {showText && (
        <span className={`text-2xl font-bold ${textColor}`}>EatCorp</span>
      )}
    </div>
  )
}
