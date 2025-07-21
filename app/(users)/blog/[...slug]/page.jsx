const Blog = async (props) => {
    const {slug} = await props.params;
    console.log(slug);

    const blogs = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build a full-stack React app using Next.js framework...",
      image: "https://images.unsplash.com/photo-1749310934634-7c9a5f5e165f?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 18, 2025",
    },
    {
      title: "Tailwind CSS Tips & Tricks",
      excerpt: "Speed up your development workflow with these Tailwind shortcuts...",
      image: "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 15, 2025",
    },
    {
      title: "Optimizing Images in Next.js",
      excerpt: "Discover the best practices to load images faster and improve SEO...",
      image: "https://images.unsplash.com/photo-1752654977019-8578b2905411?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 10, 2025",
    },
  ];
    
    return (
    <main className="min-h-[673px] bg-black py-10 px-4 text-white pt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center mb-10">Our Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-900/60 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Blog;