/* Script for changing Drupal CMS article style */

const allData = [
  {
    "year": 2000,
    "country": "Afghanistan",
    "total_killed": 8
  },
  {
    "year": 2001,
    "country": "Afghanistan",
    "total_killed": 2
  },
  {
    "year": 2002,
    "country": "Afghanistan",
    "total_killed": 3
  },
  {
    "year": 2003,
    "country": "Afghanistan",
    "total_killed": 13
  },
  {
    "year": 2004,
    "country": "Afghanistan",
    "total_killed": 26
  },
  {
    "year": 2005,
    "country": "Afghanistan",
    "total_killed": 20
  },
  {
    "year": 2006,
    "country": "Afghanistan",
    "total_killed": 30
  },
  {
    "year": 2007,
    "country": "Afghanistan",
    "total_killed": 21
  },
  {
    "year": 2008,
    "country": "Afghanistan",
    "total_killed": 32
  },
  {
    "year": 2009,
    "country": "Afghanistan",
    "total_killed": 24
  },
  {
    "year": 2010,
    "country": "Afghanistan",
    "total_killed": 34
  },
  {
    "year": 2011,
    "country": "Afghanistan",
    "total_killed": 31
  },
  {
    "year": 2012,
    "country": "Afghanistan",
    "total_killed": 11
  },
  {
    "year": 2013,
    "country": "Afghanistan",
    "total_killed": 48
  },
  {
    "year": 2014,
    "country": "Afghanistan",
    "total_killed": 42
  },
  {
    "year": 2015,
    "country": "Afghanistan",
    "total_killed": 41
  },
  {
    "year": 2016,
    "country": "Afghanistan",
    "total_killed": 14
  },
  {
    "year": 2017,
    "country": "Afghanistan",
    "total_killed": 15
  },
  {
    "year": 2018,
    "country": "Afghanistan",
    "total_killed": 14
  },
  {
    "year": 2019,
    "country": "Afghanistan",
    "total_killed": 18
  },
  {
    "year": 2020,
    "country": "Afghanistan",
    "total_killed": 2
  },
  {
    "year": 2021,
    "country": "Afghanistan",
    "total_killed": 21
  },
  {
    "year": 2022,
    "country": "Afghanistan",
    "total_killed": 9
  },
  {
    "year": 2023,
    "country": "Afghanistan",
    "total_killed": 0
  },
  {
    "year": 2000,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "CAR",
    "total_killed": 1
  },
  {
    "year": 2002,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "CAR",
    "total_killed": 2
  },
  {
    "year": 2007,
    "country": "CAR",
    "total_killed": 2
  },
  {
    "year": 2008,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "CAR",
    "total_killed": 4
  },
  {
    "year": 2010,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "CAR",
    "total_killed": 1
  },
  {
    "year": 2012,
    "country": "CAR",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "CAR",
    "total_killed": 4
  },
  {
    "year": 2014,
    "country": "CAR",
    "total_killed": 10
  },
  {
    "year": 2015,
    "country": "CAR",
    "total_killed": 6
  },
  {
    "year": 2016,
    "country": "CAR",
    "total_killed": 5
  },
  {
    "year": 2017,
    "country": "CAR",
    "total_killed": 17
  },
  {
    "year": 2018,
    "country": "CAR",
    "total_killed": 10
  },
  {
    "year": 2019,
    "country": "CAR",
    "total_killed": 6
  },
  {
    "year": 2020,
    "country": "CAR",
    "total_killed": 3
  },
  {
    "year": 2021,
    "country": "CAR",
    "total_killed": 8
  },
  {
    "year": 2022,
    "country": "CAR",
    "total_killed": 2
  },
  {
    "year": 2023,
    "country": "CAR",
    "total_killed": 2
  },
  {
    "year": 2000,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2001,
    "country": "DR Congo",
    "total_killed": 7
  },
  {
    "year": 2002,
    "country": "DR Congo",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "DR Congo",
    "total_killed": 4
  },
  {
    "year": 2004,
    "country": "DR Congo",
    "total_killed": 1
  },
  {
    "year": 2005,
    "country": "DR Congo",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2007,
    "country": "DR Congo",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "DR Congo",
    "total_killed": 4
  },
  {
    "year": 2009,
    "country": "DR Congo",
    "total_killed": 7
  },
  {
    "year": 2010,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2011,
    "country": "DR Congo",
    "total_killed": 5
  },
  {
    "year": 2012,
    "country": "DR Congo",
    "total_killed": 1
  },
  {
    "year": 2013,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2014,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2015,
    "country": "DR Congo",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "DR Congo",
    "total_killed": 3
  },
  {
    "year": 2017,
    "country": "DR Congo",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "DR Congo",
    "total_killed": 7
  },
  {
    "year": 2019,
    "country": "DR Congo",
    "total_killed": 12
  },
  {
    "year": 2020,
    "country": "DR Congo",
    "total_killed": 2
  },
  {
    "year": 2021,
    "country": "DR Congo",
    "total_killed": 6
  },
  {
    "year": 2022,
    "country": "DR Congo",
    "total_killed": 6
  },
  {
    "year": 2023,
    "country": "DR Congo",
    "total_killed": 4
  },
  {
    "year": 2000,
    "country": "Ethiopia",
    "total_killed": 1
  },
  {
    "year": 2001,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Ethiopia",
    "total_killed": 3
  },
  {
    "year": 2009,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Ethiopia",
    "total_killed": 1
  },
  {
    "year": 2012,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Ethiopia",
    "total_killed": 1
  },
  {
    "year": 2014,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2015,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Ethiopia",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "Ethiopia",
    "total_killed": 2
  },
  {
    "year": 2019,
    "country": "Ethiopia",
    "total_killed": 5
  },
  {
    "year": 2020,
    "country": "Ethiopia",
    "total_killed": 14
  },
  {
    "year": 2021,
    "country": "Ethiopia",
    "total_killed": 20
  },
  {
    "year": 2022,
    "country": "Ethiopia",
    "total_killed": 2
  },
  {
    "year": 2023,
    "country": "Ethiopia",
    "total_killed": 6
  },
  {
    "year": 2000,
    "country": "Iraq",
    "total_killed": 2
  },
  {
    "year": 2001,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Iraq",
    "total_killed": 1
  },
  {
    "year": 2003,
    "country": "Iraq",
    "total_killed": 29
  },
  {
    "year": 2004,
    "country": "Iraq",
    "total_killed": 11
  },
  {
    "year": 2005,
    "country": "Iraq",
    "total_killed": 5
  },
  {
    "year": 2006,
    "country": "Iraq",
    "total_killed": 4
  },
  {
    "year": 2007,
    "country": "Iraq",
    "total_killed": 5
  },
  {
    "year": 2008,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Iraq",
    "total_killed": 1
  },
  {
    "year": 2010,
    "country": "Iraq",
    "total_killed": 7
  },
  {
    "year": 2011,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2014,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2015,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2019,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2020,
    "country": "Iraq",
    "total_killed": 1
  },
  {
    "year": 2021,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2022,
    "country": "Iraq",
    "total_killed": 1
  },
  {
    "year": 2023,
    "country": "Iraq",
    "total_killed": 0
  },
  {
    "year": 2000,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2014,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2015,
    "country": "Myanmar",
    "total_killed": 1
  },
  {
    "year": 2016,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Myanmar",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "Myanmar",
    "total_killed": 1
  },
  {
    "year": 2019,
    "country": "Myanmar",
    "total_killed": 1
  },
  {
    "year": 2020,
    "country": "Myanmar",
    "total_killed": 1
  },
  {
    "year": 2021,
    "country": "Myanmar",
    "total_killed": 14
  },
  {
    "year": 2022,
    "country": "Myanmar",
    "total_killed": 20
  },
  {
    "year": 2023,
    "country": "Myanmar",
    "total_killed": 2
  },
  {
    "year": 2000,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Nigeria",
    "total_killed": 9
  },
  {
    "year": 2012,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Nigeria",
    "total_killed": 8
  },
  {
    "year": 2014,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2015,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "Nigeria",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Nigeria",
    "total_killed": 11
  },
  {
    "year": 2018,
    "country": "Nigeria",
    "total_killed": 5
  },
  {
    "year": 2019,
    "country": "Nigeria",
    "total_killed": 14
  },
  {
    "year": 2020,
    "country": "Nigeria",
    "total_killed": 6
  },
  {
    "year": 2021,
    "country": "Nigeria",
    "total_killed": 5
  },
  {
    "year": 2022,
    "country": "Nigeria",
    "total_killed": 1
  },
  {
    "year": 2023,
    "country": "Nigeria",
    "total_killed": 2
  },
  {
    "year": 2000,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Palestine",
    "total_killed": 5
  },
  {
    "year": 2003,
    "country": "Palestine",
    "total_killed": 1
  },
  {
    "year": 2004,
    "country": "Palestine",
    "total_killed": 2
  },
  {
    "year": 2005,
    "country": "Palestine",
    "total_killed": 1
  },
  {
    "year": 2006,
    "country": "Palestine",
    "total_killed": 4
  },
  {
    "year": 2007,
    "country": "Palestine",
    "total_killed": 3
  },
  {
    "year": 2008,
    "country": "Palestine",
    "total_killed": 1
  },
  {
    "year": 2009,
    "country": "Palestine",
    "total_killed": 13
  },
  {
    "year": 2010,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Palestine",
    "total_killed": 1
  },
  {
    "year": 2014,
    "country": "Palestine",
    "total_killed": 14
  },
  {
    "year": 2015,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "Palestine",
    "total_killed": 3
  },
  {
    "year": 2019,
    "country": "Palestine",
    "total_killed": 2
  },
  {
    "year": 2020,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2021,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2022,
    "country": "Palestine",
    "total_killed": 0
  },
  {
    "year": 2023,
    "country": "Palestine",
    "total_killed": 168
  },
  {
    "year": 2000,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Pakistan",
    "total_killed": 4
  },
  {
    "year": 2008,
    "country": "Pakistan",
    "total_killed": 8
  },
  {
    "year": 2009,
    "country": "Pakistan",
    "total_killed": 18
  },
  {
    "year": 2010,
    "country": "Pakistan",
    "total_killed": 14
  },
  {
    "year": 2011,
    "country": "Pakistan",
    "total_killed": 5
  },
  {
    "year": 2012,
    "country": "Pakistan",
    "total_killed": 13
  },
  {
    "year": 2013,
    "country": "Pakistan",
    "total_killed": 22
  },
  {
    "year": 2014,
    "country": "Pakistan",
    "total_killed": 8
  },
  {
    "year": 2015,
    "country": "Pakistan",
    "total_killed": 1
  },
  {
    "year": 2016,
    "country": "Pakistan",
    "total_killed": 1
  },
  {
    "year": 2017,
    "country": "Pakistan",
    "total_killed": 2
  },
  {
    "year": 2018,
    "country": "Pakistan",
    "total_killed": 1
  },
  {
    "year": 2019,
    "country": "Pakistan",
    "total_killed": 2
  },
  {
    "year": 2020,
    "country": "Pakistan",
    "total_killed": 2
  },
  {
    "year": 2021,
    "country": "Pakistan",
    "total_killed": 4
  },
  {
    "year": 2022,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2023,
    "country": "Pakistan",
    "total_killed": 0
  },
  {
    "year": 2000,
    "country": "Somalia",
    "total_killed": 11
  },
  {
    "year": 2001,
    "country": "Somalia",
    "total_killed": 6
  },
  {
    "year": 2002,
    "country": "Somalia",
    "total_killed": 4
  },
  {
    "year": 2003,
    "country": "Somalia",
    "total_killed": 6
  },
  {
    "year": 2004,
    "country": "Somalia",
    "total_killed": 2
  },
  {
    "year": 2005,
    "country": "Somalia",
    "total_killed": 5
  },
  {
    "year": 2006,
    "country": "Somalia",
    "total_killed": 5
  },
  {
    "year": 2007,
    "country": "Somalia",
    "total_killed": 9
  },
  {
    "year": 2008,
    "country": "Somalia",
    "total_killed": 46
  },
  {
    "year": 2009,
    "country": "Somalia",
    "total_killed": 19
  },
  {
    "year": 2010,
    "country": "Somalia",
    "total_killed": 5
  },
  {
    "year": 2011,
    "country": "Somalia",
    "total_killed": 13
  },
  {
    "year": 2012,
    "country": "Somalia",
    "total_killed": 8
  },
  {
    "year": 2013,
    "country": "Somalia",
    "total_killed": 15
  },
  {
    "year": 2014,
    "country": "Somalia",
    "total_killed": 9
  },
  {
    "year": 2015,
    "country": "Somalia",
    "total_killed": 11
  },
  {
    "year": 2016,
    "country": "Somalia",
    "total_killed": 10
  },
  {
    "year": 2017,
    "country": "Somalia",
    "total_killed": 9
  },
  {
    "year": 2018,
    "country": "Somalia",
    "total_killed": 3
  },
  {
    "year": 2019,
    "country": "Somalia",
    "total_killed": 5
  },
  {
    "year": 2020,
    "country": "Somalia",
    "total_killed": 11
  },
  {
    "year": 2021,
    "country": "Somalia",
    "total_killed": 5
  },
  {
    "year": 2022,
    "country": "Somalia",
    "total_killed": 14
  },
  {
    "year": 2023,
    "country": "Somalia",
    "total_killed": 4
  },
  {
    "year": 2000,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "South Sudan",
    "total_killed": 1
  },
  {
    "year": 2003,
    "country": "South Sudan",
    "total_killed": 1
  },
  {
    "year": 2004,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "South Sudan",
    "total_killed": 2
  },
  {
    "year": 2006,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "South Sudan",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "South Sudan",
    "total_killed": 9
  },
  {
    "year": 2012,
    "country": "South Sudan",
    "total_killed": 9
  },
  {
    "year": 2013,
    "country": "South Sudan",
    "total_killed": 15
  },
  {
    "year": 2014,
    "country": "South Sudan",
    "total_killed": 11
  },
  {
    "year": 2015,
    "country": "South Sudan",
    "total_killed": 15
  },
  {
    "year": 2016,
    "country": "South Sudan",
    "total_killed": 26
  },
  {
    "year": 2017,
    "country": "South Sudan",
    "total_killed": 33
  },
  {
    "year": 2018,
    "country": "South Sudan",
    "total_killed": 16
  },
  {
    "year": 2019,
    "country": "South Sudan",
    "total_killed": 6
  },
  {
    "year": 2020,
    "country": "South Sudan",
    "total_killed": 24
  },
  {
    "year": 2021,
    "country": "South Sudan",
    "total_killed": 29
  },
  {
    "year": 2022,
    "country": "South Sudan",
    "total_killed": 23
  },
  {
    "year": 2023,
    "country": "South Sudan",
    "total_killed": 34
  },
  {
    "year": 2000,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Sri Lanka",
    "total_killed": 24
  },
  {
    "year": 2007,
    "country": "Sri Lanka",
    "total_killed": 16
  },
  {
    "year": 2008,
    "country": "Sri Lanka",
    "total_killed": 3
  },
  {
    "year": 2009,
    "country": "Sri Lanka",
    "total_killed": 8
  },
  {
    "year": 2010,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2013,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2014,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2015,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2016,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2018,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2019,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2020,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2021,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2022,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2023,
    "country": "Sri Lanka",
    "total_killed": 0
  },
  {
    "year": 2000,
    "country": "Sudan",
    "total_killed": 15
  },
  {
    "year": 2001,
    "country": "Sudan",
    "total_killed": 2
  },
  {
    "year": 2002,
    "country": "Sudan",
    "total_killed": 1
  },
  {
    "year": 2003,
    "country": "Sudan",
    "total_killed": 8
  },
  {
    "year": 2004,
    "country": "Sudan",
    "total_killed": 6
  },
  {
    "year": 2005,
    "country": "Sudan",
    "total_killed": 11
  },
  {
    "year": 2006,
    "country": "Sudan",
    "total_killed": 12
  },
  {
    "year": 2007,
    "country": "Sudan",
    "total_killed": 11
  },
  {
    "year": 2008,
    "country": "Sudan",
    "total_killed": 20
  },
  {
    "year": 2009,
    "country": "Sudan",
    "total_killed": 6
  },
  {
    "year": 2010,
    "country": "Sudan",
    "total_killed": 4
  },
  {
    "year": 2011,
    "country": "Sudan",
    "total_killed": 6
  },
  {
    "year": 2012,
    "country": "Sudan",
    "total_killed": 1
  },
  {
    "year": 2013,
    "country": "Sudan",
    "total_killed": 7
  },
  {
    "year": 2014,
    "country": "Sudan",
    "total_killed": 2
  },
  {
    "year": 2015,
    "country": "Sudan",
    "total_killed": 5
  },
  {
    "year": 2016,
    "country": "Sudan",
    "total_killed": 0
  },
  {
    "year": 2017,
    "country": "Sudan",
    "total_killed": 1
  },
  {
    "year": 2018,
    "country": "Sudan",
    "total_killed": 3
  },
  {
    "year": 2019,
    "country": "Sudan",
    "total_killed": 1
  },
  {
    "year": 2020,
    "country": "Sudan",
    "total_killed": 1
  },
  {
    "year": 2021,
    "country": "Sudan",
    "total_killed": 3
  },
  {
    "year": 2022,
    "country": "Sudan",
    "total_killed": 10
  },
  {
    "year": 2023,
    "country": "Sudan",
    "total_killed": 22
  },
  {
    "year": 2000,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Syrian Arab Republic",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Syrian Arab Republic",
    "total_killed": 19
  },
  {
    "year": 2013,
    "country": "Syrian Arab Republic",
    "total_killed": 25
  },
  {
    "year": 2014,
    "country": "Syrian Arab Republic",
    "total_killed": 18
  },
  {
    "year": 2015,
    "country": "Syrian Arab Republic",
    "total_killed": 9
  },
  {
    "year": 2016,
    "country": "Syrian Arab Republic",
    "total_killed": 37
  },
  {
    "year": 2017,
    "country": "Syrian Arab Republic",
    "total_killed": 43
  },
  {
    "year": 2018,
    "country": "Syrian Arab Republic",
    "total_killed": 56
  },
  {
    "year": 2019,
    "country": "Syrian Arab Republic",
    "total_killed": 36
  },
  {
    "year": 2020,
    "country": "Syrian Arab Republic",
    "total_killed": 24
  },
  {
    "year": 2021,
    "country": "Syrian Arab Republic",
    "total_killed": 14
  },
  {
    "year": 2022,
    "country": "Syrian Arab Republic",
    "total_killed": 6
  },
  {
    "year": 2023,
    "country": "Syrian Arab Republic",
    "total_killed": 1
  },
  {
    "year": 2000,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Yemen",
    "total_killed": 3
  },
  {
    "year": 2003,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Yemen",
    "total_killed": 4
  },
  {
    "year": 2010,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Yemen",
    "total_killed": 1
  },
  {
    "year": 2013,
    "country": "Yemen",
    "total_killed": 3
  },
  {
    "year": 2014,
    "country": "Yemen",
    "total_killed": 2
  },
  {
    "year": 2015,
    "country": "Yemen",
    "total_killed": 12
  },
  {
    "year": 2016,
    "country": "Yemen",
    "total_killed": 6
  },
  {
    "year": 2017,
    "country": "Yemen",
    "total_killed": 1
  },
  {
    "year": 2018,
    "country": "Yemen",
    "total_killed": 2
  },
  {
    "year": 2019,
    "country": "Yemen",
    "total_killed": 5
  },
  {
    "year": 2020,
    "country": "Yemen",
    "total_killed": 7
  },
  {
    "year": 2021,
    "country": "Yemen",
    "total_killed": 3
  },
  {
    "year": 2022,
    "country": "Yemen",
    "total_killed": 0
  },
  {
    "year": 2023,
    "country": "Yemen",
    "total_killed": 1
  }
]

