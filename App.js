/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  // const isSmallerThen = (num) => {
  //   return new Promise((resolve, reject) => {
  //     if (num < 10) {
  //       resolve(true);
  //     } else {
  //       reject(false);
  //     }
  //   });
  // };

  const callPromises = () => {
    // let data = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // resolve({name: 'mohit', age: '29'});
    //     reject(10);
    //   }, 2000);
    // });
    // data
    //   .then((item) => {
    //     console.log('1st promise', item);
    //     // throw new Error('data issue');
    //     // return item * 10;
    //   })
    //   .catch((err) => {
    //     console.log('catch block  ', err);
    //   })
    //   .finally((finalKey) => {
    //     console.log('finally keyworld');
    //   });
    //***************** EXAMPLE OF ALL PROMISES *********************/
    let data = Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.log('2 second');
          resolve('2 second');
        }, 2000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('1 second');
          // console.log('1 second');
        }, 1000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('4 second');
        }, 4000);
      }),
    ]);
    data
      .then((item) => {
        console.log('1st promise', item);
        // throw new Error('data issue');
      })
      .catch((err) => {
        console.log('catch block  ', err);
      })
      .finally((finalKey) => {
        console.log('finally keyworld');
      });
    //*****************     EXAMPLE OF ALL PROMISES     *********************/
    // console.log('hello');
    // let data = fetch('http://dummy.restapiexample.com/api/v1/employees');
    // data
    //   .then((item) => {
    //     // console.log('result got -----> ', item);
    //     return item.json();
    //   })
    //   .then((result) => {
    //     console.log('result found', result);
    //   });
    // console.log('found data', data);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>This is TEXT</Text>
          <Button title="SHOW PROMISES" onPress={callPromises} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
