import { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/comments';


class Tweets extends Component {
    state = { loading: true, tweets: [], name: '', email: '', tweet: '' };

    async componentDidMount() {

        this.getTweets();
    }

    getTweets = async () => {
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

    handleNameChange = (e) => {

        this.setState({
            name:  e.target.value
        })

    }

    handleChange = (type, e) => {
        if(type === 'name'){
            this.setState({
                name:  e.target.value
            })
        } else if (type === 'email') {
            this.setState({
                email:  e.target.value
            })
        } else if (type === 'body') {
            this.setState({
                tweet:  e.target.value
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                body: this.state.tweet,
                userId: this.props.match.params.id
            })
        })
        .then(function (response) {
            console.log(response)
            this.getTweets();
          })
          .catch(function (error) {
            console.log(error);
        });
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
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input id="name" type="text" onChange={(e) => this.handleChange('name', e)} value={this.state.name} />
                        <label>Email</label>
                        <input id="name" type="text" onChange={(e) => this.handleChange('email', e)} value={this.state.email} />
                        <label>Body</label>
                        <input id="name" type="text" onChange={(e) => this.handleChange('body', e)} value={this.state.tweet} />

                        <button type="submit" className="waves-effect waves-light btn">Add Tweet</button>
                    </form> <br></br>
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