import { ListGroup, ListGroupItem } from "react-bootstrap";

const CommentsList = (props) => {
    return (
        <ListGroup>
            {props.usersArr.map((comment) => (
                <ListGroupItem key={`elementId-${comment.elementId}`}>
                    <span className="d-block">Comment: {comment.comment}</span>
                    <span className="d-block">Rate: {comment.rate}</span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
export default CommentsList;
