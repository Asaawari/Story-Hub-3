import * as React from 'react';
import { Text, View } from 'react-native';

export default class ReadScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Read a Story !</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{textAlign: 'center',fontSize: 12, textDecorationLine: 'underline', textDecorationStyle: 'dashed',
          textDecorationColor: 'purple', color:'orange',fontFamily: 'Georgia', paddingTop: 30}} >
            A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. 
            This disturbed the lion’s sleep, and he woke up quite angry. 
            He was about to eat the mouse when the mouse desperately requested the lion to set him free. 
            “I promise you, I will be of great help to you someday if you save me.” 
            The lion laughed at the mouse’s confidence and let him go.
            One day, a few hunters came into the forest and took the lion with them. 
            They tied him up against a tree. 
            The lion was struggling to get out and started to whimper. 
            Soon, the mouse walked past and noticed the lion in trouble. 
            Quickly, he ran and gnawed on the ropes to set the lion free. 
            Both of them sped off into the jungle.
            Moral of the Story
            A small act of kindness can go a long way.!</Text>
        </View>
        </View>
      );
    }
  }