// d3.csv('./data.csv').then(function (data) {
// d3.json(jsonData).then(function (data) {
const firstYear = allData[0].year; // Assuming data is sorted and the first element has the earliest year

// GLOBAL CHART VARIABLES

// Select five countries from the data and store in an array
const countries = ['Myanmar', 'CAR', 'Palestine', 'Somalia', 'South Sudan', 'Syrian Arab Republic', 'Yemen'];

// Filter data to only show the countries from the array
let filteredData = allData.filter(d => countries.includes(d.country) && d.year === firstYear);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollAnimationContainer = document.createElement('div');
  scrollAnimationContainer.classList.add('scroll-animation-container');

  const progressIndicator = document.createElement('div');
  progressIndicator.classList.add('progress-indicator');
  progressIndicator.textContent = '2000';

  scrollAnimationContainer.appendChild(progressIndicator);

  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.insertBefore(scrollAnimationContainer, mainContent.firstChild);
  } else {
    console.error('.main-content not found');
  }

  // Append the .chart div to the body or a specific container on your page
  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart');
  scrollAnimationContainer.appendChild(chartContainer); // Append it where it makes sense for your layout

  initD3Chart(); // Call this function to initialize the chart after creating the chart container
});

function interpolateColor(factor) {
  const startColor = { r: 0, g: 0, b: 0 }; // White
  const endColor = { r: 200, g: 200, b: 200 }; // Dark Gray
  const r = Math.round(startColor.r + (endColor.r - startColor.r) * factor).toString(16);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * factor).toString(16);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * factor).toString(16);
  return "#" + ("0" + r).slice(-2) + ("0" + g).slice(-2) + ("0" + b).slice(-2);
}

