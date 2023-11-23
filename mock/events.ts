const mockEvents = [
  {
    "slug": "christmas-wonderland",
    "title": "Christmas Wonderland",
    "description": "Experience a magical Christmas celebration with music, lights, and fun activities for all ages!",
    "location": "Nairobi",
    "poster": "https://images.pexels.com/photos/3810900/pexels-photo-3810900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "Waterfront Mall",
    "date": "2023-12-24",
    "time": "2023-12-24T18:00:00-03:00",
    "isFree": false,
    "tickets": {
      "price": 25,
      "currency": "USD"
    },
    "organizer": "Holiday Events Co.",
    "category": ["holiday", "festival", "music"]
  },
  {
    "slug": "nye-bash",
    "title": "New Year's Eve Bash",
    "description": "Join us for the ultimate New Year's countdown party with live music, fireworks, and more!",
    "location": "Westlands, Nairobi",
    "poster": "https://images.pexels.com/photos/3880062/pexels-photo-3880062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "GTC",
    "date": "2023-12-31",
    "time": "2023-12-31T20:00:00-03:00",
    "isFree": false,
    "tickets": {
      "price": 50,
      "currency": "USD"
    },
    "organizer": "City Events Management",
    "category": ["NYE", "festival", "music"]
  },
  {
    "slug": "gdg-kisumu",
    "title": "GDG Kisumu 2023",
    "description": "The biggest tech conference of the year! Keynote speeches, workshops, and networking opportunities.",
    "location": "Kisumu",
    "poster": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "Maseno",
    "date": "2023-12-15",
    "time": "2023-12-15T09:00:00-03:00",
    "isFree": false,
    "tickets": {
      "price": 150,
      "currency": "USD"
    },
    "organizer": "Tech Conferences Inc.",
    "category": ["conference", "tech"]
  },
  {
    "slug": "jamhuri-music-festival",
    "title": "Jamhuri Music Festival",
    "description": "A weekend of live music performances featuring top artists and bands!",
    "location": "Nairobi",
    "poster": "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "K1 Clubhouse",
    "date": "2023-12-02",
    "time": "2023-12-02T17:00:00-03:00",
    "isFree": false,
    "tickets": {
      "price": 40,
      "currency": "GBP"
    },
    "organizer": "Music Events Ltd.",
    "category": ["music", "concert", "cultural"]
  },
  {
    "slug": "wine-n-art",
    "title": "Wine 'n' Art Exhibition",
    "description": "Discover exquisite artworks by local artists. Free entry for art lovers! Lots of wine too",
    "location": "Limuru rd",
    "poster": "https://images.pexels.com/photos/1321552/pexels-photo-1321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "Village Market",
    "date": "2023-11-25",
    "time": "2023-11-25T11:00:00-03:00",
    "isFree": true,
    "tickets": null,
    "organizer": "Parisian Artists Association",
    "category": ["art", "cultural", "music"]
  },
  {
    "slug": "weekend-food-festival",
    "title": "Weekend Food Festival",
    "description": "Explore a variety of cuisines, food stalls, and culinary workshops over the weekend!",
    "location": "Westlands, Nairobi",
    "poster": "https://images.pexels.com/photos/4669250/pexels-photo-4669250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "Nairobi Street Kitchen",
    "date": "2023-12-09",
    "time": "2023-12-09T12:00:00-03:00",
    "isFree": true,
    "tickets": null,
    "organizer": "Foodie Events LLC",
    "category": ["food", "festival", "music"]
  },
  {
    "slug": "family-fun-day",
    "title": "Family Fun Day",
    "description": "A day filled with games, activities, and entertainment for families. Free entry!",
    "location": "Ngong Rd",
    "poster": "https://images.pexels.com/photos/4374575/pexels-photo-4374575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "venue": "Uhuru Park",
    "date": "2023-12-16",
    "time": "2023-12-16T09:00:00-03:00",
    "isFree": true,
    "tickets": null,
    "organizer": "Family Events Co.",
    "category": ["family", "cinema", "watch", "sports", "music"]
  }
]

export { mockEvents };