import React, { useEffect, useState } from "react";
import axios from "axios"
import Cards from "./Cards";
import {Link} from "react-router-dom"

const Course = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("http://book-store-app-sepia.vercel.app/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  },[])
  return (
    <>
      <div className="max-w-screen-2xl z-50 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptatibus quis dolor eius aspernatur fuga illum tempore,
            voluptatem repudiandae vitae. Dicta iste ut perferendis porro minima
            dignissimos soluta, eveniet hic quam saepe sunt accusantium harum
            maiores rerum necessitatibus earum ex.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover-bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

// const res = await axios.get("http://localhost:4001/book");