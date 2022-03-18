import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 70,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
  },
  progress: {
    height: 3,
    // backgroundColor: '#bcbcbc',
    backgroundColor: '#1db954',
  },
  row: {
    flexDirection: 'row',

  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 8,
  },
  artist: {
    color: 'lightgray',
    fontSize: 13,
  }
})

export default styles;