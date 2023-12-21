import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

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
                <AddComment bookId={this.props.bookId} />
                <CommentsList usersArr={this.state.users} />
            </>
        );
    }
}
export default CommentedArea;
