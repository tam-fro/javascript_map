// var map = L.map('map').setView([緯度, 経度], ズームレベル);
var map = L.map('map').setView([33.67184672345501, 130.443288792812], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

// L.marker([緯度, 経度]).addTo(map).bindPopup('こんにちは！');
// 吹き出しあり
// L.marker([緯度, 経度]).addTo(map).bindPopup('こんにちは！').openPopup();
L.marker([33.67184672345501, 130.443288792812], { icon: whiteIcon }).addTo(map).bindPopup('九産大美術館<br><img src="images/img01.png" alt="img">').openPopup();

const circle = L.circle([33.67184672345501, 130.443288792812], {
  color: 'pink', //円の輪郭線の色
  fillColor: 'pink', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);