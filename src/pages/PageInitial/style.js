import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerTopo: {
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  containerTopoTitulo: {
    flex: 2,
  },
  iconTree: {
    top: 50,
    left: 5,
  },
  textHeader: {
    marginTop: 26,
    marginLeft: 30,
    fontSize: 17,
    color: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
  },
  containerConteudo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogout: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 32,
    right: -7,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLogout: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  cards: {
    gap: 2,
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 0,
    // paddingBottom: 5,
  },
  cardsInterval: {
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#DCDCDC",
  },
  cardTitle: {
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: "500",
  },
  cardText: {
    // paddingTop: 5,
  },
  initialTittle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  buttonLink: {
    marginHorizontal: 75,
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 10,

    color: "#fff",
    fontWeight: "600",
    textTransform: "uppercase",
    backgroundColor: "#008000",
    textAlign: "center",
  },
});

export default styles;
