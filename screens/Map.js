import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import data from "../data/data.json";
import routePoints from "../data/routePoints.json";
import mapStyles from "../styles/mapStyles";
import Menu from "../components/Menu";
import MenuButton from "../components/MenuButton";

function CourierMap() {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const mapRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRouteCardPress = (coords) => {
    const route = data.find((r) => r.coords === coords);
    const points = route.polylineCoords.map((point) => ({
      latitude: point.latitude,
      longitude: point.longitude,
    }));
    setSelectedRoute({ ...route, points });
    const coordinates =
      selectedRoute && selectedRoute.points ? selectedRoute.points : points;
    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
      animated: true,
    });
  };
  const handleAddressPress = (point) => {
    const { latitude, longitude } = point;
    mapRef.current.animateCamera(
      {
        center: {
          latitude,
          longitude,
        },
        zoom: 15,
      },
      { duration: 1000 }
    );
  };
  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <View style={mapStyles.container}>
      {/* Хедер */}
      {isMenuOpen && <Menu onPress={() => setIsMenuOpen(false)} />}

      <View style={mapStyles.header}>
        <MenuButton onPress={handleMenuPress} isMenuOpen={isMenuOpen} />
        <Text style={mapStyles.headerTitle}>Рейсы</Text>
        <View style={mapStyles.iconContainer}>
          <TouchableOpacity
            style={mapStyles.icon}
            onPress={() => console.log("Иконки")}
          >
            <Icon name="security" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={mapStyles.icon}
            onPress={() => console.log("Иконки")}
          >
            <Feather name="radio" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={mapStyles.icon}
            onPress={() => console.log("Иконки")}
          >
            <Icon name="gps-fixed" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Иконки")}>
            <Icon name="signal-cellular-alt" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Карточки пройденных маршрутов */}
        {data.slice(0, 2).map((item) => (
          <TouchableOpacity
            key={item.routeNumber}
            onPress={() => handleRouteCardPress(item.coords)}
          >
            <View style={mapStyles.cardContainer}>
              <View style={mapStyles.cardHeader}>
                <Text style={mapStyles.cardHeaderText}>
                  №{item.routeNumber} {item.routeName}
                </Text>
              </View>
              <View style={mapStyles.cardBody}>
                <Text style={mapStyles.cardDate}>
                  {item.startTime} - {item.endTime}
                </Text>
                <Text style={mapStyles.cardText}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Карта GPS */}
        <View style={mapStyles.mapContainer}>
          <MapView
            ref={mapRef}
            style={mapStyles.map}
            initialRegion={{
              latitude: 49.980845,
              longitude: 36.252792,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {routePoints.routePoints.map((point) => (
              <Marker
                key={point.name}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
                title={point.name}
                description={`${point.city}, ${point.country}`}
              />
            ))}
            {selectedRoute && selectedRoute.points && (
              <>
                <Polyline
                  key={selectedRoute.routeNumber}
                  coordinates={selectedRoute.points}
                  strokeColor="#00CC99"
                  strokeWidth={4}
                />
                <Marker
                  coordinate={selectedRoute.points[0]}
                  title="Start"
                  description="Starting point"
                >
                  <View style={mapStyles.marker}>
                    <FontAwesome name="circle" size={18} color="#00CC99" />
                  </View>
                </Marker>
                <Marker
                  coordinate={
                    selectedRoute.points[selectedRoute.points.length - 1]
                  }
                  title="End"
                  description="Ending point"
                >
                  <View style={mapStyles.marker}>
                    <FontAwesome name="stop-circle-o" size={18} color="#000" />
                  </View>
                </Marker>
              </>
            )}
          </MapView>
        </View>
        {/* Адреса точек доставки */}
        <View style={mapStyles.addressSection}>
          {routePoints.routePoints.map((point) => (
            <TouchableOpacity
              key={point.name}
              style={mapStyles.addressItem}
              onPress={() => handleAddressPress(point)}
            >
              <Feather name="map-pin" size={24} style={mapStyles.addressIcon} />
              <View style={mapStyles.addressTextContainer}>
                <Text style={mapStyles.addressName}>{point.name}</Text>
                <Text style={mapStyles.addressInfo}>
                  {point.city}, {point.country}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Итоговая информация */}
        <View style={mapStyles.infoContainer}>
          <View style={mapStyles.infoItem}>
            <Icon
              name="push-pin"
              size={24}
              color="#000"
              style={mapStyles.infoIcon}
            />
            <Text style={mapStyles.infoText}>Заказы сегодня: 0</Text>
          </View>
          <View style={mapStyles.infoItem}>
            <Feather
              name="map"
              size={24}
              color="#000"
              style={mapStyles.infoIcon}
            />
            <Text style={mapStyles.infoText}>Рейсы: 0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CourierMap;

// import React, { useState, useRef } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";
// import { ScrollView } from "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import Feather from "react-native-vector-icons/Feather";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import data from "../data/data.json";
// import routePoints from "../data/routePoints.json";
// import mapStyles from "../styles/mapStyles";

// function CourierMap() {
//   const [selectedRoute, setSelectedRoute] = useState(null);
//   const mapRef = useRef(null);

//   const handleRouteCardPress = (coords) => {
//     const route = data.find((r) => r.coords === coords);
//     const points = route.polylineCoords.map((point) => ({
//       latitude: point.latitude,
//       longitude: point.longitude,
//     }));
//     setSelectedRoute({ ...route, points });
//     const coordinates =
//       selectedRoute && selectedRoute.points ? selectedRoute.points : points;
//     mapRef.current.fitToCoordinates(coordinates, {
//       edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
//       animated: true,
//     });
//   };
//   const handleAddressPress = (point) => {
//     const { latitude, longitude } = point;
//     mapRef.current.animateCamera(
//       {
//         center: {
//           latitude,
//           longitude,
//         },
//         zoom: 15,
//       },
//       { duration: 1000 }
//     );
//   };

//   return (
//     <View style={mapStyles.container}>
//       {/* Хедер */}
//       <View style={mapStyles.header}>
//         <TouchableOpacity
//           style={mapStyles.menuButton}
//           onPress={() => console.log("Меню")}
//         >
//           <Icon name="menu" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={mapStyles.headerTitle}>Рейсы</Text>
//         <View style={mapStyles.iconContainer}>
//           <TouchableOpacity
//             style={mapStyles.icon}
//             onPress={() => console.log("Иконки")}
//           >
//             <Icon name="security" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={mapStyles.icon}
//             onPress={() => console.log("Иконки")}
//           >
//             <Feather name="radio" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={mapStyles.icon}
//             onPress={() => console.log("Иконки")}
//           >
//             <Icon name="gps-fixed" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log("Иконки")}>
//             <Icon name="signal-cellular-alt" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView>
//         {/* Карточки пройденных маршрутов */}
//         {data.slice(0, 2).map((item) => (
//           <TouchableOpacity
//             key={item.routeNumber}
//             onPress={() => handleRouteCardPress(item.coords)}
//           >
//             <View style={mapStyles.cardContainer}>
//               <View style={mapStyles.cardHeader}>
//                 <Text style={mapStyles.cardHeaderText}>
//                   №{item.routeNumber} {item.routeName}
//                 </Text>
//               </View>
//               <View style={mapStyles.cardBody}>
//                 <Text style={mapStyles.cardDate}>
//                   {item.startTime} - {item.endTime}
//                 </Text>
//                 <Text style={mapStyles.cardText}>{item.text}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}

//         {/* Карта GPS */}
//         <View style={mapStyles.mapContainer}>
//           <MapView
//             ref={mapRef}
//             style={mapStyles.map}
//             initialRegion={{
//               latitude: 49.980845,
//               longitude: 36.252792,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//           >
//             {routePoints.routePoints.map((point) => (
//               <Marker
//                 key={point.name}
//                 coordinate={{
//                   latitude: point.latitude,
//                   longitude: point.longitude,
//                 }}
//                 title={point.name}
//                 description={`${point.city}, ${point.country}`}
//               />
//             ))}
//             {selectedRoute && selectedRoute.points && (
//               <>
//                 <Polyline
//                   key={selectedRoute.routeNumber}
//                   coordinates={selectedRoute.points}
//                   strokeColor="#00CC99"
//                   strokeWidth={4}
//                 />
//                 <Marker
//                   coordinate={selectedRoute.points[0]}
//                   title="Start"
//                   description="Starting point"
//                 >
//                   <View style={mapStyles.marker}>
//                     <FontAwesome name="circle" size={18} color="#00CC99" />
//                   </View>
//                 </Marker>
//                 <Marker
//                   coordinate={
//                     selectedRoute.points[selectedRoute.points.length - 1]
//                   }
//                   title="End"
//                   description="Ending point"
//                 >
//                   <View style={mapStyles.marker}>
//                     <FontAwesome name="stop-circle-o" size={18} color="#000" />
//                   </View>
//                 </Marker>
//               </>
//             )}
//           </MapView>
//         </View>
//         {/* Адреса точек доставки */}
//         <View style={mapStyles.addressSection}>
//           {routePoints.routePoints.map((point) => (
//             <TouchableOpacity
//               key={point.name}
//               style={mapStyles.addressItem}
//               onPress={() => handleAddressPress(point)}
//             >
//               <Feather name="map-pin" size={24} style={mapStyles.addressIcon} />
//               <View style={mapStyles.addressTextContainer}>
//                 <Text style={mapStyles.addressName}>{point.name}</Text>
//                 <Text style={mapStyles.addressInfo}>
//                   {point.city}, {point.country}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Итоговая информация */}
//         <View style={mapStyles.infoContainer}>
//           <View style={mapStyles.infoItem}>
//             <Icon
//               name="push-pin"
//               size={24}
//               color="#000"
//               style={mapStyles.infoIcon}
//             />
//             <Text style={mapStyles.infoText}>Заказы сегодня: 0</Text>
//           </View>
//           <View style={mapStyles.infoItem}>
//             <Feather
//               name="map"
//               size={24}
//               color="#000"
//               style={mapStyles.infoIcon}
//             />
//             <Text style={mapStyles.infoText}>Рейсы: 0</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// export default CourierMap;
