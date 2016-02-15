var _ = require('lodash');

var people = [{
  "id": 1,
  "gender": "Male",
  "first_name": "Martin",
  "last_name": "Mason",
  "email": "mmason0@toplist.cz",
  "ip_address": "36.122.170.162"
}, {
  "id": 2,
  "gender": "Male",
  "first_name": "William",
  "last_name": "Jones",
  "email": "wjones1@hugedomains.com",
  "ip_address": "151.35.244.182"
}, {
  "id": 3,
  "gender": "Female",
  "first_name": "Nancy",
  "last_name": "Tucker",
  "email": "ntucker2@tripadvisor.com",
  "ip_address": "114.199.84.247"
}, {
  "id": 4,
  "gender": "Male",
  "first_name": "Kevin",
  "last_name": "Patterson",
  "email": "kpatterson3@biglobe.ne.jp",
  "ip_address": "147.199.142.32"
}, {
  "id": 5,
  "gender": "Male",
  "first_name": "Fred",
  "last_name": "Watson",
  "email": "fwatson4@blogspot.com",
  "ip_address": "184.109.85.128"
}, {
  "id": 6,
  "gender": "Female",
  "first_name": "Deborah",
  "last_name": "Hanson",
  "email": "dhanson5@t.co",
  "ip_address": "160.196.98.118"
}, {
  "id": 7,
  "gender": "Female",
  "first_name": "Cynthia",
  "last_name": "Ford",
  "email": "cford6@census.gov",
  "ip_address": "183.132.242.236"
}, {
  "id": 8,
  "gender": "Female",
  "first_name": "Judith",
  "last_name": "Welch",
  "email": "jwelch7@goodreads.com",
  "ip_address": "95.210.193.154"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Julia",
  "last_name": "Thomas",
  "email": "jthomas8@zdnet.com",
  "ip_address": "164.251.75.215"
}, {
  "id": 10,
  "gender": "Male",
  "first_name": "Steven",
  "last_name": "Harvey",
  "email": "sharvey9@google.com.br",
  "ip_address": "100.219.1.139"
}, {
  "id": 11,
  "gender": "Male",
  "first_name": "Eugene",
  "last_name": "Harris",
  "email": "eharrisa@sphinn.com",
  "ip_address": "28.4.113.220"
}, {
  "id": 12,
  "gender": "Male",
  "first_name": "Nicholas",
  "last_name": "Foster",
  "email": "nfosterb@unesco.org",
  "ip_address": "185.178.125.87"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Nancy",
  "last_name": "Snyder",
  "email": "nsnyderc@typepad.com",
  "ip_address": "100.193.159.6"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Bobby",
  "last_name": "Bowman",
  "email": "bbowmand@shinystat.com",
  "ip_address": "53.153.170.50"
}, {
  "id": 15,
  "gender": "Male",
  "first_name": "Jason",
  "last_name": "Ellis",
  "email": "jellise@goodreads.com",
  "ip_address": "221.251.198.239"
}, {
  "id": 16,
  "gender": "Female",
  "first_name": "Diane",
  "last_name": "Garza",
  "email": "dgarzaf@guardian.co.uk",
  "ip_address": "211.43.82.29"
}, {
  "id": 17,
  "gender": "Female",
  "first_name": "Marie",
  "last_name": "Garza",
  "email": "mgarzag@unicef.org",
  "ip_address": "14.130.128.191"
}, {
  "id": 18,
  "gender": "Female",
  "first_name": "Lisa",
  "last_name": "Freeman",
  "email": "lfreemanh@si.edu",
  "ip_address": "243.63.14.111"
}, {
  "id": 19,
  "gender": "Female",
  "first_name": "Elizabeth",
  "last_name": "King",
  "email": "ekingi@google.nl",
  "ip_address": "42.56.55.46"
}, {
  "id": 20,
  "gender": "Female",
  "first_name": "Rebecca",
  "last_name": "Ray",
  "email": "rrayj@reference.com",
  "ip_address": "186.152.74.42"
}];

var femaleCount = _.filter(people,{gender:'Female'}).length;

alert("Females: " + femaleCount);