import { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/albums';

class Albums extends Component {
    state = { loading: true, albums: [] }

    async componentDidMount() {
        try {
            const response = await axios.get(`${url}/${this.props.match.params.id}`);
            if (response.status === 200 && response.data) {
                console.log("Data", response.data);
                this.setState({
                    albums: response.data
               } )
               
            }

        } catch (error) {
            console.error(error);
        }
    }

    render() {  
        if(!this.state.albums) {
            return  <h2>No Albums Available</h2>
        }

        const { id, title} = this.state.albums;

        return ( 
            <div>
               <div  key={id}>
                <div className="album-info">
                    <div className="album-name">
                        <b>{title}</b>
                    </div>

                                       
               </div>
               </div>
           </div>
        )
    }

}



export default withRouter(Albums)