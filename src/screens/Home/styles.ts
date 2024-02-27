import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 30,
    },
    eventTitle: {
      fontSize: 33,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 20,
    },
    eventDate: {
        fontSize: 18,
        color: '#fff9',
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E20',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#268029',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
  });
  