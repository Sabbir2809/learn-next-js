import Link from "next/link";

const blogs = [
  {
    id: 1,
    year: 2023,
    title: "Blog-1",
  },
  {
    id: 2,
    year: 2023,
    title: "Blog-2",
  },
  {
    id: 3,
    year: 2023,
    title: "Blog-3",
  },
  {
    id: 4,
    year: 2023,
    title: "Blog-4",
  },
];

const BlogsPage = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link href={`/blogs/${year}/${id}`} key={id} className="block border border-blue-600 py-2 my-2">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
