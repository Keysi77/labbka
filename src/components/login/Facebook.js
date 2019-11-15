import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { getReq } from "../../utils/request";
import axios from 'axios'

// ! NAVOD:
// https://github.com/keppelen/react-facebook-login
// https://www.youtube.com/watch?v=ea9KyE78qKI

export default class Facebook extends Component {
    stsate = {
      animals: []
    }

    componentDidMount = async () => {
      console.log('MOUNTED');
      const res = await getReq('api/v0/animals');
      console.log('MOUNTED', res.data);
      this.setState({
        animals: res.data.animals
      });
      // axios.get('api/v0/animals').then((res) => {
      //   console.log('RESPONSE', res);
      // });

    }
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = (response) => {
      console.log('RESPONSE', response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log('clicked');

    render() {
        // let fbContent;
        // if (this.state.isLoggedIn) {
        //     fbContent = (
        //         <div style = {{
        //             width: '400px',
        //             margin: 'auto',
        //             padding: '20px'
        //         }}>
        //         <img src={this.state.picture} alt="meno" />
        //         <h2>LOGGED IN: {this.state.name}</h2>
        //         <p>email: {this.state.email}</p>
        //         </div>
        //     )
        // } else {
        //     // ak nieje prihlaseny
        //     fbContent = (<FacebookLogin
        //         appId="2207234946047173"
        //         autoLoad={true}
        //         fields="name,email,picture"
        //         onClick={this.componentClicked}
        //         callback={this.responseFacebook} />)
        // }
        console.log('STATE', this.state);

        const { animals } = this.state;
        console.log('animals', animals);

        const animalsList = animals ? (
            animals.map(animal => {
              return (
                <div key={animal.id}>
                  <h1> {animal.id} </h1>
                  <p> {animal.addedAt} </p>
                  <p> {animal.age} </p>
                </div>
              )
            })
        ) : (
          <p> no posts </p>
        )
        return (
            <div>
            {/* {fbContent} */}
            {animalsList}
            </div>
        )
    }
}
