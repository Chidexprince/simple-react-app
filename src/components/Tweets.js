import { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/comments';


class Tweets extends Component {
    state = { loading: true, tweets: [], tweet: '' }

    async componentDidMount() {
        try {
            const response = await axios.get(`${url}/${this.props.match.params.id}`);
            if (response.status === 200 && response.data) {
                console.log("Data", response.data);
                this.setState({
                    tweets: response.data
                })

            }

        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (!this.state.tweets) {
            return <h2>No Tweets Available</h2>
        }

        const { id, name, email, body } = this.state.tweets;

        return (
            <div>
                <div> 
                    <h6>Add New Tweet</h6>
                    <form>
                        <input />

                        <button>Add Tweet</button>
                    </form>
                </div>
                <div className="card" key={id}>
                    <div className="infos">
                        <div className="name">
                            <b>{name}</b>
                        </div>
                        <p className="text">
                            {body}
                        </p>

                        <div>
                            <b>Email:</b> <span>{email}</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}


export default withRouter(Tweets)