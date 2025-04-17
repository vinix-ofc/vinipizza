import { Text, Image, ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";

export default function ProdutoScreen() {
    return (
        <View>
            
            <View style={styles.header}>
                <Image
                    style={styles.headerImage}
                    source={require("@/assets/images/pizzadecarne.jpg")}
                />
                <Text style={styles.restaurantName}>Pizza de Carne</Text>
                <Text style={styles.subtitle}>R$ 42.00</Text>
                <Text style={styles.title}> Ingredientes</Text>
                <Text style={styles.subtitle}>molho de tomate.
300 g de queijo mussarela em pedaços (não fatias)
3 tomates cortados em fatias.
orégano a gosto.</Text>
            </View>
             <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Pedir</Text>
                    </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    headerImage: {
        width: 400,
        height: 300,
        resizeMode: "contain",
    },
    restaurantName: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#666",
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
    },
    button:{
        width: "420",
        height: 55,
        backgroundColor: "#FF6347", // Cor do botão (vermelho tomate, remete à pizza)
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
       
        
    },
    buttonText:{
            
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
    }
});