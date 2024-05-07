import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader.jsx';
import Product from '../components/Product.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice';

import Message from '../components/Message.jsx';

const HomeScreen = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Fragment>
          <h2>Latest Products</h2>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeScreen;