// Function to update chart based on scroll
function updateChartColor(progress) {
  // Select barChart
  var barChart = d3.selectAll('rect');

  barChart.style('fill', function () {
    return interpolateColor(progress);
  });
}

// Example min and max y values for each year
const minMaxY = [
  {
    2000: 168
  }, {
    2001: 168
  }, {
    2002: 168
  }, {
    2003: 168
  }, {
    2004: 168
  }, {
    2005: 168
  }, {
    2006: 168
  }, {
    2007: 168
  }, {
    2008: 168
  }, {
    2009: 168
  }, {
    2090: 168
  }, {
    2011: 168
  }, {
    2012: 168
  }, {
    2013: 168
  }, {
    2014: 168
  }, {
    2015: 168
  }, {
    2016: 168
  }, {
    2017: 168
  }, {
    2018: 168
  }, {
    2019: 168
  }, {
    2020: 168
  }, {
    2021: 168
  }, {
    2022: 168
  }, {
    2023: 168
  },
]; // Extend this as needed

// Define the grid lines you want to show for each year
const gridLinesByYear = {
  2000: [10, 50, 100, 150, 200], // Grid lines at 5 and 10 for the year 2000
  2001: [10, 50, 100, 150, 200],
  2002: [10, 50, 100, 150, 200],
  2003: [10, 50, 100, 150, 200],
  2004: [10, 50, 100, 150, 200],
  2005: [10, 50, 100, 150, 200],
  2006: [10, 50, 100, 150, 200],
  2007: [10, 50, 100, 150, 200],
  2008: [10, 50, 100, 150, 200],
  2009: [10, 50, 100, 150, 200],
  2010: [10, 50, 100, 150, 200],
  2011: [10, 50, 100, 150, 200],
  2012: [10, 50, 100, 150, 200],
  2012: [10, 50, 100, 150, 200],
  2013: [10, 50, 100, 150, 200],
  2014: [10, 50, 100, 150, 200],
  2015: [10, 50, 100, 150, 200],
  2016: [10, 50, 100, 150, 200],
  2017: [10, 50, 100, 150, 200],
  2018: [10, 50, 100, 150, 200],
  2019: [10, 50, 100, 150, 200],
  2020: [10, 50, 100, 150, 200],
  2021: [10, 50, 100, 150, 200],
  2022: [10, 50, 100, 150, 200],
  2023: [10, 50, 100, 150, 200]
};

