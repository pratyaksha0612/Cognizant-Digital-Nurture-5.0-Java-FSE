function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Learning",
            author: "Stephen Biz",
            content: "Welcome to learning React!"
        },
        {
            id: 2,
            title: "Installation",
            author: "Schwedenier",
            content: "You can install React from npm."
        }
    ];

    return (

        <div style={{
            borderRight: "3px solid green",
            padding: "20px",
            width: "30%"
        }}>

            <h1>Blog Details</h1>

            {blogs.map(blog => (

                <div key={blog.id}>

                    <h2>{blog.title}</h2>

                    <h4>{blog.author}</h4>

                    <p>{blog.content}</p>

                </div>

            ))}

        </div>

    );

}

export default BlogDetails;