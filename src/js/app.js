/* global google:ignore */
$(() => {
  const $map = $('.map');
  let map = null;
  let marker = null;


  function handleMapClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lng);
    console.log(lat);

    $('input[name="address[lat]"]').val(lat);
    $('input[name="address[lng]"]').val(lng);


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

  if($('.showBar').length !== 0 || $('.newBar').length !== 0 || $('.editBar').length !== 0) {
    initMap();

    if(!$('.showBar').length) {
      google.maps.event.addListener(map, 'click', handleMapClick);
    }
  }







  function initMap() {
    const latLng = { lat: 41.3851, lng: 2.1734 };
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: latLng
    });
    if($('.editBar').length !== 0 || $('.showBar'). length !== 0) {
      console.log('loaded if block');
      // if map is rendering on the edit page, place marker on map with current lat and lng values
      const markerLatLng = {
        lat: parseFloat($('input[name="address[lat]"]').val()),
        lng: parseFloat($('input[name="address[lng]"]').val())
      };

      console.log(markerLatLng);

      marker = new google.maps.Marker({
        position: markerLatLng,
        map: map
      });

      map.setCenter(marker.getPosition());
      map.setZoom(18);
    }




  }






});
