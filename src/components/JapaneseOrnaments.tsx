import React from 'react';

export const DakimaFishCrest: React.FC<{ size?: number; className?: string }> = ({
  size = 72,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer circle */}
    <circle cx="48" cy="48" r="41" stroke="#B59150" strokeWidth="4.2" />
    {/* Intersecting curved arcs forming abstract vertical fish silhouette */}
    <path
      d="M48 8C67 22 67 52 24 79"
      stroke="#B59150"
      strokeWidth="4.2"
      strokeLinecap="round"
    />
    <path
      d="M48 8C29 22 29 52 72 79"
      stroke="#B59150"
      strokeWidth="4.2"
      strokeLinecap="round"
    />
  </svg>
);

export const CrimsonDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`inline-flex items-center gap-2.5 ${className}`}
    aria-hidden="true"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B]" />
    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B]" />
    <span className="h-1.5 w-1.5 rounded-full bg-[#9E2A2B]" />
  </div>
);

export const KumoCloudOrnament: React.FC<{
  className?: string;
  flip?: boolean;
}> = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 220 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${flip ? '-scale-x-100' : ''} ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 46H92C102 46 108 40 108 33C108 26.5 102.5 22 96 22C93 22 90 23 88 24.5C85 16.5 77 11 68 11C57 11 48 19 46.5 29.5C44.5 28.5 42 28 39.5 28C31.5 28 25 34.5 25 42.5"
      stroke="#B59150"
      strokeWidth="1.15"
      strokeLinecap="round"
    />
    <path
      d="M68 46H172C182 46 188 41 188 35.5C188 30 183.5 26 177.5 26C174 26 171 27.5 169 29.5C166 23 159.5 19 152 19C144 19 137 24 134.5 31"
      stroke="#B59150"
      strokeWidth="1"
      strokeOpacity="0.7"
      strokeLinecap="round"
    />
    <path
      d="M148 53H208"
      stroke="#9E2A2B"
      strokeWidth="0.9"
      strokeOpacity="0.65"
      strokeLinecap="round"
    />
    <path
      d="M4 53H56"
      stroke="#B59150"
      strokeWidth="0.9"
      strokeOpacity="0.55"
      strokeLinecap="round"
    />
  </svg>
);

export const SakuraBlossomOrnament: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g stroke="#B59150" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 12C45 18 46 27 40 34C34 27 35 18 40 12Z" />
      <path d="M66 31C62 38 54 42 45 39C49 31 58 27 66 31Z" />
      <path d="M56 62C48 61 42 54 42 45C50 47 56 54 56 62Z" />
      <path d="M24 62C24 54 30 47 38 45C38 54 32 61 24 62Z" />
      <path d="M14 31C22 27 31 31 35 39C26 42 18 38 14 31Z" />
    </g>
    <circle cx="40" cy="40" r="2.2" fill="#9E2A2B" />
    <circle cx="40" cy="33" r="0.9" fill="#B59150" />
    <circle cx="46.5" cy="37.8" r="0.9" fill="#B59150" />
    <circle cx="44" cy="45.5" r="0.9" fill="#B59150" />
    <circle cx="36" cy="45.5" r="0.9" fill="#B59150" />
    <circle cx="33.5" cy="37.8" r="0.9" fill="#B59150" />
  </svg>
);

export const OmakaseSeal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    {/* Organic hand-carved red ink hanko seal */}
    <svg
      viewBox="0 0 180 180"
      className="h-36 w-36 sm:h-40 sm:w-40 drop-shadow-[0_12px_28px_rgba(158,42,43,0.35)]"
      aria-hidden="true"
    >
      <path
        d="M89 10C132 8 168 39 170 86C172 132 138 168 92 170C46 172 11 138 10 92C9 45 45 12 89 10Z"
        fill="#9E2A2B"
      />
      <path
        d="M90 18C128 17 160 44 161 87C162 128 132 159 91 161C49 163 19 133 18 91C17 48 51 19 90 18Z"
        fill="none"
        stroke="#F6F3EC"
        strokeOpacity="0.28"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#F6F3EC]">
      <h2 className="font-marcellus text-2xl sm:text-[26px] tracking-[0.22em] leading-none">
        OMAKASE
      </h2>
      <span className="font-mincho mt-2 text-sm tracking-[0.18em] text-[#F6F3EC]/90">
        (お任せ)
      </span>
    </div>
  </div>
);
