import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCarsThunk } from "../../Redux/Actions/car.action";
import { MyVerticallyCenteredModal } from "./AddCarModal/AddCarModal";
import { ArendModal } from "./ArendModal/ArendModal";

const Cars = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [showArendModal, setShowArendModal] = useState(false);
  const [currentCarId, setCurrentCarId] = useState();
  const cars = useSelector((state) => state?.CarReducer.cars);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, []);

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>mark</th>
            <th>Car Number</th>
            <th>arenda</th>
          </tr>
        </thead>
        <tbody>
          {cars.length > 0 &&
            cars[0].map(({ id, mark, carNumber, arenda }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{mark}</td>
                  <td>{carNumber}</td>
                  <td>
                    {arenda == true ? (
                      "this car is booking"
                    ) : (
                      <>
                        <Button onClick={() => {
                          setShowArendModal(true)
                          setCurrentCarId(id)
                          }}>
                          booking
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
        <Container>
          <Button onClick={() => setModalShow(true)} className="mt-3">
            Add Car
          </Button>
          <ArendModal
            show={showArendModal}
            onHide={() => setShowArendModal(false)}
            currentCarId={currentCarId}
          />
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Container>
      </Table>
    </Container>
  );
};

export default Cars;
