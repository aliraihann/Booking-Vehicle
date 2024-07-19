﻿# Booking-Vehicle API
This project is a fleet management system. It allows users to manage bookings for vehicles and drivers. The system offers functionalities for users with different roles (admin, department manager, fleet manager) to perform actions such as:

- Creating bookings for vehicles
- Viewing a list of existing bookings
- Registering new drivers
- Viewing a list of existing drivers
- Registering new users
- Logging in existing users
- Adding new vehicles
- Viewing a list of existing vehicles

**Key Features**
1. Booking Management:
  - Create new bookings for vehicles with a driver
  - View a list of all existing bookings
2. Driver Management:
  - Register new drivers
  - View a list of all existing drivers with their availability status
3. User Management:
  - Register new users with different roles (e.g., department manager, fleet manager)
  - User login with authentication
4. Vehicle Management:
  - Register new vehicles with details like type, brand, model, etc.
- View a list of all existing vehicles with their availability status
  
***User list***:
  ``` bash
User:
	"id": "669948d68b23cc6d215c9e92",
	"name": "Rangga Saputra",
  "role": "admin",
  "email": "rangga.s@company.com",
  "password": "ghi123456789"
  
User:
  "id": "6699493c8b23cc6d215c9e94",
	"name": "Eka Budiana",
  "role": "department manager",
  "email": "eka.b@company.com",
  "password": "abcd123456789"
  
User:
  "id": "669949b98b23cc6d215c9e96",
	"name": "Tjahyo Ramadiputra",
  "role": "fleet manager",
  "email": "Tjahyo.r@company.com",
  "password": "efgh123456789"
```
***Vehicle List***
``` bash
1. {
    "id": "66990671a7cfd5d7c39a4b05",
    "vehicle_type": "Truck",
    "brand": "Ford",
    "model": "F-150",
    "year": 2022,
    "license_plate": "D 54321",
    "passenger_capacity": 5,
    "cargo_capacity": 3.5,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
2. {
    "id": "6699123ea7cfd5d7c39a4b09",
    "vehicle_type": "Haul Truck",
    "brand": "Komatsu",
    "model": "HD1500-7",
    "year": 2024,
    "license_plate": "K 65489",
    "passenger_capacity": 2,
    "cargo_capacity": 300,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
3. {
    "id": "6699127aa7cfd5d7c39a4b0b",
    "vehicle_type": "Dump Truck",
    "brand": "Hino",
    "model": "Profia",
    "year": 2022,
    "license_plate": "B 67890",
    "passenger_capacity": 2,
    "cargo_capacity": 40,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
4. {
    "id": "66991300a7cfd5d7c39a4b0d",
    "vehicle_type": "Fuel Tanker",
    "brand": "Mercedes-Benz",
    "model": "Actros",
    "year": 2021,
    "license_plate": "A 21987",
    "passenger_capacity": 2,
    "cargo_capacity": 35,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
5. {
    "id": "6699133aa7cfd5d7c39a4b0f",
    "vehicle_type": "Light Utility Truck",
    "brand": "Mitsubishi",
    "model": "Triton",
    "year": 2020,
    "license_plate": "D 43210",
    "passenger_capacity": 5,
    "cargo_capacity": 1,
    "fuel_type": "Gasoline",
    "ownership_status": "Owned"
},
6. {
    "id": "66991381a7cfd5d7c39a4b11",
    "vehicle_type": "Crew Van",
    "brand": "Isuzu",
    "model": "Elf",
    "year": 2022,
    "license_plate": "D 56789",
    "passenger_capacity": 12,
    "cargo_capacity": 0.5,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
7. {
    "id": "6699141aa7cfd5d7c39a4b13",
    "vehicle_type": "Lowboy Trailer Truck",
    "brand": "Volvo",
    "model": "FH-Series",
    "year": 2024,
    "license_plate": "D 85210",
    "passenger_capacity": 2,
    "cargo_capacity": "60",
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
8. {
    "id": "66991478a7cfd5d7c39a4b15",
    "vehicle_type": "Off-Highway Dump Truck",
    "brand": "Caterpillar",
    "model": "793F",
    "year": 2023,
    "license_plate": " Z 21539",
    "passenger_capacity": 2,
    "cargo_capacity": 240,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
9. {
    "id": "669914a0a7cfd5d7c39a4b17",
    "vehicle_type": "Rock Truck",
    "brand": "Komatsu",
    "model": "HD985-7",
    "year": 2022,
    "license_plate": "B 21098",
    "passenger_capacity": 2,
    "cargo_capacity": 100,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
10. {
    "id": "669914c2a7cfd5d7c39a4b19",
    "vehicle_type": "Side Dump Truck",
    "brand": "Volvo",
    "model": "A40G",
    "year": 2021,
    "license_plate": "D 12378",
    "passenger_capacity": 2,
    "cargo_capacity": 45,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
11. {
    "id": "669914efa7cfd5d7c39a4b1b",
    "vehicle_type": "Bottom Dump Trailer",
    "brand": "Isuzu",
    "model": "Giga with Bottom Dump Trailer",
    "year": 2020,
    "license_plate": "B 59301",
    "passenger_capacity": 2,
    "cargo_capacity": 30,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
12. {
    "id": "66991570a7cfd5d7c39a4b1d",
    "vehicle_type": "Off-Road Tipper Truck",
    "brand": "Komatsu",
    "model": "HD460-7",
    "year": 2023,
    "license_plate": "A 87654",
    "passenger_capacity": 2,
    "cargo_capacity": 70,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
13. {
    "id": "669915ada7cfd5d7c39a4b21",
    "vehicle_type": "Double Trailer Truck",
    "brand": "Scania",
    "model": "G500",
    "year": 2022,
    "license_plate": "D 98765",
    "passenger_capacity": 2,
    "cargo_capacity": 100,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
14. {
    "id": "669915d3a7cfd5d7c39a4b23",
    "vehicle_type": "Bottom Dump Trailer Truck",
    "brand": "Mercedes-Benz",
    "model": "Arocs with Bottom Dump Trailer",
    "year": 2021,
    "license_plate": "B 12345",
    "passenger_capacity": 2,
    "cargo_capacity": 40,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
15. {
    "id": "66991603a7cfd5d7c39a4b25",
    "vehicle_type": "Long Haul Coal Truck",
    "brand": "Volvo",
    "model": "FH-Series",
    "year": 2020,
    "license_plate": " D 081269",
    "passenger_capacity": 2,
    "cargo_capacity": 45,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
16. {
    "id": "66991633a7cfd5d7c39a4b27",
    "vehicle_type": "Rigid Dump Truck",
    "brand": "Komatsu",
    "model": "HD600-8",
    "year": 2024,
    "license_plate": "A 54321",
    "passenger_capacity": 2,
    "cargo_capacity": 90,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
17. {
    "id": "6699165fa7cfd5d7c39a4b29",
    "vehicle_type": "Water Cart",
    "brand": "Scania",
    "model": "P410",
    "year": 2023,
    "license_plate": "D 10987",
    "passenger_capacity": 2,
    "cargo_capacity": 25,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
},
18. {
    "id": "66991681a7cfd5d7c39a4b2b",
    "vehicle_type": "Belly Dump Trailer Truck",
    "brand": "Volvo",
    "model": "FMX with Belly Dump Trailer",
    "year": 2022,
    "license_plate": "B 67890",
    "passenger_capacity": 2,
    "cargo_capacity": 50,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
19. {
    "id": "669916cea7cfd5d7c39a4b2d",
    "vehicle_type": "Excavator Transport Truck",
    "brand": "MAN",
    "model": "TGX",
    "year": 2020,
    "license_plate": "D 32104",
    "passenger_capacity": 2,
    "cargo_capacity": 50,
    "fuel_type": "Diesel",
    "ownership_status": "Leased"
},
20. {
    "id": "66991717a7cfd5d7c39a4b2f",
    "vehicle_type": "Double Trailer Truck",
    "brand": "Scania",
    "model": "G500",
    "year": 2020,
    "license_plate": "D 95465",
    "passenger_capacity": 2,
    "cargo_capacity": 100,
    "fuel_type": "Diesel",
    "ownership_status": "Owned"
}
```

