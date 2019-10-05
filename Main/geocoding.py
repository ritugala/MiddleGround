from geopy.geocoders import Nominatim
import gmplot


def MidPoint(n, addr):
    geolocator = Nominatim(user_agent="MeetInTheMiddl")
    lat = []
    long = []
    temp = []
    print("This is",addr)
    for x in addr:
        print(x)
        location = geolocator.geocode(x)
        lat.append(location.latitude)
        long.append(location.longitude)
        temp.append((location.latitude, location.longitude))
    lat_mid = sum(lat)/n
    long_mid = sum(long)/n
    print(temp)
    gmap = gmplot.GoogleMapPlotter(lat_mid,long_mid,7)
    lat, long = zip(*temp)
    #lat, long = zip(*[(19.0549792, 72.8402203), (19.0549792, 72.8402203)])
    print(lat_mid, long_mid)

    gmap.scatter(lat, long, 'FA0000', size = 1000, marker=False)
    #gmap.plot(lat_mid, long_mid)
    gmap.apikey = "AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8"


    gmap.draw(r"c:\users\Ritu\Desktop\\temp.html") #to save the image





