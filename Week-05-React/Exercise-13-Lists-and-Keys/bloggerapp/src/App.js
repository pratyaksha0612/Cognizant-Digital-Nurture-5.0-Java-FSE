import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const show = true;

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px"
            }}
        >

            {show && <CourseDetails />}

            {show && <BookDetails />}

            {show && <BlogDetails />}

        </div>

    );

}

export default App;