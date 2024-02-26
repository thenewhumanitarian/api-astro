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
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "S. Sudan",
    "total_killed": 1
  },
  {
    "year": 2003,
    "country": "S. Sudan",
    "total_killed": 1
  },
  {
    "year": 2004,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "S. Sudan",
    "total_killed": 2
  },
  {
    "year": 2006,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "S. Sudan",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "S. Sudan",
    "total_killed": 9
  },
  {
    "year": 2012,
    "country": "S. Sudan",
    "total_killed": 9
  },
  {
    "year": 2013,
    "country": "S. Sudan",
    "total_killed": 15
  },
  {
    "year": 2014,
    "country": "S. Sudan",
    "total_killed": 11
  },
  {
    "year": 2015,
    "country": "S. Sudan",
    "total_killed": 15
  },
  {
    "year": 2016,
    "country": "S. Sudan",
    "total_killed": 26
  },
  {
    "year": 2017,
    "country": "S. Sudan",
    "total_killed": 33
  },
  {
    "year": 2018,
    "country": "S. Sudan",
    "total_killed": 16
  },
  {
    "year": 2019,
    "country": "S. Sudan",
    "total_killed": 6
  },
  {
    "year": 2020,
    "country": "S. Sudan",
    "total_killed": 24
  },
  {
    "year": 2021,
    "country": "S. Sudan",
    "total_killed": 29
  },
  {
    "year": 2022,
    "country": "S. Sudan",
    "total_killed": 23
  },
  {
    "year": 2023,
    "country": "S. Sudan",
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
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2001,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2002,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2003,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2004,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2005,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2006,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2007,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2008,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2009,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2010,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2011,
    "country": "Syrian Arab Rep.",
    "total_killed": 0
  },
  {
    "year": 2012,
    "country": "Syrian Arab Rep.",
    "total_killed": 19
  },
  {
    "year": 2013,
    "country": "Syrian Arab Rep.",
    "total_killed": 25
  },
  {
    "year": 2014,
    "country": "Syrian Arab Rep.",
    "total_killed": 18
  },
  {
    "year": 2015,
    "country": "Syrian Arab Rep.",
    "total_killed": 9
  },
  {
    "year": 2016,
    "country": "Syrian Arab Rep.",
    "total_killed": 37
  },
  {
    "year": 2017,
    "country": "Syrian Arab Rep.",
    "total_killed": 43
  },
  {
    "year": 2018,
    "country": "Syrian Arab Rep.",
    "total_killed": 56
  },
  {
    "year": 2019,
    "country": "Syrian Arab Rep.",
    "total_killed": 36
  },
  {
    "year": 2020,
    "country": "Syrian Arab Rep.",
    "total_killed": 24
  },
  {
    "year": 2021,
    "country": "Syrian Arab Rep.",
    "total_killed": 14
  },
  {
    "year": 2022,
    "country": "Syrian Arab Rep.",
    "total_killed": 6
  },
  {
    "year": 2023,
    "country": "Syrian Arab Rep.",
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

// Set base element
const baseElement = document.querySelector('.main-content');

const firstYear = allData[0].year;

// GLOBAL CHART VARIABLES
const transitionSpeed = 100
const fontSize = '2rem'
const barColor = '#9f3e52'

// Set chart sizes
const chartSizes = {
  svg: {
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.2,
  },
  barPadding: 5,
  margin: {
    top: 200,
    bottom: window.innerWidth * 0.4,
    right: 150,
    left: 50
  }
}

// Example min and max y values for each year
const minMaxY = {
  2000: 10,
  2001: 10,
  2002: 10,
  2003: 10,
  2004: 10,
  2005: 10,
  2006: 10,
  2007: 10,
  2008: 10,
  2009: 20,
  2010: 20,
  2011: 20,
  2012: 20,
  2013: 20,
  2014: 20,
  2015: 20,
  2016: 20,
  2017: 20,
  2018: 20,
  2019: 20,
  2020: 20,
  2021: 20,
  2022: 20,
  2023: 170
}

// Define the grid lines you want to show for each year
const gridLinesByYear = {
  2000: [5, 10], // Grid lines at 5 and 10 for the year 2000
  2001: [5, 10],
  2002: [5, 10],
  2003: [5, 10],
  2004: [5, 10],
  2005: [5, 10],
  2006: [5, 10],
  2007: [5, 10],
  2008: [5, 10],
  2009: [5, 10, 20],
  2010: [5, 10, 20],
  2011: [5, 10, 20],
  2012: [5, 10, 20],
  2012: [5, 10, 20],
  2013: [5, 10, 20],
  2014: [5, 10, 20],
  2015: [5, 10, 20],
  2016: [5, 10, 20],
  2017: [5, 10, 20],
  2018: [5, 10, 20],
  2019: [5, 10, 20],
  2020: [5, 10, 20],
  2021: [5, 10, 20],
  2022: [5, 10, 20],
  2023: [50, 100, 150]
};

// Select five countries from the data and store in an array, three respectively for mobile devices
// const countriesDesktop = ['Myanmar', 'CAR', 'Palestine', 'Somalia', 'S. Sudan', 'Syrian Arab Rep.', 'Yemen'];
// const countriesMobile = ['Palestine', 'S. Sudan', 'Yemen'];

let palestineData = allData.filter(data => data.country === 'Palestine');

let filteredData = palestineData

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

function bringToFront(selection) {
  selection.each(function () {
    this.parentNode.appendChild(this);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const scrollAnimationContainer = document.createElement('div');
  scrollAnimationContainer.classList.add('scroll-animation-container');

  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.insertBefore(scrollAnimationContainer, mainContent.firstChild);
  } else {
    console.error('.main-content not found');
  }

  // Append the .chart div to the body or a specific container on your page
  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart');
  scrollAnimationContainer.appendChild(chartContainer);

  initD3Chart(); // Call this function to initialize the chart after creating the chart container
});


let svg, xScale, yScale, barWidth;

// Initialize D3 chart
function initD3Chart() {
  // Create SVG element
  svg = d3.select('.chart')
    .append('svg')
    .attr('width', chartSizes.svg.width + chartSizes.margin.left + chartSizes.margin.right)
    .attr('height', chartSizes.svg.height + chartSizes.margin.top + chartSizes.margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + chartSizes.margin.left + ',' + chartSizes.margin.top + ')');

  // Determine the min and max Y values for the scale from minMaxY
  const minY = 0; // Assuming 0 is the minimum value for the y-axis
  const maxY = minMaxY[firstYear]; // Extract the max value for the year

  // At the end of initD3Chart function, add:
  let yearIndicator = svg.append("text")
    .attr("class", "year-indicator") // Assign a class for easy selection and styling
    .attr("x", chartSizes.svg.width / 2 + (chartSizes.margin.left)) // Position it above the y-axis; adjust as needed
    .attr("y", - chartSizes.svg.height / 8) // Adjust according to your layout
    .attr("text-anchor", "middle") // Center the text horizontally
    .style("font-size", "3rem") // Big text size
    .style("font-weight", "bold") // Make it bold
    .style("font-family", "Roboto, sans-serif") // Make it bold
    .text(firstYear); // Initial year as the default text

  // Create a y-scale
  yScale = d3.scaleLinear()
    .domain([minY, maxY])
    .range([chartSizes.svg.height, 0]); // Invert range to correctly display SVG

  // Add grid lines for the specified year
  gridLinesByYear[firstYear].forEach(value => {
    // Add grid line
    svg.append('line')
      .attr('x1', -5)
      .attr('x2', chartSizes.svg.width + (chartSizes.margin.right))
      .attr('y1', yScale(value))
      .attr('y2', yScale(value))
      .attr('class', 'grid-line'); // Assign a class for easy selection and removal
      // .attr('stroke', '#282828')
      // .attr('stroke-width', 2)
      // .attr('stroke-dasharray', '2,2');

    const textWidth = 25; // Estimate the width based on your text length
    const textHeight = 20; // Adjust as needed

    // Add white background rect for the text label
    // svg.append('rect')
    //   .attr('x', -chartSizes.margin.left)
    //   .attr('y', yScale(value) - textHeight / 2)
    //   .attr('width', textWidth)
    //   .attr('height', textHeight)
    //   .attr('fill', 'white');

    // Add label for the grid line with styling
    svg.append('text')
      .attr('class', 'grid-label')
      .attr('x', -chartSizes.margin.left + 5) // Adjust x position to not overlap with the background
      .attr('y', yScale(value))
      .attr('dy', '0.35em') // Center text vertically
      .attr('text-anchor', 'start') // Align text to start at the x position
      .style('font-size', fontSize)
      .style('font-family', "'Roboto', sans-serif");
      // .text(`${value}`);
  });

  // Plot the bars
  barWidth = chartSizes.svg.width / palestineData.length;

  svg.selectAll('rect')
    .data(palestineData)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (barWidth + chartSizes.barPadding))
    .attr('y', d => yScale(d.total_killed))
    // .attr('height', d => chartSizes.svg.height - yScale(d.total_killed))
    .attr('height', d => d.year > firstYear ? 0 : chartSizes.svg.height - yScale(d.total_killed)) // Only show first bar
    .attr('width', barWidth)
    .attr('fill', barColor)
    .attr('class', 'bar');

  // Add a baseline at the x-axis
  svg.append('line')
    .attr('class', 'baseline') // Optional: for styling via CSS
    .attr('x1', -chartSizes.margin.left / 5) // Start at the left margin of the chart area
    .attr('x2', chartSizes.svg.width + (chartSizes.margin.right)) // Extend to the right margin of the chart area
    .attr('y1', yScale(0)) // Position at 0 on the yScale
    .attr('y2', yScale(0)) // Same as y1 to make it horizontal
    .attr('stroke', 'black') // Style the line color; adjust as needed
    .attr('stroke-width', 2); // Style the line thickness; adjust as needed

  // Value labels selection and data binding
  var valueLabels = svg.selectAll('.value-label')
    .data(palestineData, d => d.year);

  // Enter selection - Create new labels for new data
  valueLabels.enter()
    .append('text')
    .attr('class', 'value-label') // Assign class for styling and selection
    .attr('x', (d, i) => i * (barWidth + chartSizes.barPadding) + (barWidth / 2))
    .attr('y', d => yScale(d.total_killed) - 5) // Position above the bar
    .attr('text-anchor', 'middle') // Center the text above the ba
    .style('font-size', fontSize)
    .style('font-family', "'Roboto', sans-serif")
    .style('font-weight', "bold")
    // .text(d => firstYear > d.year ? '' : d.total_killed); // Set the label text to the value
    .text(d => ''); // Set the label text to the value

  // Update selection - Update positions and text for existing labels
  valueLabels
    .attr('x', (d, i) => i * (barWidth + chartSizes.barPadding) + (barWidth / 2))
    .attr('y', d => yScale(d.total_killed) - 5)
    .text(d => d.total_killed);

  // Exit selection - Remove labels for data that no longer exists
  valueLabels.exit().remove();

  // Correctly position and rotate country labels
  var yearLabels = svg.selectAll('.year-label')
    .data(palestineData, d => d.country); // Bind data

  // Enter selection - Add new labels
  // Assuming svg, barWidth, chartSizes are already defined in your setup
  const labelGroups = svg.selectAll(".label-group")
    .data(palestineData, d => d.country) // Binding data
    .enter()
    .append("g") // Append group for each country label
    .attr("class", "label-group")
    // Position the group under the corresponding bar
    .attr("transform", (d, i) => `translate(${i * (barWidth + chartSizes.barPadding) + barWidth / 1.75}, ${chartSizes.svg.height + 20})`);

  // Now append text elements to these groups
  labelGroups.append("text")
    .text(d => d.year)
    .attr("text-anchor", "end") // Align text to the end for correct orientation after rotation
    .attr("transform", "rotate(-90)") // Rotate the text within the group
    .style("font-size", fontSize) // Adjust styling as needed
    .style("font-family", 'Roboto, sans-serif'); // Adjust styling as needed

  // Add y-axis to the chart
  svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale));
}

