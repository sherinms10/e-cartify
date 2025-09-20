
import b19 from "../assets/img/banner/b19.jpg"
import b1 from "../assets/img/blog/b1.jpg"
import b2 from "../assets/img/blog/b2.jpg"
import b3 from "../assets/img/blog/b3.jpg"
import b4 from "../assets/img/blog/b4.jpg"
import b5 from "../assets/img/blog/b5.jpg"




const blogs = [
  { id: 1, img: b1, title: "The Cotton-Jersey Zip-Up Hoodie", date: "13/01" },
  { id: 2, img: b2, title: "The Cotton-Jersey Zip-Up Hoodie", date: "13/01" },
  { id: 3, img: b3, title: "The Cotton-Jersey Zip-Up Hoodie", date: "13/01" },
  { id: 4, img: b4, title: "The Cotton-Jersey Zip-Up Hoodie", date: "13/01" },
  { id: 5, img: b5, title: "The Cotton-Jersey Zip-Up Hoodie", date: "13/01" },
];

export default function Blog() {
  return (
    <>
  
      <section className=" h-[50vh] flex flex-col items-center justify-center text-white text-center"
              style={{ backgroundImage: `url(${b19})` }}
      >
        <h2 className="text-5xl font-bold">Read more</h2>
        <p className="mt-2">Read all case studies about our products!</p>
      </section>

      <section className="px-8 py-16 space-y-16">
        {blogs.map((b) => (
          <div key={b.id} className="flex flex-col md:flex-row items-center relative border-b border-gray-300 pb-8">
            <div className="w-full md:w-1/2 pr-6">
  <div className="h-64 md:h-80 w-full overflow-hidden rounded-lg shadow">
    <img
      src={b.img}
      alt={b.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
              <p className="text-gray-600 mb-3">
                Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse irony, godard...
              </p>
              <a href="#" className="text-teal-600 font-bold text-sm hover:underline">
                CONTINUE READING
              </a>
            </div>
          
          </div>
        ))}
      </section>

    </>
  );
}
