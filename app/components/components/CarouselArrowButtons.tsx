import classNames from 'classnames';
import type { EmblaCarouselType } from 'embla-carousel';
import type { ComponentPropsWithRef } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as PauseButton } from '~/assets/icons/pause.svg';
import { ReactComponent as PlayButton } from '~/assets/icons/play.svg';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((_emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!_emblaApi.canScrollPrev());
    setNextBtnDisabled(!_emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'> & { reverse?: boolean };

const ParentButton = ({
  onClick,
  children,
  className,
  ...restProps
}: PropType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'cursor-pointer border-2 border-white text-white hover:text-black hover:bg-white size-10 rounded-full shadow-lg flex justify-center items-center transition-all hover:scale-110',
      )}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

export const PlayPauseButton = (props: PropType & { isPlaying?: boolean }) => {
  return (
    <ParentButton {...props}>
      {props?.isPlaying ? (
        <PauseButton className="h-5 drop-shadow-lg" />
      ) : (
        <PlayButton className="ml-1 h-5 drop-shadow-lg" />
      )}
    </ParentButton>
  );
};

export const ControlButton: React.FC<PropType> = (props) => {
  const { children, reverse } = props;

  return (
    <ParentButton {...props}>
      <svg
        className={classNames('size-4 drop-shadow-lg', {
          'ml-1': !reverse,
        })}
        viewBox="0 0 532 532"
      >
        {reverse ? (
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        ) : (
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        )}
      </svg>
      {children}
    </ParentButton>
  );
};
