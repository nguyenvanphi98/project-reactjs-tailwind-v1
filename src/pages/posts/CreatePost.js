import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Alert from "../../components/Alert";

function CreatePost() {
  const cookies = new Cookies();

  const createPost = async (e) => {
    e.preventDefault();
    const payload = new FormData(e.target);
    console.log("payload", payload);

    const setHeader = {
      headers: {
        Authorization: "Bearer " + cookies.get("ppe-training-fe-token"),
      },
    };
    axios
      .post("http://happy_eyes.ppe-be.codeby.com/api/posts", payload, setHeader)
      .then(function (response) {
        if (response.data.status) {
          Alert({ t: `success`, c: [`Create post success`] });
        } else {
          Alert({ t: `error`, c: [response.data.message] });
        }
        console.log(response);
      })
      .catch(function (error) {});
  };

  return (
    <form
      onSubmit={(e) => createPost(e)}
      className="max-w-sm bg-white rounded-lg shadow-md py-10 px-8"
    >
      <h1 className="text-2xl font-bold w-screen">Create Post</h1>
      <label className="block text-grey-darker text-sm mb-1 mt-4">
        <span className="block mb-1">Title</span>
        <input
          className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
          type="text"
          name="title"
        />
      </label>

      <label className="block text-grey-darker text-sm mb-1 mt-4">
        <span className="block mb-1">Description</span>
        <textarea
          className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-grey-darker leading-tight "
          name="description"
        ></textarea>
      </label>
      <button type="submit" className="mt-6 btn font-bold w-full">
        Create
      </button>
    </form>
  );
}
export default CreatePost;
