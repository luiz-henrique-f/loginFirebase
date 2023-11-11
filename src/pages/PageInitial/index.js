import React from "react";
import { View, FlatList, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, Linking } from "react-native";
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
          <Card.Cover
            style={styles.cardImage}
            source={{
              uri: "https://media.gazetadopovo.com.br/2023/11/09174931/queimada-amazonas-aerea-floresta-Raphael-Alves-Efe-900x540.jpg",
            }}
          />

          <Card.Content>
            <Text style={styles.cardTitle}>
              Queimadas na Amazônia têm alta de 60% em outubro e governantes culpam seca, vento e Bolsonaro.
            </Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}O bioma da Amazônia teve 22.061 focos de incêndio em outubro deste ano, segundo o Instituto Nacional
              de Pesquisas Espaciais (Inpe). Foram 8.150 casos a mais do que o registrado no mesmo mês do ano anterior,
              representando uma alta de quase 60% durante o governo do presidente Luiz Inácio Lula da...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://www.gazetadopovo.com.br/republica/queimadas-na-amazonia-tem-alta-de-60-em-outubro-e-governantes-culpam-seca-vento-e-bolsonaro/"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>


        <Card style={styles.cardsInterval}>
          <Card.Cover
            style={styles.cardImage}
            source={{
              uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/AGF20231019290-e1698274563213.jpg?w=1220&h=674&crop=1",
            }}
          />

          <Card.Content>
            <Text style={styles.cardTitle}>Rios do Amazonas registram novas mínimas históricas.</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}Os rios da Bacia do Amazonas continuam a registrar queda com a seca que assola a região. Segundo o novo boletim de monitoramento hidrológico divulgado pelo Serviço Geológico do Brasil (SGB), divulgado na terça-feira (24), rios da região norte do país estão com marcas mais alarmantes do que as registradas em...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://www.cnnbrasil.com.br/nacional/rios-do-amazonas-registram-novas-minimas-historicas/"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>


        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://s2-g1.glbimg.com/Xvp6If8butQfq6T_FhNKHMW0Hgw=/0x0:779x465/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/3/IAFxJbRzqpIab3QhAO9A/garimpo.png" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Garimpo ilegal avança 10 mil hectares na bacia do Xingu no Pará desde 2018, aponta instituto.</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}O território faz parte da bacia do Xingu que vive pressões em escalada causadas pelo garimpo ilegal. Segundo o dossiê "Garimpo: um mal que perdura no Xingu", publicado pelo Instituto Socioambiental (ISA) e Rede Xingu+, o garimpo ilegal expandiu em 12,7 mil hectares a área de atuação. Desse total, 82% - cerca...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://g1.globo.com/pa/para/noticia/2023/11/10/garimpo-ilegal-avanca-10-mil-hectares-na-bacia-do-xingu-no-para-desde-2018-aponta-instituto-lideranca-diz-que-indigenas-sofrem-prejuizo.ghtml"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>


        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://www.hojemais.com.br/imagem/noticia/1000/1000/1699619961_14081.jpeg" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Instabilidade operacional paralisa Poço Jussara.</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}A GS Inima Samar divulgou nota na manhã desta sexta-feira (10), informando que equipes realizam manutenção emergencial no Poço Jussara, devido à uma instabilidade operacional. Segundo a concessionária, por causa dessa intervenção, poderá haver interferências no abastecimento de água, com...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://www.hojemais.com.br/aracatuba/noticia/cotidiano/instabilidade-operacional-paralisa-poco-jussara"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>


        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "http://www.birigui.sp.gov.br/birigui/controle/arquivo/capa3_(2).png" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Prefeitura recebe máquina do Ministério da Agricultura, Pecuária e Abastecimento (MAPA).</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}A Prefeitura de Birigui recebeu, no início desta semana, uma máquina retroescavadeira adquirida, por meio de convênio com o Ministério da Agricultura, Pecuária e Abastecimento (MAPA). O investimento foi de R$ 453 mil, com contrapartida de R$ 58.003,70 do município.
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "http://www.birigui.sp.gov.br/birigui/noticias/noticias_detalhes.php?id_noticia=10248"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>


        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://i0.wp.com/oeco.org.br/wp-content/uploads/2023/11/Oeco2_MarianaBertrand_PeitoRoxo__MG_0254.jpg?resize=1920%2C1280&ssl=1" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Nova soltura de papagaios-do-peito-roxo reforça população em Minas Gerais.</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}No último domingo de outubro (29), um grupo de 20 papagaios-de-peito-roxo ganhou os céus de Minas Gerais. A soltura foi realizada no município de Dom Joaquim pelo Instituto Waita, através do Projeto Voar, e ajuda a reforçar a população na natureza do ameaçado papagaio. Exclusiva da Mata Atlântica, a...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://oeco.org.br/salada-verde/nova-soltura-de-papagaios-do-peito-roxo-reforca-populacao-em-minas-gerais/"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>

        
        <Card style={styles.cardsInterval}>
          <Card.Cover style={styles.cardImage} source={{ uri: "https://i0.wp.com/oeco.org.br/wp-content/uploads/2022/09/torsa.png?w=1920&ssl=1" }} />

          <Card.Content>
            <Text style={styles.cardTitle}>Extração ilegal de madeira cresce em áreas ainda não destinadas do Pará.</Text>

            <Text style={styles.cardText} variant="titleLarge">
              {"\t"}Entre agosto de 2021 e julho de 2022, cerca de 38 mil hectares de florestas no Pará sofreram extração de madeira, sendo que 46% desse total – 17,8 mil hectares – aconteceu de forma ilegal. Muito desta exploração está localizada em áreas ainda não destinadas no estado, mostra um estudo lançado ne...
            </Text>

            <Text
              style={styles.buttonLink}
              onPress={() => {
                Linking.openURL(
                  "https://oeco.org.br/noticias/extracao-ilegal-de-madeira-cresce-em-areas-ainda-nao-destinadas-do-para/"
                );
              }}>
              Acessar o site
            </Text>
          </Card.Content>
        </Card>

        <Text style={styles.finaleTitle}>Todos os direitos reservados</Text>
      </ScrollView>
    </View>
  );
}
