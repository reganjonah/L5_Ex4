import React from 'react';
import { View, Text, Image, SectionList, TouchableOpacity, Button, StyleSheet, StatusBar } from 'react-native';

const datasource = [
  {
    title: 'GOALKEEPERS',
    data: [
      {
        name: 'IZWAN MAHBUD',
        squadNumber: '1',
        image: require('./img/gk/izwan.png'),
      },
      {
        name: 'ADIB AZAHARI',
        squadNumber: '13',
        image: require('./img/gk/adib.png'),
      },
      {
        name: 'ZHARFAN ROHAIZAD',
        squadNumber: '28',
        image: require('./img/gk/zharfan.png'),
      },
    ],
  },
  {
    title: 'DEFENDERS',
    data: [
      {
        name: 'BILL MAMADOU',
        squadNumber: '3',
        image: require('./img/def/bill.png'),
      },
      {
        name: 'TONI DATKOVIC',
        squadNumber: '4',
        image: require('./img/def/toni.png'),
      },
      {
        name: 'LIONEL TAN',
        squadNumber: '5',
        image: require('./img/def/lionel.png'),
      },
      {
        name: 'HARISS HARUN',
        squadNumber: '14',
        image: require('./img/def/hariss.png'),
      },
      {
        name: 'ZULQARNAEN SUZLIMAN',
        squadNumber: '19',
        image: require('./img/def/zulqarnaen.png'),
      },
      {
        name: 'SERGIO CARMONA PEREZ',
        squadNumber: '20',
        image: require('./img/def/sergio.png'),
      },
      {
        name: 'CHRIS VAN HUIZEN',
        squadNumber: '22',
        image: require('./img/def/chris.png'),
      },
      {
        name: 'BAILEY WRIGHT',
        squadNumber: '26',
        image: require('./img/def/bailey.png'),
      },
    ],
  },
  {
    title: 'MIDFIELDERS',
    data: [
      {
        name: 'ANU',
        squadNumber: '6',
        image: require('./img/mid/anu.png'),
      },
      {
        name: 'RUI PIRES',
        squadNumber: '8',
        image: require('./img/mid/rui.png'),
      },
      {
        name: 'BART RAMSELAAR',
        squadNumber: '10',
        image: require('./img/mid/bart.png'),
      },
      {
        name: 'HAFIZ NOR',
        squadNumber: '11',
        image: require('./img/mid/hafiz.png'),
      },
      {
        name: 'SONG UI-YONG',
        squadNumber: '15',
        image: require('./img/mid/song.png'),
      },
      {
        name: 'HAMI SYAHIN',
        squadNumber: '16',
        image: require('./img/mid/hami.png'),
      },
      {
        name: 'OBREN KLJAJIC',
        squadNumber: '18',
        image: require('./img/mid/obren.png'),
      },
      {
        name: 'HAIQAL PASHIA',
        squadNumber: '23',
        image: require('./img/mid/haiqal.png'),
      },
      {
        name: 'ADAM SWANDI',
        squadNumber: '27',
        image: require('./img/mid/adam.png'),
      },
      {
        name: 'NUR MUHAMMAD ASIS',
        squadNumber: '77',
        image: require('./img/mid/nur.png'),
      },
    ],
  },
  {
    title: 'FORWARDS',
    data: [
      {
        name: 'SHAWAL ANUAR',
        squadNumber: '7',
        image: require('./img/fwd/shawal.png'),
      },
      {
        name: 'MAXIME LESTIENNE',
        squadNumber: '17',
        image: require('./img/fwd/maxime.png'),
      },
      {
        name: 'ABDUL RASAQ',
        squadNumber: '21',
        image: require('./img/fwd/abdul rasaq.png'),
      },
      {
        name: 'NATHAN MAO',
        squadNumber: '80',
        image: require('./img/fwd/nathan.png'),
      },
      {
        name: 'LENNART THY',
        squadNumber: '9',
        image: require('./img/fwd/lennart.png'),
      },

    ],
  },
];

// Function to render each Pokémon item
const renderItem = ({ item }) => {
  const [firstName, ...lastNameParts] = item.name.split(' '); // Split name into first and last
  const lastName = lastNameParts.join(' '); // Rejoin the rest as last name

  return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>
            <Text style={styles.firstName}>{firstName}</Text>{' '}
            <Text style={styles.lastName}>{lastName}</Text>
          </Text>
          <Text style={styles.squadNumber}>Squad Number: {item.squadNumber}</Text>
        </View>
        <Image source={item.image} style={styles.itemImage}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        {/* Fixed Header */}
        <View style={styles.fixedHeader}>
          <Image
              source={require('./img/lcs.png')}
              style={styles.logo}
          />
          <Text style={styles.appTitle}>Team Roster</Text>
        </View>

        {/* Section List */}
        <SectionList
            sections={datasource}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
            stickyHeaderIndices={[0]} // Lock the first header (Add Pokémon button container)
            renderSectionHeader={({ section: { title } }) => (
                <View style={[styles.header, title === 'Goalkeepers' ? styles.gkHeader : title === 'Defenders' ? styles.defHeader : title === 'Midfielders' ? styles.midHeader : styles.fwdHeader]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },

  fixedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'navy',
    marginBottom: 1,
    padding: 10,
    paddingTop: 20, // For better spacing on devices with notches
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: 'white',

    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    borderLeftWidth: 2,
    borderLeftColor: 'lightgrey',
    borderRightWidth: 2,
    borderRightColor: 'lightgrey',
  },
  itemTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 100,

  },
  itemText: {
    fontSize: 20,
  },
  squadNumber: {
    fontSize: 14,
    color: 'black',
    fontStyle: 'italic',
  },
  itemImage: {
    width: 136,
    height: 186,
    resizeMode: 'contain',
  },
  header: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    borderLeftWidth: 2,
    borderLeftColor: 'lightgrey',
    borderRightWidth: 2,
    borderRightColor: 'lightgrey',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',

  },
  gkHeader: {
    backgroundColor: 'lavender',
  },
  defHeader: {
    backgroundColor: 'lavender',
  },
  midHeader: {
    backgroundColor: 'lavender',
  },
  fwdHeader: {
    backgroundColor: 'lavender',
  },
  firstName: {
    fontWeight: 'bold',
  },
  lastName: {
    fontWeight: 'normal',
  },
});

export default App;
