import { HTMLProps, VFC } from 'react'

export const MagikCoinIcon: VFC<HTMLProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 255 251"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.5" filter="url(#filter0_f_493_800)">
      <circle
        r="46.3603"
        transform="matrix(1 0 0.197144 0.980375 127.5 125.45)"
        fill="url(#paint0_linear_493_800)"
      />
      <circle
        r="45.8603"
        transform="matrix(1 0 0.197144 0.980375 127.5 125.45)"
        stroke="#333744"
      />
    </g>
    <circle
      r="41.7371"
      transform="matrix(1 0 0.172789 0.984959 127.558 126.384)"
      fill="url(#paint1_linear_493_800)"
    />
    <g filter="url(#filter1_b_493_800)">
      <circle
        r="41.7371"
        transform="matrix(1 0 0.172789 0.984959 131.778 121.109)"
        fill="url(#paint2_linear_493_800)"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M124.242 99.0098L117.29 104.045L108.994 100.461L116.665 118.352L123.449 114.027L122.563 111.961L128.23 108.309L150.125 117.457L146.134 108.149L124.242 99.0098ZM127.457 110.783L135.129 128.673L141.913 124.349L138.059 115.361L127.457 110.783ZM140.806 116.101L148.478 133.991L155.261 129.667L151.407 120.68L140.806 116.101Z"
      fill="url(#paint3_linear_493_800)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M109.031 100.594V106.131L116.151 122.216L116.15 122.217L116.151 122.217L116.151 122.217L116.151 122.217L123.422 118.258L123.449 114.021L116.678 118.262L116.665 118.361L109.031 100.594ZM141.875 124.211L135.105 128.451L135.091 128.552L127.457 110.783V116.321L134.577 132.406L134.588 132.328L134.577 132.407L141.849 128.448L141.875 124.211ZM148.453 133.77L155.224 129.529L155.198 133.766L147.926 137.725L147.959 137.476L147.925 137.726L140.805 121.64V116.103L148.439 133.873L148.453 133.77Z"
      fill="url(#paint4_linear_493_800)"
    />
    <defs>
      <filter
        id="filter0_f_493_800"
        x="0.238281"
        y="0"
        width="254.523"
        height="250.901"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="40"
          result="effect1_foregroundBlur_493_800"
        />
      </filter>
      <filter
        id="filter1_b_493_800"
        x="9.41504"
        y="0"
        width="244.726"
        height="242.219"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="40" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_493_800"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_493_800"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_493_800"
        x1="1.33171"
        y1="2.88426e-06"
        x2="106.007"
        y2="135.716"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4E27B2" />
        <stop offset="0.223958" stopColor="#C300FF" />
        <stop offset="0.432292" stopColor="#B2278B" />
        <stop offset="0.744792" stopColor="#2799A1" />
        <stop offset="1" stopColor="#4E27B2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_493_800"
        x1="41.7371"
        y1="0"
        x2="41.7371"
        y2="83.4741"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4E27B2" />
        <stop offset="0.348958" stopColor="#513991" />
        <stop offset="1" stopColor="#291462" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_493_800"
        x1="31.8179"
        y1="-14.9282"
        x2="66.6036"
        y2="90.2936"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A09FE5" />
        <stop offset="0.713542" stopColor="#4E27B2" />
        <stop offset="1" stopColor="#4800FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_493_800"
        x1="125.293"
        y1="99.0098"
        x2="130.026"
        y2="144.162"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9E8FB" />
        <stop offset="0.291667" stopColor="#BEBDF5" />
        <stop offset="0.760417" stopColor="#D0CEF6" />
        <stop offset="1" stopColor="#4E27B2" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_493_800"
        x1="112.921"
        y1="100.594"
        x2="112.921"
        y2="122.217"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#34337D" />
        <stop offset="0.348958" stopColor="#48489C" />
        <stop offset="1" stopColor="#1D1C54" />
      </linearGradient>
    </defs>
  </svg>
)
