import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

import ListItem from './components/ListItem';

class App extends Component {
  state = {
    posts: [],
  };

  // componentDidMount() {
  //   console.log('Mounted...');

  //   // Retrieve Posts from API
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then(function(response) {
  //       console.log(response.data[0].id);

  //       this.setState({
  //         posts: response.data,
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    console.log('Mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      const posts = res.data;
      this.setState({posts});
    });
  }

  render() {
    // const {posts} = this.state;
    // console.log(this.state.posts);

    let List;

    if (this.state.posts < 1) {
      console.log('No Posts...');
      List = <Text>Loading...</Text>;
    } else {
      console.log('Posts Exist');
      List = (
        <FlatList
          data={this.state.posts}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      );
    }

    return (
      <View>
        {List}

        {/* <FlatList
          data={this.state.posts}
          renderItem={({item}) => <ListItem item={item} />}
        /> */}
      </View>
    );
  }
}

export default App;