// After loading the data and setting up the initial chart:
function updateChartForYear(year) {
  console.log(year)

  if (year > 2023) {
    year = 2023
  }

  // Update the year indicator text
  svg.select(".year-indicator")
    .text(year);

  // Update Y-axis to reflect the new scale
  svg.select('.y-axis')
    .transition()
    .duration(transitionSpeed)
    .call(d3.axisLeft(yScale));

  // Update the domain of yScale based on new data
  const minY = 0; // Assuming 0 is the minimum value for the y-axis

  // Assuming the structure of minMaxY has been changed
  // Find the max Y value for the given year
  const maxY = minMaxY[year]

  // Update yScale domain based on the current year's data
  yScale.domain([0, maxY]);

  // Update bar heights based on the current year
  svg.selectAll('rect.bar')
    .transition()
    .duration(transitionSpeed)
    .attr('y', d => d.year <= year ? yScale(d.total_killed) : yScale(0))
    .attr('height', d => d.year <= year ? chartSizes.svg.height - yScale(d.total_killed) : 0);

  // Clear existing bars and grid lines
  // svg.selectAll('.bar').remove();

  // Create a y-scale
  yScale = d3.scaleLinear()
    .domain([minY, maxY])
    .range([chartSizes.svg.height, 0]); // Invert range to correctly display SVG

  // Calculate new grid lines for the year
  const gridValues = gridLinesByYear[year] || [];

  // Bind the gridValues to the grid lines
  const gridLines = svg.selectAll('.grid-line')
    .data(gridValues, d => d);

  // Enter + Update
  gridLines.enter()
    .append('line') // Add new grid lines
    .merge(gridLines) // Merge enter and update selections
    .attr('x1', 0)
    .attr('x2', chartSizes.svg.width + chartSizes.margin.right)
    .attr('class', 'grid-line') // Assign a class for easy selection and removal
    .transition() // Begin a transition for both new and updating lines
    .duration(transitionSpeed)
    .delay(function (i) { return (i * 10) })
    .attr('stroke', '#282828')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '2,2')
    .attr('y1', d => yScale(d))
    .attr('y2', d => yScale(d));

  // Exit
  gridLines.exit()
    .transition()
    .duration(transitionSpeed)
    .style('opacity', 0)
    .remove(); // Remove grid lines that are no longer needed

  // Update the grid line labels similarly, ensuring they transition smoothly
  const gridLabels = svg.selectAll('.grid-label')
    .data(gridValues, d => d);

  gridLabels.enter()
    .append('text')
    .attr('class', 'grid-label')
    .attr('text-anchor', 'start') // Align text to start at the x position
    .style('font-size', fontSize)
    .style('font-family', "'Roboto', sans-serif")
    .merge(gridLabels) // Merge enter and update selections
    .attr('x', -chartSizes.margin.left + 5)
    .transition()
    .duration(transitionSpeed)
    .attr('y', d => yScale(d) + 5) // Adjust as needed for alignment
    .text(d => d);

  gridLabels.exit()
    .transition()
    .duration(transitionSpeed)
    .style('opacity', 0)
    .remove();

  // Value labels selection and data binding
  svg.selectAll(".value-label").remove(); // Assuming you've added this class to your grid line labels

  var valueLabels = svg.selectAll('.value-label')
    .data(palestineData, d => d.total_killed);

  // Enter selection - Create new labels for new data
  valueLabels
    .enter()
    .append('text')
    .attr('class', 'value-label') // Assign class for styling and selection
    .attr('x', (d, i) => i * (barWidth + chartSizes.barPadding) + (barWidth / 2))
    .attr('y', d => yScale(d.total_killed) - 10) // Position above the bar
    .attr('text-anchor', 'middle') // Center the text above the ba
    .style('font-size', fontSize)
    .style('font-family', "'Roboto', sans-serif")
    .style('font-weight', "bold")
    .text(d => d.year > year ? '' : d.total_killed); // Set the label text to the value

  // Update selection - Update positions and text for existing labels
  valueLabels
    .attr('x', (d, i) => i * (barWidth + chartSizes.barPadding) + (barWidth / 2))
    .attr('y', d => yScale(d.total_killed) - 10)
    .text(d => d.year);

  // Exit selection - Remove labels for data that no longer exists
  valueLabels.exit().remove();

  // Re-render yAxis with updated scale
  svg.select(".y-axis").transition().duration(500).call(d3.axisLeft(yScale));

  bringToFront(svg.selectAll('.bar'));
}

