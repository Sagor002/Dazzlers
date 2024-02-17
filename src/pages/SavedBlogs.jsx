import { useContext } from "react";
import SectionHeader from "../Components/SectionHeader";
import { BlogContext } from "../contexts/BlogContext";
import BlogCard from "../Components/BlogCard";

const SavedBlogs = () => {
  const [state, dispatch] = useContext(BlogContext);

  return (
    <div className="container mx-auto px-5 sm:p-20 py-20">
    <SectionHeader
      heading={`Saved Items (${state?.blogs?.length})`}
      subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing.Lorem ipsum dolor, sit amet consectetur adipisicing.Lorem ipsum dolor, sit amet consectetur adipisicing.Lorem ipsum dolor, sit amet consectetur adipisicing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {state?.blogs?.length > 0 && state.blogs.map((blog, index) => ( <BlogCard key={blog.id} blog={blog} index={index} catid={blog.catid} />
        ))}
    </div>
  </div>
  );
};

export default SavedBlogs;


