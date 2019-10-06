from geopy.geocoders import Nominatim
import gmplot
import googlemaps
from googleplaces import GooglePlaces, types
import gmaps

def MidPoint(n, addr):
    geolocator = Nominatim(user_agent="MeetInTheMid")
    gmaps = googlemaps.Client(key='AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8')
    google_places = GooglePlaces('AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8')
    lat = []
    longy = []
    temp = []
    print("This is",addr)
    for x in addr:
        print(x)
        location = geolocator.geocode(x)
        lat.append(location.latitude)
        longy.append(location.longitude)
        temp.append((location.latitude, location.longitude))
    lat_mid = sum(lat)/n
    longy_mid = sum(longy)/n
    print(temp)
    gmap = gmplot.GoogleMapPlotter(lat_mid,longy_mid,12)
    lat, longy = zip(*temp)
    #lat, longy = zip(*[(19.0549792, 72.8402203), (19.0549792, 72.8402203)])
    lat_mid = round(lat_mid, 4)
    longy_mid = round(longy_mid, 4)
    print(lat_mid, longy_mid)
    print(type(lat_mid))
    rest_near_me = google_places.nearby_search(
        lat_lng={'lat': lat_mid, 'lng': longy_mid},
        radius=20,
        types=[types.TYPE_CAFE])
    print("Rest mea",rest_near_me)
    for place in rest_near_me.places:
        print("this si:",place.geo_location['lat'], place.geo_location['lng'])
        gmap.marker(place.geo_location['lat'], place.geo_location['lng'], 'green')
    gmap.scatter(lat, longy, 'FA0000', size = 50, marker=False)
    for i in range(len(addr)):
        gmap.marker(lat[i], longy[i], 'red')
    gmap.marker(lat_mid, longy_mid, 'cornflowerblue' )
    for x in range(len(addr)):
        gmap.plot([lat_mid, lat[x]], [longy_mid, longy[x]],'blue', edge_width=5)
    mid_addr = geolocator.reverse(lat_mid, longy_mid)
    #gmap.plot(lat_mid, longy_mid)
    gmap.apikey = "AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8"


    #print(gmaps.directions(addr[0], mid_addr))

    gmap.draw(r"C:\Users\Ritu\PycharmProjects\MiddleGround\Main\templates\temp.html") #to save the image

    return lat_mid, longy_mid, temp





