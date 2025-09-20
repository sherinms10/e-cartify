
import b2 from "../assets/img/banner/b1.jpg"
import { products } from "../components/Products";
import ProductCard from "../components/ProductCard";




export default function Shop() {
  return (
    <>

      <section
        className="h-[50vh] flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <h2 className="text-5xl font-bold">New Designs</h2>
        <p className="mt-2">Save more with coupons & up to 70%</p>
      </section>

      <div className="flex flex-wrap justify-center gap-10 mt-8 mb-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>


      

    </>
  );
}
