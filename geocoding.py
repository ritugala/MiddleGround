from geopy.geocoders import Nominatim
import gmplot


def MidPoint(n, addr):
    geolocator = Nominatim(user_agent="MeetInTheMiddle")
    lat = []
    long = []
    for x in addr:
        location = geolocator.geocode(x)
        lat.append(location.latitude)
        long.append(location.longitude)

    lat_mid = sum(lat)/n
    long_mid = sum(long)/n

    gmap = gmplot.GoogleMapPlotter(30.3164945, 78.03219179999999, 13)

    gmap.scatter(lat, long, 'FF0000', size = 50, marker=True)
    gmap.plot(lat_mid, long_mid)
    gmap.apikey = "AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8"

    #gmap.draw(r"c:\users\Ritu\Desktop\\temp.html") #to save the image





