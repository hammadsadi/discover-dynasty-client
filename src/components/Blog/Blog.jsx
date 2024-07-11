import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
const Blog = ({ news, idx }) => {
  return (
    <Fade direction="left" delay={idx * 300}>
      <a
        rel="noopener noreferrer"
        className=" mx-auto group hover:no-underline focus:no-underline bg-slate-900/30 shadow-md inline-block"
      >
        <figure>
          <img
            role="presentation"
            className="object-cover w-full rounded h-44"
            src={news.image}
          />
        </figure>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline text-slate-200 group-focus:underline">
            {news.title}
          </h3>
          <span className="text-xs text-gray-600">January 22, 2021</span>
          <p>{news.desc.slice(0, 200)}...</p>
        </div>
      </a>
    </Fade>
  );
};
Blog.propTypes = {
  news: PropTypes.object,
  idx: PropTypes.number,
};

export default Blog;
