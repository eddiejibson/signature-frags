import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useRef } from 'react';
import {
  ControlButton,
  PlayPauseButton,
  usePrevNextButtons,
} from '~/components/components/CarouselArrowButtons';
import useAutoplay from '~/components/components/CarouselAutoplay';
import useAutoplayProgress from '~/components/components/CarouselProgress';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2500 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { startProgress } = useAutoplayProgress(emblaApi, progressNode);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;

    toggleAutoplay();
    startProgress(autoplay?.timeUntilNext() ?? 3000);
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport py-5" ref={emblaRef}>
        <div className="embla__container justify-between space-x-5">
          {slides.map((element, index) => (
            <div
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
              key={index}
            >
              {element}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row items-center space-x-3">
          <ControlButton
            reverse
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <PlayPauseButton
            onClick={toggleAutoplay}
            isPlaying={autoplayIsPlaying}
          />
          <ControlButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__progress -mt-1">
          <div
            className="embla__progress__bar !bg-white/50 drop-shadow-lg"
            ref={progressNode}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
