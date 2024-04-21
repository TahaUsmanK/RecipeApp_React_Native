import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 4,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    height: '20%',
  },
  appBarView: {
    margin: 16,
  },
  searchText: {
    fontSize: 48,
    fontWeight: '400',
    color: 'black',
    bottom: 6,
  },
  text: {
    fontSize: 24,
    fontWeight: '300',
    color: 'black',
    bottom: 10,
  },
  heading1: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    marginLeft: 14,
    marginTop: 14,
  },
});

export default HomeStyle;
