import React from 'react';
import Link from 'next/link';
import Pagination from '../common/Pagination';

const Services = () => {
    const allCourseItems = [
        {
            _id: '1',
            img_bg: 'image-url-1',
            price: '99',
            category: 'Development',
            title: 'React for Beginners',
            teacher_img: 'teacher-image-url-1',
            tutor_name: 'Jane Doe',
            lessons: '30 Lessons',
            enrolled: '1200',
            watching: '300',
            review: '4.5'
        },
        {
            _id: '2',
            img_bg: 'image-url-2',
            price: '150',
            category: 'Design',
            title: 'Advanced Graphic Design',
            teacher_img: 'teacher-image-url-2',
            tutor_name: 'John Smith',
            lessons: '25 Lessons',
            enrolled: '800',
            watching: '200',
            review: '4.8'
        },
        
    ];
    const [currentPage, setCurrentPage] = React.useState(1);
    const [coursePerPage, setCoursePerPage] = React.useState(6);
    const indexOfLastCourse = currentPage * coursePerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
    let courseItems = allCourseItems.slice(indexOfFirstCourse, indexOfLastCourse);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <section className="course__area pt-115 pb-90 grey-bg-3">
                <div className="container">
                    <div className="course__tab-inner white-bg mb-50">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="course__tab-wrapper d-flex align-items-center">
                                    <div className="course__tab-btn">
                                        <ul className="nav nav-tabs" id="courseTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                                                    <svg className="grid" viewBox="0 0 24 24">
                                                        <rect x="3" y="3" className="st0" width="7" height="7" />
                                                        <rect x="14" y="3" className="st0" width="7" height="7" />
                                                        <rect x="14" y="14" className="st0" width="7" height="7" />
                                                        <rect x="3" y="14" className="st0" width="7" height="7" />
                                                    </svg>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link list" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                                                    <svg className="list" viewBox="0 0 512 512">
                                                        <g id="Layer_2_1_">
                                                            <path className="st0" d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z" />
                                                            <circle className="st0" cx="64" cy="100" r="31" />
                                                            <path className="st0" d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z" />
                                                            <circle className="st0" cx="64" cy="256" r="31" />
                                                            <path className="st0" d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z" />
                                                            <circle className="st0" cx="64" cy="412" r="31" />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="course__view">
                                        <h4>{`Showing 1 - ${courseItems.length} of ${allCourseItems.length}`}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="course__tab-conent">
                                <div className="tab-content" id="courseTabContent">
                                    <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                                        <div className="row">
                                            <div className="row">
                                                {courseItems.map((course) => (
                                                    <div key={course._id} className="col-lg-4 col-md-6">
                                                        {/* Example course card for Grid View */}
                                                        <div className="course__item">
                                                            <div className="course__thumb">
                                                                <Link href={`/course/${course._id}`}><a><img src={course.img_bg} alt="course image" /></a></Link>
                                                            </div>
                                                            <div className="course__content">
                                                                <div className="course__teacher">
                                                                    <img src={course.teacher_img} alt="teacher" />
                                                                    <h4>{course.tutor_name}</h4>
                                                                </div>
                                                                <h3><Link href={`/course/${course._id}`}><a>{course.title}</a></Link></h3>
                                                                <p>{course.category}</p>
                                                                <span>${course.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                                        <div className="row">
                                            <div className="row">
                                                {courseItems.map((course) => (
                                                    <div key={course._id} className="col-12">
                                                        {/* Example course item for List View */}
                                                        <div className="course__item-list d-flex align-items-center">
                                                            <div className="course__thumb-list">
                                                                <Link href={`/course/${course._id}`}><a><img src={course.img_bg} alt="course image" /></a></Link>
                                                            </div>
                                                            <div className="course__content-list">
                                                                <h3><Link href={`/course/${course._id}`}><a>{course.title}</a></Link></h3>
                                                                <div className="teacher__info">
                                                                    <img src={course.teacher_img} alt="teacher" />
                                                                    <span>{course.tutor_name}</span>
                                                                </div>
                                                                <p>{course.category} - ${course.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Pagination
                            coursePerPage={coursePerPage}
                            totalCourse={allCourseItems.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services;