***Driver list***
``` bash
1. {
    "id": "66993ea72a66c9208c828e88",
    "name": "Bagas",
    "age": "35"
},
2. {
    "id": "66993f062a66c9208c828e8a",
    "name": "Bayu",
    "age": "42"
},
3. {
    "id": "66993f1a2a66c9208c828e8c",
    "name": "Chandra",
    "age": "38"
},
4. {
    "id": "66993f2d2a66c9208c828e8e",
    "name": "Dimas",
    "age": "40"
},
5. {
    "id": "66993f3d2a66c9208c828e90",
    "name": "Eko",
    "age": "33"
},
6. {
    "id": "66993f7b2a66c9208c828e92",
    "name": "Farhan",
    "age": "31"
},
7. {
    "id": "66993f902a66c9208c828e94",
    "name": "Gerry",
    "age": "45"
},
8. {
    "id": "66993fa32a66c9208c828e96",
    "name": "Hafiz",
    "age": "30"
},
9. {
    "id": "66993fb32a66c9208c828e98",
    "name": "Iqbal",
    "age": "37"
},
10. {
    "id": "66993fc42a66c9208c828e9a",
    "name": "Joko",
    "age": "43"
},
11. {
    "id": "66993fd12a66c9208c828e9c",
    "name": "Kelvin",
    "age": "32"
},
12. {
    "id": "66993fe22a66c9208c828e9e",
    "name": "Lutfi",
    "age": "39"
},
13. {
    "id": "66993ff42a66c9208c828ea0",
    "name": "Maulana",
    "age": "34"
},
14. {
    "id": "669940072a66c9208c828ea2",
    "name": "Nathan",
    "age": "36"
},
15. {
    "id": "669940142a66c9208c828ea4",
    "name": "Oka",
    "age": "41"
},
16. {
    "id": "669940232a66c9208c828ea6",
    "name": "Putra",
    "age": "44"
},
17. {
    "id": "669940312a66c9208c828ea8",
    "name": "Reno",
    "age": "30"
},
18. {
    "id": "6699403e2a66c9208c828eaa",
    "name": "Syahrin",
    "age": "42"
},
19. {
    "id": "6699404e2a66c9208c828eac",
    "name": "Toni",
    "age": "45"
},
20.{
    "id": "669940592a66c9208c828eae",
    "name": "Vino",
    "age": "38"
}
```