// Define chart dimensions
let svgWidth = (window.innerWidth * 0.6), svgHeight = window.innerHeight * 0.6, barPadding = 5;
let margin = { top: window.innerHeight * 0.15, right: 50, bottom: window.innerHeight * 0.2, left: 165 }; // Adjusted to include space for labels
let svg, yScale, barWidth;

// Initialize D3 chart
function initD3Chart() {
  // Create SVG element
  svg = d3.select('.chart')
    .append('svg')
    .attr('width', svgWidth + margin.left + margin.right)
    .attr('height', svgHeight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  console.log(filteredData)

  // Determine the min and max Y values for the scale from minMaxY
  const minY = 0; // Assuming 0 is the minimum value for the y-axis
  const maxY = minMaxY[0][firstYear]; // Extract the max value for the year

  // Create a y-scale
  yScale = d3.scaleLinear()
    .domain([minY, maxY])
    .range([svgHeight, 0]); // Invert range to correctly display SVG

  barWidth = svgWidth / filteredData.length;

  // Plot the bars
  svg.selectAll('rect')
    .data(filteredData)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (barWidth + barPadding))
    .attr('y', d => yScale(d.total_killed))
    .attr('height', d => svgHeight - yScale(d.total_killed))
    .attr('width', barWidth)
    .attr('fill', '#000')
    .attr('class', 'bar');

  // Add grid lines for the specified year
  gridLinesByYear[firstYear].forEach(value => {
    // Add grid line
    svg.append('line')
      .attr('x1', -5)
      .attr('x2', svgWidth + 38)
      .attr('y1', yScale(value))
      .attr('y2', yScale(value))
      .attr('stroke', '#282828')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '2,2');

    const textWidth = 85; // Estimate the width based on your text length
    const textHeight = 20; // Adjust as needed

    // Add white background rect for the text label
    svg.append('rect')
      .attr('x', -margin.left)
      .attr('y', yScale(value) - textHeight / 2)
      .attr('width', textWidth)
      .attr('height', textHeight)
      .attr('fill', 'white');

    // Add label for the grid line with styling
    svg.append('text')
      .attr('x', -margin.left + 5) // Adjust x position to not overlap with the background
      .attr('y', yScale(value))
      .attr('dy', '0.35em') // Center text vertically
      .attr('text-anchor', 'start') // Align text to start at the x position
      .style('font-size', '1rem')
      .style('font-family', "'Roboto', sans-serif")
      .text(`${value} deaths`);
  });

  // Correctly position country labels
  svg.selectAll('.countryLabel')
    .data(filteredData).enter().append('text')
    .text(d => d.country)
    .attr('class', 'countryLabel')
    .attr('x', (d, i) => i * (barWidth + barPadding) + barWidth / 2) // Center label under each bar
    .attr('y', svgHeight - 10) // Position below the bars
    .attr('text-anchor', 'middle') // Center text
    .attr('fill', '#000')
    .style('font-size', '0.85rem') // Smaller font size
    // .style('font-weight', 'bold') // Bold font size
    .style('font-family', "'Roboto', sans-serif")
    .attr('dy', '2rem'); // Offset the text a bit down from the exact bottom

  // Add y-axis to the chart
  svg.append("g")
    .call(d3.axisLeft(yScale));
  // }).catch(function (error) {
  //   console.log(error);
  // });
}

