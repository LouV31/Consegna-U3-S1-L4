import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentedArea extends Component {
    state = {
        users: [],
    };
    fetchComments = async () => {
        try {
            let response = await fetch(URL + this.props.bookId, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDMxNzE0NTQsImV4cCI6MTcwNDM4MTA1NH0._2iseQeMjVt8DTCPx5uMyOSdeijpFxbd1y9jmJnAHVo",
                },
            });
            if (response.ok) {
                let comments = await response.json();
                console.log(comments);
                this.setState({ users: comments });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = () => {
        this.fetchComments();
    };

    render() {
        return (
            <>
                <ListGroup>
                    {this.state.users.map((comment) => (
                        <ListGroupItem key={`elementId-${comment.elementId}`}>
                            <span className="d-block">Comment: {comment.comment}</span>
                            <span className="d-block">Rate: {comment.rate}</span>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </>
        );
    }
}
export default CommentedArea;
