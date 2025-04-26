import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Azul
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Drop shadow
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10, // Para Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  display: {
    width: '100%',
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 10 }, // Aumenta o deslocamento vertical
    shadowOpacity: 0.8, // Torna a sombra mais opaca
    shadowRadius: 10, // Aumenta o desfoque da sombra
    elevation: 20, // aumenta a intensidade
  },
  displayText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default styles;