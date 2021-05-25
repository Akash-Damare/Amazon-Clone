import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 z-50 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, image, title, price, description, category }) => {
          return (
            <Product
              key={id}
              image={image}
              title={title}
              price={price}
              description={description}
              category={category}
            />
          );
        })}
      <img
        src="https://links.papareact.com/dyz"
        alt="Adware"
        className="md:col-span-full"
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, image, title, price, description, category }) => {
            return (
              <Product
                key={id}
                image={image}
                title={title}
                price={price}
                description={description}
                category={category}
              />
            );
          })}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, image, title, price, description, category }) => {
          return (
            <Product
              key={id}
              image={image}
              title={title}
              price={price}
              description={description}
              category={category}
            />
          );
        })}
    </div>
  );
}

export default ProductFeed;
