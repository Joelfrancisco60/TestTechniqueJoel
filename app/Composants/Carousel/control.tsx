// components/CarouselControls.tsx
import classNames from "classnames";
import Image from "next/image";
import previousArrow from "../../../public/previousArrow.png"
import nextArrow from "../../../public/nextArrow.png"

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-center gap-2 ">
      <div
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        className={classNames({
          "py-2 flex justify-center hover:scale-125 duration-300": true
        })}
        >
        <Image src={previousArrow} alt='' className="w-2/3 h-1/2"></Image>
      </div>
      <div
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        className={classNames({
          "py-2 flex justify-center hover:scale-125 duration-300": true
        })}
        >
        <Image src={nextArrow} alt='' className="w-2/3 h-1/2"></Image>
      </div>
    </div>
  );
};
export default CarouselControls;
