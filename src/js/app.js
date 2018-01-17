/* global google:ignore */
$(() => {
  const $map = $('.map');
  let map = null;

  if($('.showBar').length !== 0) {
    initMap();
  }



  function initMap() {
    console.log('function reached');
    const latLng = { lat: 41.3851, lng: 2.1734 };
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: latLng
    });
  }
});
