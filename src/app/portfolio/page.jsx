import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div>
      <div>
        <h1 className="my-5 mx-0">Choose a gallery</h1>
        <div className="flex flex-col md:flex-row  gap-12">
          <Link
            href="/portfolio/illustrations"
            className={`rounded-md border-4 border-[#bbb] relative h-[400px] w-[300px] hover:text-[#53c2b8]  ${styles.image1} `}
          >
            <span className="absolute bottom-2 right-2 text-4xl font-bold">
              Illustration
            </span>
          </Link>
          <Link
            href="/portfolio/websites"
            className={`rounded-md border-4 border-[#bbb] relative h-[400px] w-[300px] ${styles.image2} hover:text-[#53c2b8] `}
          >
            <span className="absolute bottom-2 right-2 text-4xl font-bold">
              website
            </span>
          </Link>
          <Link
            href="/portfolio/applications"
            className={`rounded-md border-4 border-[#bbb] relative h-[400px] w-[300px] hover:text-[#53c2b8]  ${styles.image3} `}
          >
            <span className="absolute bottom-2 right-2 text-4xl font-bold">
              application
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
