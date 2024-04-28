import PropTypes from "prop-types";
const Blog = ({ news }) => {
  console.log(news);
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border rounded-t-md"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={news.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {news.title}
        </h3>
        <span className="text-xs dark:text-gray-600">January 22, 2021</span>
        <p>{news.desc.slice(0, 200)}...</p>
      </div>
    </a>
  );
};
Blog.propTypes = {
  news: PropTypes.object,
};

export default Blog;
