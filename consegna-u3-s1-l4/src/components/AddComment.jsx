import { Component } from "react";

class AddComment extends Component{
    state = {
        user: {
            comment: "",
            rate: "",
            elementId: ""
        }
    }
    fetchAddComment = async () => {
        try {
            let response = await fetch(URL + this.props.bookId, {
                headers: {
                    method: "POST",
                    body: JSON.stringify(this.state.user),
                    Authorization:
                     "Content-Type": "application/json",
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDMxNzE0NTQsImV4cCI6MTcwNDM4MTA1NH0._2iseQeMjVt8DTCPx5uMyOSdeijpFxbd1y9jmJnAHVo",
                },
            });
            if (response.ok) {
                let userObj = await response.json();
                console.log(userObj);
                this.setState({user});
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = () => {
        this.fetchAddComment();
    };
    }
}