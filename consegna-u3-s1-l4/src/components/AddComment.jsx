import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
    state = {
        user: {
            comment: "",
            rate: "",
            elementId: this.props.elementId,
        },
    };

    handleChange = (propertyName, propertyValue) => {
        this.setState({ user: { ...this.state.user, [propertyName]: propertyValue } });
    };

    fetchAddComment = async () => {
        try {
            let response = await fetch(URL + this.props.bookId, {
                headers: {
                    method: "POST",
                    body: JSON.stringify(this.state.user),
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDMxNzE0NTQsImV4cCI6MTcwNDM4MTA1NH0._2iseQeMjVt8DTCPx5uMyOSdeijpFxbd1y9jmJnAHVo",
                },
            });
            if (response.ok) {
                this.setState({
                    user: {
                        comment: "",
                        rate: "",
                        elementId: "",
                    },
                });
                let userObj = await response.json();
                console.log(userObj);
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = () => {
        this.fetchAddComment();
    };

    render() {
        return (
            <Form className="mt-5">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Lascia una recensione"
                        value={this.state.user.comment}
                        onChange={(event) => this.handleChange("comment", event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        value={this.state.user.rate}
                        onChange={(event) => this.handleChange("rate", event.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                </Form.Group>
                <Button className="mt-2">Invia</Button>
            </Form>
        );
    }
}
export default AddComment;
