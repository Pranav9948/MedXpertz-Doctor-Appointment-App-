import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Cardz from './Cardz'
import Image from "react-bootstrap/Image";
import successApplyDoc from "../../ProjectImages/successApplyDoctor.jpg";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function SuccessApplyDoctor() {


  return (
    <>
 
      <Cardz />

      <Container>
        <Row>
          <Col md={5} xs={12} >
            <Image src={successApplyDoc} className='successApplyDoc' fluid />
          </Col>

          <Col md={1} xs={1}></Col>


          <Col md={6} xs={12} className="text-center mt-1">
            <h1 className="mt-5 mb-5 text-red-500 fw-bold fs-2">Thank you!</h1>
            <h3 className="mt-5 mb-5 p-3 fw-bold ">
              Thank you for your interest in joining our dynamic and innovative
              team of professionals.<br></br> <br></br>
              <span className="text-success">
                we will verify your details and get back to you shortly{" "}
              </span>
              <br></br> <br></br>
              If you have any further questions, please call 1-866-574-4885 or
              email us at{" "}
              <span className="text-info pt-5"> medXperts@gmail.com</span>
            </h3>

             <Link to="/">
            <Button variant="info "  className='fw-bold fs-2 text-white'   style={{background:'blue',height:'70px' ,width:'300px'}}>Go Back</Button>{" "}
          </Link>
          </Col>

          <div style={{height:'200px'}}>


          </div>

         
         
        </Row>
      </Container>
    </>
  );

}

export default SuccessApplyDoctor