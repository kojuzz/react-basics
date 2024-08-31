const PostCreate = () => {
    return (
        <>
            <h1 className="font-bold text-2xl mb-6">Create a new post</h1>
            <form action="">
                <div className="mb-4">
                    <label>Post Title</label>
                    <input 
                        type="text" 
                        className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 facus:ring-2"
                    />
                </div>
                <div className="mb-4">
                    <label>Post Content</label>
                    <textarea
                        className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 facus:ring-2"
                    >
                    </textarea> 
                </div>
                <button
                    className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600"
                >
                    Create
                </button>
            </form>
        </>
    ) 
}
export default PostCreate;