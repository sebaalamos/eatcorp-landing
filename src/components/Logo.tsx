type LogoProps = {
  size?: number
  showText?: boolean
  textColor?: string
}

export function Logo({ size = 40, showText = true, textColor = 'text-gray-900' }: LogoProps) {
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
        <rect width="64" height="64" rx="13" fill="#a31818" />
        <path d="M19 16 H45 V24 H27.5 V28 H41 V35 H27.5 V40 H45 V48 H19 Z" fill="#fef3e2" />
      </svg>
      {showText && (
        <span className={`text-2xl font-bold ${textColor}`}>EatCorp</span>
      )}
    </div>
  )
}
