import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

const News = () => {
    const news = useLoaderData()
    const { category_id, author, details, image_url, title, rating } = news
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p><b>Author:</b> {author?.name}</p>
                        <p><b>Published Date:</b> {author?.published_date}</p>
                        <p><FaStar className='text-warning'></FaStar> {rating.number}</p>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">All news in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;