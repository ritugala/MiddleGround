from geopy.geocoders import Nominatim
import gmplot


def MidPoint(n, addr):
    geolocator = Nominatim(user_agent="MeetInTheMidd")
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
    gmap = gmplot.GoogleMapPlotter(lat_mid,longy_mid,8)
    lat, longy = zip(*temp)
    #lat, longy = zip(*[(19.0549792, 72.8402203), (19.0549792, 72.8402203)])
    print(lat_mid, longy_mid)

    gmap.scatter(lat, longy, 'FA0000', size = 1000, marker=False)
    gmap.marker(lat_mid, longy_mid, 'cornflowerblue' )
    #gmap.plot(lat_mid, longy_mid)
    gmap.apikey = "AIzaSyCd3yT-00TDYD1gYM6WWWKTO6kxOVr-ho8"


    gmap.draw(r"C:\Users\Ritu\PycharmProjects\MiddleGround\Main\templates\temp.html") #to save the image
    return lat_mid, longy_mid, temp