// Original scroll event handler
function handleScroll() {
  // Get the position of #block-tnh-content from the top of the document
  const contentBlockPosition = document.querySelector('#block-tnh-content').getBoundingClientRect().top + window.scrollY;

  // Get the current scroll position
  const currentScroll = window.scrollY;

  // Calculate the height from the top to the content block as the "effective" document height for scrolling
  const effectiveScrollHeight = contentBlockPosition - window.innerHeight;

  // Calculate scroll progress as the current scroll position over the effective scroll height
  let scrollProgress = currentScroll / effectiveScrollHeight;

  // Cap the scrollProgress at 1 (100%)
  scrollProgress = Math.min(scrollProgress, 1);

  // Use scrollProgress to update your animation
  const totalYears = 2023 - 2000 + 1; // Total number of years you are animating through
  const currentYearIndex = Math.floor(scrollProgress * totalYears);
  const currentYear = 2000 + currentYearIndex;

  // Update the year indicator and the chart based on the current year
  updateChartForYear(currentYear);

  // Fade out the chart once scrolled past contentBlockPosition
  const fadeStartScrollPosition = contentBlockPosition;
  const scrolledPastFadeStart = currentScroll - fadeStartScrollPosition;
  if (scrolledPastFadeStart > 0) {
    // Calculate fade out effect based on how far scrolled past contentBlockPosition
    document.querySelector('.chart').style.opacity = 0;
  } else {
    // Ensure chart is fully visible if not yet scrolled past contentBlockPosition
    document.querySelector('.chart').style.opacity = 1;
  }
}

// Debounced version of the scroll event handler
var debouncedScrollHandler = debounce(handleScroll, 100);

// Apply the debounced function to the scroll event
window.addEventListener('scroll', debouncedScrollHandler);