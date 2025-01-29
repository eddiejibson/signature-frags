/* eslint-disable import/prefer-default-export */
export const PRODUCT_SPOTLIGHT_QUERY = `#graphql
  #graphql
  fragment ProductSpotlightItem on Product {
    id
    title
    handle
    tags
    images(first: 1) {
      edges {
          node {
            id
            url
            altText
            width
            height
          }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
  }
  query ProductSpotlight($country: CountryCode, $language: LanguageCode) 
    @inContext(country: $country, language: $language) {
    products(first: 10, query: "tag:featured", sortKey: UPDATED_AT, reverse: true) {
      nodes {
       ...ProductSpotlightItem
      }
    }
  }
` as const;