// After loading the data and setting up the initial chart:
function updateChartForYear(year) {
  d3.csv('./data.csv').then(function (data) {
    // Filter data to only show the countries from the array
    let filteredData = data.filter(d => countries.includes(d.country) && parseInt(d.year, 10) === year);

    // Check if filteredData is empty or not structured correctly
    if (!filteredData.length || !filteredData.every(d => 'country' in d)) {
      console.warn('Filtered data is empty or missing expected properties');
      return; // Exit the function to avoid further errors
    }

    // Update the domain of yScale based on new data
    const minY = 0; // Assuming 0 is the minimum value for the y-axis
    // Assuming the structure of minMaxY has been changed
    // Find the max Y value for the given year
    const maxYObject = minMaxY.find(obj => obj[year] !== undefined);
    const maxY = maxYObject ? maxYObject[year] : 50; // Default to 50 if year is not found

    // Update yScale domain based on the current year's data
    yScale.domain([0, maxY]);

    // Clear existing bars and grid lines
    // svg.selectAll('.bar').remove();
    svg.selectAll('.gridLine').remove(); // Remove existing grid lines
    svg.selectAll('.gridLabel').remove(); // Remove existing grid labels

    // Create a y-scale
    yScale = d3.scaleLinear()
      .domain([minY, maxY])
      .range([svgHeight, 0]); // Invert range to correctly display SVG

    // Bind filteredData to the bars
    var bars = svg.selectAll('.bar')
      .data(filteredData, d => d.country);

    // Enter selection - Append new rects for new data
    bars.enter().append('rect')
      .merge(bars) // Merge enter and update selections
      .transition()
      .duration(200)
      .attr('x', (d, i) => i * (barWidth + barPadding))
      .attr('y', d => yScale(+d.total_killed))
      .attr('height', d => svgHeight - yScale(parseInt(d.total_killed)))
      .attr('width', barWidth)
      .attr('fill', '#9f3e52');

    // Exit selection - Remove any surplus rects
    bars.exit().remove();
  }).catch(function (error) {
    console.error('Error loading or processing data:', error);
  });
}

// Original scroll event handler
function handleScroll() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = window.scrollY / scrollableHeight;
  const totalYears = 2023 - 2000 + 1;
  const currentYearIndex = Math.min(Math.floor(scrollProgress * totalYears), totalYears - 1);
  const currentYear = 2000 + currentYearIndex;
  const progressIndicator = document.querySelector('.progress-indicator');
  progressIndicator.textContent = currentYear;
  updateChartForYear(currentYear);
}

// Debounced version of the scroll event handler
var debouncedScrollHandler = debounce(handleScroll, 100);

// Apply the debounced function to the scroll event
window.addEventListener('scroll', debouncedScrollHandler);