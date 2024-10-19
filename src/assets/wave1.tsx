import { LegacyRef, RefObject } from "react";

export default function Wave({ cref }: { cref: LegacyRef<SVGSVGElement> }) {
  return (
    <svg
      width="100%"
      ref={cref}
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7"></stop>
          <stop offset="95%" stopColor="#8ED1FC"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,100 C 106.6602870813397,93.23444976076556 213.3205741626794,86.4688995215311 322,96 C 430.6794258373206,105.5311004784689 541.377990430622,131.35885167464113 615,137 C 688.622009569378,142.64114832535887 725.1674641148326,128.0956937799043 816,124 C 906.8325358851674,119.9043062200957 1051.9521531100477,126.25837320574163 1165,124 C 1278.0478468899523,121.74162679425837 1359.0239234449762,110.87081339712918 1440,100 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7"></stop>
          <stop offset="95%" stopColor="#8ED1FC"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,233 C 92.54545454545456,204.70334928229664 185.09090909090912,176.4066985645933 279,185 C 372.9090909090909,193.5933014354067 468.18181818181813,239.0765550239235 576,260 C 683.8181818181819,280.9234449760765 804.1818181818182,277.2870813397129 897,255 C 989.8181818181818,232.71291866028707 1055.090909090909,191.7751196172249 1141,185 C 1226.909090909091,178.2248803827751 1333.4545454545455,205.61244019138755 1440,233 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
}
