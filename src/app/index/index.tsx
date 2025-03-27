import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function index() {
  const MENU = [
    {
      id: 1,
      name: "pizza",
      description: "pizza de carne",
      price: 42.0,
      image: require("@/assets/images/pizzadecarne.jpg"),
    },
    {
      id: 1,
      name: "pizza",
      description: "pizza de frango",
      price: 45.0,
      image: require("@/assets/images/pizza_frango.png"),
    },
    {
      id: 1,
      name: "pizza",
      description: "pizza de presunto",
      price: 44.0,
      image: require("@/assets/images/pizza-presunto-com-cheddar.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("@/assets//images/logo.png")}
        />
        <Text style={styles.restaurantName}>MZ ViniPizza</Text>,
        <Text style={styles.subtitle}>a melhor pizzaria do mundo</Text>
      </View>
      <View style={styles.tabs}>
        {["Pizza", "Refrigerante", "pizza doce"].map((item) => (
          <TouchableOpacity>
            <Text style={styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.menuList}>
        {
            MENU.map((item) =>(
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                     <Text style={styles.itemName}>{item.name}</Text>  
                     <Text style={styles.itemDescription}>{item.description}</Text>  
                     <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>   
                    </View>
                        <Image style={styles.itemImage} source={item.image}></Image>

                </TouchableOpacity>
            )) 
     
        }
      </ScrollView>
    </View>
  );
}
