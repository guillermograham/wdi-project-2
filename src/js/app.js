/* global google:ignore */
$(() => {
  const $map = $('.map');
  let map = null;
  let marker = null;

  if($('.showBar').length !== 0 || $('.newBar').length !== 0) {
    initMap();

    if(!$('.showBar').length) {
      google.maps.event.addListener(map, 'click', handleMapClick);
    }
  }





  function initMap() {
    console.log('function reached');
    const latLng = { lat: 41.3851, lng: 2.1734 };
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: latLng
    });
  }

  function handleMapClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lng);
    console.log(lat);
    $('input[name="address[lng]"]').val(lng);
    $('input[name="address[lat]"]').val(lat);


    if(marker) marker.setMap(null);

    if($('#lat').val() && $('#lng').val()) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
      });
    } else {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
      });
    }
  }




});
