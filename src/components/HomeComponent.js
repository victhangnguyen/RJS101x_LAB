import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from 'reactstrap';
//! imp Components
import { Loading } from './LoadingComponent';

//! if dishes, leaders, promotions have featured is true
//! Presentational Component
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    //! pending
    return <Loading />;
  } else if (errMess) {
    //! rejected
    return <h3>{errMess}</h3>;
  }
  //! fulfilled
  else
    return (
      <Card>
        <CardImg src={item?.image} alt={item?.name} />
        <CardBody>
          <CardTitle className="fw-bold">{item?.name}</CardTitle>
          {item?.designation && (
            <CardSubtitle>{item?.designation}</CardSubtitle>
          )}
          <CardText>{item?.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
