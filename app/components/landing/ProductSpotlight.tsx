import { motion } from 'motion/react';
import type { ProductSpotlightItemFragment } from 'storefrontapi.generated';
import ProductCard from '~/components/common/ProductCard';
import Carousel from '~/components/components/Carousel';

interface ProductSpotlightProps {
  products: ProductSpotlightItemFragment[];
}

const ProductSpotlight = ({ products }: ProductSpotlightProps) => {
  return (
    <div className="flex flex-col w-full max-w-7xl">
      <motion.h1
        className="text-2xl text-white font-bold drop-shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Product Spotlight
      </motion.h1>
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 3, delay: 0 }}
      >
        <Carousel
          slides={[
            products.map((product) => {
              return (
                <ProductCard
                  title={product.title}
                  price={product.priceRange.minVariantPrice.amount}
                  image={product.images.edges[0].node.url}
                />
              );
            }),
          ]}
          options={{
            dragFree: true,
            //   containScroll: 'keepSnaps',
            watchSlides: false,
            watchResize: false,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProductSpotlight;
