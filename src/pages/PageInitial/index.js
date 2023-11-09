import React from "react";
import { View, FlatList, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function PageInitial({ navigation }) {
  function logout() {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTopo}>
        <View style={styles.containerTopoTitulo}>
          <MaterialCommunityIcons name="pine-tree" size={23} color="#008000" style={styles.iconTree} />
          <Text style={styles.textHeader}>Portal de Notícias</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => {
            logout();
          }}>
          <Text style={styles.iconButtonLogout}>
            <MaterialCommunityIcons name="logout" size={23} color="#FF0000" />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.initialTittle}>Últimas notícias</Text>
      </View>

      <ScrollView style={styles.cards}>
        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 1</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 2</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 3</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 4</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 5</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 6</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>

        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://picsum.photos/700" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Título 7</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English
            </Text>

            <Text style={styles.buttonLink}>Ir para o site</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}
