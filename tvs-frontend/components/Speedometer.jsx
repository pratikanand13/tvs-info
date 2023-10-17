/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Speedometer = ({ speed }) => {
  const [value] = useState(speed || 0);

  return (
    <div className="center">
      

      <Container className="p-3">
        <Row>
          <Col>
            <div className="speedometer">
              <ReactSpeedometer
                maxValue={100}
                ringWidth={20}
                customSegmentStops={[
                  0,10,20,30, 40,50 ,60,70,80,90,100,
                ]}
                segmentColors={[
                  "#228B22",
                  "#228B22",
                  "#228B22",
                  "#228B22",
                  "#E4D00A",
                  "#E4D00A",
                  "#E4D00A",
                  "#FF0000",
                  "#FF0000",
                  "#FF0000"
                ]}
                needleTransitionDuration={9000}
                needleTransition="easeElastic"
                currentValueText={`${value}%`}
                value={value}
              />
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default Speedometer;
