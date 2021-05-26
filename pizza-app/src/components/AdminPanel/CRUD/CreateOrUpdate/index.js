import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import {
  getPizzasList,
  postPizzas,
  putPizzas,
} from "../../../../redux/actions/pizzaActions";

function CreateOrUpdate() {
  const [photo, setPhoto] = React.useState();
  const [form, setForms] = React.useState({});

  const { state } = useLocation();

  const fileRef = React.useRef();
  const dispatch = useDispatch();
  const { push } = useHistory();
  let [forPhoto, setForPhoto] = React.useState(state?.img);
  const handleImageChange = React.useCallback(
    (e) => {
      const [file] = fileRef.current.files;
      const fileMemo = URL.createObjectURL(file);
      setPhoto(fileMemo);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setForms({ ...form, img: fileReader.result });
        setForPhoto(fileReader.result);
      };
    },
    [form]
  );

  const handleChange = React.useCallback(
    (e) => {
      const { value, name, type } = e.target;

      if (type !== "file") {
        setForms({
          ...form,
          [name]: value,
        });
      }
    },
    [form]
  );

  const createNewPizza = React.useCallback(() => {
    dispatch(postPizzas(form, push));
  }, [dispatch, form, push]);

  const updatePizza = React.useCallback(() => {
    dispatch(putPizzas(state.id, form, push));
  }, [dispatch, form, push]);

  return (
    <Container>
      <Row className="mt-5">
        <Col sm="4">
          <button className="btn btn-info" onClick={() => push("/dashboard")}>
            🔙 Back To Customers
          </button>
        </Col>
        <Col sm="12">
          <h2
            className="text-center mb-5"
            onClick={() => {
              console.log(state);
            }}
          >
            Create new Pizza
          </h2>
        </Col>
        <Col sm="8" className="my-5 offset-4">
          <FormGroup>
            <img
              src={state ? forPhoto : photo}
              alt="Profile Pic"
              width="100"
              height="100"
            />
            <br />
            <br />

            <input
              onChange={handleImageChange}
              type="file"
              ref={fileRef}
              name="img"
              id="exampleFile"
            />
          </FormGroup>
        </Col>
        <Col className="offset-2" sm="8">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              state ? updatePizza() : createNewPizza();
            }}
          >
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="firstname">Pizza name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Write Pizza name"
                    defaultValue={state?.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Write Price"
                    defaultValue={state?.price}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="8" className="offset-2 my-5">
                <FormGroup>
                  <Label for="topping">Topping</Label>
                  <Input
                    type="text"
                    name="topping"
                    id="topping"
                    placeholder="Write Topping"
                    defaultValue={state?.topping}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn btn-success">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateOrUpdate;
