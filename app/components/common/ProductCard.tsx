interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div className="bg-black/01 h-min transition-all hover:scale-105 hover:shadow-sm backdrop-blur-[1.3rem] border-white/15 border  shadow-lg rounded-[1.3rem]">
      <img
        src={image}
        className="object-cover rounded-t-[1.3rem] object-center lg:object-top w-full h-80 md:h-72"
        alt=""
      />
      <div className="flex flex-row items-center justify-between py-4 px-6 !rounded-b-[1.3rem]">
        <h4 className="text-lg text-white drop-shadow font-black truncate">
          {title}
        </h4>
        <p className="text-white/50 pl-2">£{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
