import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
Container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 30,
},
Title: {
    fontSize: 33,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 45,
},
containerEvents: {
    backgroundColor: '#1F1E25',
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
},
nameEvent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
},
eventDate: {
    fontSize: 16,
    color: '#fff9',
},
newEvent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
},
addEvent: {
    borderRadius: 5,
    color: '#fff',
    padding: 14,
    backgroundColor: '#268029',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
},
titleAdd: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},

// Modal styles

centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    top: 10,
  },
  input: {
    // flex: 1,
    height: 56,
    backgroundColor: '#1F1E20',
    borderRadius: 5,
    color: '#fff',
    padding: 20,
    fontSize: 16,
    marginBottom: 15,
  },
  modalView: {
    backgroundColor: '#171718',
    borderRadius: 20,
    padding: 40,
    bottom: 0,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#268029',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  });