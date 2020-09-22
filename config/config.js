var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
{
    disabled: false,
    module: "MMM-ToDoLive",
    position: "middle_center",
    config: {
        css: "4", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert
        myHeader: "Things to do!",
    }
},
{
    disabled: false,
    module: "MMM-ToDoLive",
    position: "top_right",
    config: {
        css: "2", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert
        myHeader: "Shopping List",
    }
},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "My Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					},
{
						symbol: "My Calendar",
						url: "https://calendar.google.com/calendar/ical/rutujamhatre48%40gmail.com/public/basic.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "India",
				locationID: "1269750",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "81c5203956fc53b9718ac6fbf6767f66"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "India",
				locationID: "1269750",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "81c5203956fc53b9718ac6fbf6767f66"
			}
		},
 {
            module: 'MMM-CoinMarketCap',
            position: "top_left",
            header: "Cryptocurrencies",
            config: {
                apiKey: '4983339b-f8fd-41aa-89f5-981040b6cd55',
                currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple'],
                view: 'graphWithChanges',
                conversion: 'CAD'
            }
        },
{
		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
		position: "lower_third",	// This can be any of the regions.
		config: {
			// See 'Configuration options' in README.md for more information.
			video_id: "w3jLJU7DT5E",
			loop: true,
                        autoplay: true,
                        showinfo:true
		}
	},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Times of India",
						url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

if (typeof module !== "undefined") {module.exports = config;}

