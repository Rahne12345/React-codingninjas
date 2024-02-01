import React from "react";
import styles from "./Chapter.module.css";
import coursesData from "../../../data/courses.json";
import { useParams, useOutletContext , Link} from "react-router-dom";


function Chapter() {
  const {chapterId,courseId,learnId} = useParams();
  const course = coursesData.find((course)=>course.id===courseId);
  const courseData = course.chapters.find((course)=>String(course.chapter)===chapterId);
  return (
    <>
    <Link to={`/courses/${courseId}/${learnId}`}>
    <h2 >{"<<"}</h2>
    </Link>
   
    <div>
      <h1>{courseData.title}</h1>
      <h2>{courseData.description}</h2>
      <p className={styles.para}>{courseData.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={courseData.video}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </>
  );
}

export default Chapter;
