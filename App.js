const { View, Text, StyleSheet, Image, Button } = require("react-native");
import { productData } from "./constant/product.constant";

const App = () => {
  return (
    <View>
      {/* Heading */}
      <View>
        <Text style={styles.heading}>Product Application</Text>
      </View>
      {/* card container */}
      <View style={styles.paddingHorizontal}>
        {/* product 1 */}
        <View style={styles.productCard}>
          {/* left */}
          <View style={styles.productLeftArea}>
            <Image
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              style={styles.productImage}
            />
            <View style={styles.productContent}>
              <Text style={styles.productTitle}>Korian Drone</Text>
              <Text style={styles.productDescription}>Korian Drone</Text>
            </View>
          </View>
          {/* right */}
          <View style={styles.productRightArea}>
            <Text>1200</Text>
            <Button title="Learn More" color="#841584" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

// Styles

const styles = StyleSheet.create({
  heading: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#006bf8",
  },
  productContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    // borderWidth: 2,
    // bordercolor: "blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f3f3f3",
    padding: 8,
    borderRadius: 8,
  },
  productImage: {
    width: 40,
    height: 40,
  },
  productContent: {
    marginLeft: 10,
  },
  productTitle: {},
  productDescription: {},
  productPrice: {},
  productButton: {},
  productLeftArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productRightArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
