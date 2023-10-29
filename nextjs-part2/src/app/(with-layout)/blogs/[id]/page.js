import { loadBlogsData } from "@/utility/loadBlogsData";
import { loadSingleBlogData } from "@/utility/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();

  return blogs.map(({ id }) => ({ id: id.toString() }));
};

const SingleBlog = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
  return (
    <div key={id} className="block border border-blue-600 py-2 my-2 m-2">
      <h2 className="text-xl">
        {id}. {title}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;
