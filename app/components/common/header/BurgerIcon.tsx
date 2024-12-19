import classNames from 'classnames';
import { useAside } from '~/components/Aside';

const BurgerIcon = () => {
  const { open, close, type } = useAside();

  const isOpen = type === 'mobile';

  return (
    <button
      className={classNames(
        '-ml-1 text-white z-100 drop-shadow-2xl group cursor-pointer inline-flex w-12 h-12  text-center items-center justify-center rounded  transition',
      )}
      aria-pressed={type === 'mobile'}
      onClick={() => {
        return type === 'mobile' ? close() : open('mobile');
      }}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
          y="7"
          width="9"
          height="2"
          rx="1"
        />
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
          y="7"
          width="16"
          height="2"
          rx="1"
        />
        <rect
          className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
          y="7"
          width="9"
          height="2"
          rx="1"
        />
      </svg>
    </button>
  );
};

export default BurgerIcon;
