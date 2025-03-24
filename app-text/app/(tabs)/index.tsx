import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.capixaba}>
                Capixaba
            </Text>

            <Text style={styles.paulista}>
                Paulista
            </Text>

            <Text style={styles.carioca}>
                Carioca
            </Text>

            <Text style={styles.mineiro}>
                Mineiro
            </Text>

            <Text style={styles.cearense}>
                Cearense
            </Text>

            <Text style={styles.sergipano}>
                Sergipano
            </Text>

            <Text style={styles.baiano}>
                Baiano
            </Text>

            <Text style={styles.gaucho}>
                Gaucho
            </Text>

            <Text style={styles.majoara}>
                Majoara
            </Text>

            <Text style={styles.brasileiro}>
                Brasileiro
            </Text>



        </SafeAreaView>
    );
}

{/* crie novos estilos e customize o seu texto*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    capixaba: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    paulista: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e0e0e0',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        textAlign: 'center',
    },
    carioca: {
        margin: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFD700',
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#FF4500',
        borderRadius: 10,
        backgroundColor: '#32CD32',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    mineiro: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6D4C41',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 20,
        borderWidth: 2,
        borderColor: '#8D6E63',
        borderRadius: 10,
        backgroundColor: '#FFECB3',
    },
    cearense: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: 15,
        borderWidth: 3,
        borderColor: '#8B0000',
        borderRadius: 10,
        backgroundColor: '#FFD700',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 6,
    },
    sergipano: {
        margin: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#006400',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 15,
        borderWidth: 3,
        borderColor: '#8B0000',
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    baiano: {
        margin: 5,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFD700',
        fontFamily: 'cursive',
        textAlign: 'center',
        padding: 15,
        borderWidth: 3,
        borderColor: '#FF4500',
        borderRadius: 15,
        backgroundColor: '#1E90FF',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 6,
    },
    gaucho: {
        margin: 5,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 20,
        borderWidth: 4,
        borderColor: '#8B0000',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 8,
        textTransform: 'uppercase',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    majoara: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8B0000',
        fontFamily: 'fantasy',
        textAlign: 'center',
        padding: 20,
        borderWidth: 5,
        borderColor: '#FFD700',
        borderRadius: 12,
        backgroundColor: '#FFF8DC',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 8,
        textTransform: 'uppercase',
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 4,
    },
    brasileiro: {
        margin: 5,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#002776',
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center',
        padding: 20,
        borderWidth: 5,
        borderColor: '#FFCC00',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 10,
        textTransform: 'uppercase',
        letterSpacing: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 6,
        transform: [{ rotate: '-3deg' }],
    },
});
