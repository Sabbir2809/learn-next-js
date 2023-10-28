const SingleBlog = ({ params }) => {
  // console.log(params);
  const [year, id] = params.segments || [];

  return (
    <div>
      <h1>
        Single Blog {year || new Date().getFullYear()} for {id}
      </h1>
    </div>
  );
};

export default SingleBlog;
