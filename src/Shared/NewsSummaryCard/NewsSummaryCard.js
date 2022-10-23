import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, author, details, image_url, title, total_view, rating } = news
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='rounded-circle me-2' style={{ height: '50px ' }} src={author?.img} />
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} />
                    <Card.Text>
                        {details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link className='text-decoration-none' to={`/news/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <p><FaEye></FaEye> {total_view}</p>
                    <p><FaStar className='text-warning'></FaStar> {rating.number}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;