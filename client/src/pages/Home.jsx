export default function Home() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="bg-primary text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-2">Welcome to Emini-Shop</h1>
          <p className="mb-4">Discover the latest products at unbeatable prices.</p>
          <a href="#products" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">Shop Now</a>
        </div>
        <img src="https://dummyimage.com/400x300/fff/000&text=Ecommerce" alt="Hero" className="mt-6 md:mt-0 rounded-lg shadow-lg" />
      </div>
      {/* Categories placeholder */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Electronics","Fashion","Groceries","Home Decor"].map(cat => (
          <div key={cat} className="bg-white shadow rounded p-4 text-center hover:shadow-md transition cursor-pointer">
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}