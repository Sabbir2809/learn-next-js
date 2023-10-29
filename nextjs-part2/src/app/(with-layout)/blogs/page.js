import { loadBlogsData } from "@/utility/loadBlogsData";
import Link from "next/link";

const BlogsPage = async () => {
  const blogs = await loadBlogsData();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="block border border-blue-600 py-2 my-2">
          <h2 className="text-xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link className="inline-block mt-5" href={`/blogs/${id}`}>
            <button className="text-white px-2 py-1 bg-blue-500">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
