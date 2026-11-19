import React, { useState } from 'react';
import { CrimsonDots } from './JapaneseOrnaments';

interface CategoryBannerProps {
  number: string;
  title: string;
  japaneseLabel: string;
  bannerImage: string;
  bannerAlt: string;
  headingId: string;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({
  number,
  title,
  japaneseLabel,
  bannerImage,
  bannerAlt,
  headingId,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative overflow-hidden border-y border-[#B59150]/45 bg-[#141413]">
      <div className="relative h-48 sm:h-64 w-full overflow-hidden">
        {!imgError ? (
          <img
            src={bannerImage}
            alt={bannerAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#141413] via-[#1C1B19] to-[#292524]" />
        )}

        {/* Measured dark chiaroscuro scrim for high-contrast Marcellus & Dorsa legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#141413]/95 via-[#141413]/55 to-[#141413]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#141413]/80 via-[#141413]/30 to-transparent"
          aria-hidden="true"
        />

        {/* Thin crimson top accent rule */}
        <div
          className="absolute inset-x-0 top-0 h-[1.5px] bg-[#9E2A2B]/80"
          aria-hidden="true"
        />

        <div className="absolute inset-0 mx-auto flex max-w-5xl items-end justify-between px-4 pb-6 sm:px-8 sm:pb-8">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-dorsa text-4xl sm:text-5xl tracking-[0.14em] text-[#B59150] leading-none">
                {number}
              </span>
              <span className="h-px w-8 bg-[#B59150]/55" aria-hidden="true" />
            </div>

            <h2
              id={headingId}
              className="font-marcellus mt-1.5 text-2xl sm:text-4xl tracking-[0.22em] text-[#F6F3EC] leading-none"
            >
              {title}
            </h2>

            <CrimsonDots className="mt-3" />
          </div>

          <span
            aria-hidden="true"
            className="writing-vertical-jp font-mincho text-sm sm:text-base tracking-[0.3em] text-[#B59150]/85 select-none"
          >
            {japaneseLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
