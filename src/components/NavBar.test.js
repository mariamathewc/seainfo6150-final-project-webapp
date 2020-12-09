import React from "react";
import NavBar from "./NavBar.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

const data = {
	"spring": [
		{
			"title": "MYRTLE BEACH STATE PARK",
			"price": "$15",
			"location": "SOUTH CAROLINA",
			"image": "https://media-cdn.tripadvisor.com/media/photo-s/12/2b/54/d1/myrtle-beach-travel-park.jpg",
			"description": "Known as a popular spring break destination, Myrtle Beach provides many recreational opportunities in the city, from music festivals and art shows, to fairs and attractions.",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		},
		{
			"title": "BLUE RIDGE PARKWAY",
			"price": "$15",
			"location": "VIRGINIA",
			"image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/asheville-nc-blue-ridge-parkway-spring-flowers-dave-allen.jpg",
			"description": "The Blue Ridge Parkway is well-known for its beautiful color changes in the fall. If you’ve never been there in the spring, it’s truly a sight to see. Everything becomes green again, a lush landscape set against a beautiful mountain backdrop.",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		}

	],

	"summer": [
		{
			"title": "BADLANDS NATIONAL PARK",
			"price": "$15",
			"location": "SOUTH DAKOTA",
			"image": "https://i.guim.co.uk/img/media/e0f2267826f4f41798740d80b0696fc5d7c2134d/0_0_3610_2167/master/3610.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a429eff033e7631f9e2550506e7ad57a",
			"description": "From spectacular mountain views, to guided hikes, to waterfalls, to miles of sand dunes to explore, the Siuslaw National Forest offers something for everyone!",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		},
		{
			"title": "GUNNISON NATIONAL FOREST",
			"price": "$15",
			"location": "COLORADO",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Copper_Lake_Trail%2C_Crested_Butte.jpg",
			"description": "From spectacular mountain views, to guided hikes, to waterfalls, to miles of sand dunes to explore, the Siuslaw National Forest offers something for everyone!",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		}

	],
	"autumn": [
		{
			"title": "PFEIFFER BIG SUR STATE PARK",
			"price": "$15",
			"location": "CALIFORNIA",
			"image": "https://img.theculturetrip.com/768x432/wp-content/uploads/2016/09/14348716785_64cf8a172c_k.jpg",
			"description": "Enjoy dramatic cliffs, bluffs and crashing waves — as well as hiking and a downright nice getaway from the city life. Be forewarned, however, that this area is an extremely popular camping destination in California.",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		},
		{
			"title": "CRATER LAKE NATIONAL PARK",
			"price": "$15",
			"location": "OREGON",
			"image": "https://media.cntraveler.com/photos/59c9176fcdb63147ea7e772a/1:1/w_3000,h_3000,c_limit/Grand-Teton_GettyImages-538736877.jpg",
			"description": "Hold your breath and brave a dip in the U.S.’s deepest (and to be honest—probably chilliest) lake. Talk about an epic bucket list item to check off while on a camping trip! ",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		}

	],

	"winter": [
		{
			"title": "DEATH VALLEY",
			"price": "$15",
			"location": "CALIFORNIA",
			"image": "https://www.nps.gov/articles/images/DEVA_badlands_view_nocover.jpg?maxwidth=650&autorotate=false",
			"description": " It’s great all year round but camping in the winter is a cooler way to experience the park death valley is hottest and dryest place on earth in the summer!",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		},
		{
			"title": "JOSHUA TREE NATIONAL PARK",
			"price": "$15",
			"location": "CALIFORNIA",
			"image": "https://www.territorysupply.com/wp-content/uploads/2020/04/joshua-tree-national-park-hikes-1150x606.jpg",
			"description": "Joshua Tree National Park is a Photographers dream! A variety of terrains, weird trees and towering mountains.",
			"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
			{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
			{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
			{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
			{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
			]
		}

	],

	"snow": [{
		"title": "YOSEMITE NATIONAL PARK",
		"price": "$10",
		"location": "CALIFORNIA",
		"image": "https://www.nps.gov/yose/planyourvisit/images/halfdome-snow-960web.jpg",
		"description": "It would have been difficult to over look this beast! Yosemite National Park is the ultimate wilderness, punctuated with waterfalls and lush plains!",
		"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
		{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
		{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
		{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
		{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
		]

	},
	{
		"title": "TELLURIDE/MONTROSE",
		"price": "$15",
		"location": "COLORADO",
		"image": "https://img3.onthesnow.com/image/la/49/palmyra_high_camp_492968.jpg",
		"description": "With the highest peaks in Colorado, the Telluride/Montrose region is an epic winter camping destination.",
		"popularspots": [{ "name": "Cape Perpetua Scenic Area", "desc": "Take in the view from the Cape Perpetua Day Use Area and Overlook. This is the highest viewpoint on the Oregon Coast accessible by car. Then stop by Cape Perpetua Visitor Center (open daily) to explore exhibits and catch free ranger-led programs, activities and presentations. The scenic area offers forest and beach hikes, tide pools, beachcombing, historical sites, camping and picnic areas." },
		{ "name": "Oregon Dunes National Recreation Area", "desc": "Explore one of the largest expanses of temperate coastal sand dunes in the world. It is a beautiful and mysterious ecosystem where dunes, forests and ocean come together. There is something for everyone, including birding, sandboarding, surfing, hiking, camping, picnicking, off-road driving, beachcombing, sand play, and paddling." },
		{ "name": "Marys Peak", "desc": "Marys Peak is the highest point in Oregon’s Coast Range mountains. From the summit on a clear day, view both the Pacific Ocean to the west and Cascade mountain peaks to the east! In spring, meadows are full of wildflowers. The area offers hiking, biking, camping and picnic areas throughout the surrounding meadows, forests, and viewpoints." },
		{ "name": "Sand Lake Recreation Area", "desc": "The Sand Lake Recreation Area is located along Oregon's North Coast, 15 miles southwest of Tillamook between Cape Lookout and Cape Kiwanda. Sandwiched between the Sand Lake Estuary and Cape Lookout State Park, Sand Lake Recreation Area covers 1,076 acres of steep bowls, expansive sand flats, and ocean beaches. The Sand Lake Recreation Area offers a variety of recreational opportunities and is especially popular with OHV riders." },
		{ "name": "Cascade Head Scenic Research Area", "desc": "This spectacular coastal headland was designated as the nation’s first Scenic-Research Area in 1974. It provides critical habitat for native grasses, rare wildflowers and the Oregon silverspot butterfly. The designation provides present and future generations with the use and enjoyment of ocean headlands, rivers, streams, estuaries, and forested areas, and insures the protection and encourages the study of significant areas for research and scientific purposes." }
		]
	}

	],

	"tents": [{
		"title": "Coleman Sundome Tent",
		"price": "$59",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://images-na.ssl-images-amazon.com/images/I/71mI0K5qSmL._AC_SX425_.jpg",
		"description": "The whole gang can sleep comfortably in the Coleman 10'x10' Sundome Tent. Measuring a full 6 feet high at the center, the tent sleeps five people comfortably with plenty of room to move around. Coleman's exclusive WeatherTec system is packed with features to keep you and your tent dry, whatever the weather. The durable tub floor has welded corners and inverted seams, making it waterproof to keep moisture out.",
		"features": [{ "tag": "size", "desc": " 5'X7'X40" }, { "tag": " color", "desc": " orange" }, { "tag": "fit", "desc": " 5 person" }]

	},
	{
		"title": "Coleman Montana Tent",
		"price": "$75",
		"ratings": { "votes": "20", "star": "4" },
		"image": "https://www.rei.com/media/9da98f68-f085-458c-8416-02ac3c517071?size=784x588",
		"description": "Set up a home base with some extra sleeping space with the Coleman Montana 8-Person Tent. An extended door awning creates a dry space to store gear and enter the tent. If it rains, the included rainfly and the WeatherTec system with its patented welded floors and inverted seams will help you stay dry. ",
		"features": [{ "tag": "size", "desc": "15'X17'X40" }, { "tag": "color", "desc": "grey" }, { "tag": "fit", "desc": "8 person" }]
	}

	],


	"lights": [{
		"title": "Etekcity Camping Lantern",
		"price": "$20",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://i5.walmartimages.com/asr/47965e5e-38c1-410a-b03d-476148324610_1.0181b3c381a1a20b1ca8e285b5d40ce9.jpeg",
		"description": "Unlike other heavy lanterns, this one is characterized by its small size and lightweight which enables it to fit easily into a backpack or a first-aid packet. So it won't burden you",
		"features": [{ "tag": "light", "desc": "LED" }, { "tag": "color", "desc": "gold" }, { "tag": "power", "desc": "battery" }]

	},
	{
		"title": "Vont Camping Lantern",
		"price": "$17",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://cdn.shopify.com/s/files/1/1766/8367/products/camping-light-portable-lanterns-11310177124410_1024x1024@2x.png?v=1564973287",
		"description": "Equipped with 30 crazy bright LEDs, this compact lantern cuts through 360 degrees of darkness on the stormiest, dimmest nights. Easily lights up the entire tent or room. Battery life lasts over 90 hours - that is 3x longer than other lanterns in the market.",
		"features": [{ "tag": "light", "desc": "LED" }, { "tag": "color", "desc": "black" }, { "tag": "power", "desc": "battery" }]
	}


	],

	"sleepinggear": [{
		"title": "VENTURE 4TH Backpacking",
		"price": "$30",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://i5.walmartimages.com/asr/395a30e5-0192-4996-9b77-3b6886a98a66_1.62d6d379d7c7a296abbad6f0ee11094c.jpeg",
		"description": "The Sleeping Bag from VENTURE 4TH is made with 210T waterproof polyester, as a 3-season sleeping bag, It is designed to keep you comfortable on even the toughest expeditions as it offers plenty of room in the shoulders while hugging the body for the perfect night's rest.",
		"features": [{ "tag": "size", "desc": "single" }, { "tag": "color", "desc": "blue" }, { "tag": "material", "desc": "Polyester" }]

	},
	{
		"title": "Coleman Brazos Sleeping Bag",
		"price": "$48",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://images-na.ssl-images-amazon.com/images/I/51bINsny1EL._AC_SY550_.jpg",
		"description": "Stay warm and cozy on cold nights under the stars in temperatures as low as 20°F when you add the Coleman Cold-Weather 20°F Brazos Sleeping Bag to your camping gear.",
		"features": [{ "tag": "size", "desc": "double" }, { "tag": "color", "desc": "blue" }, { "tag": "material", "desc": "Polyester" }]
	}


	],

	"packsandbags": [{
		"title": "Venture Pal Lightweight Backpack",
		"price": "$20",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F02%2Fventure-pal-40l-lightweight-packable-waterproof-travel-hiking-backpack-daypack.jpg",
		"description": "This Venture Pal Backpack is made with high quality tear and water resistant material, provides extra strength and long-lasting performance with the lightest weight possible. The extra strength provided by the double-layer bottom piece makes it very convenient to carry more load on your journeys.",
		"features": [{ "tag": "color", "desc": "orange" }, { "tag": "capacity", "desc": "50L" }]

	},
	{
		"title": "TETON Sports Scout 3400 Backpack",
		"price": "$66",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://tetonsports.com/wp-content/uploads/2019/02/pack_121_HERO_01.jpg",
		"description": "Built for whatever you throw at it, the Scout3400 Internal Frame Backpack, by TETON Sports is thoughtfully designed with your comfort in mind. Padded back panel is channeled for air flow and padded shoulder straps are adjustable for your size and load.",
		"features": [{ "tag": "color", "desc": "green" }, { "tag": "capacity", "desc": "40L" }]
	}

	],

	"foodprocessing": [{
		"title": "WIFI SmokePro SG Pellet Grill",
		"price": "$80",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://cdn.shopify.com/s/files/1/0052/7918/7015/products/woods-portable-propane-camping-stove-with-2-burners_2048x2048@2x.jpg?v=1583859201",
		"description": "The new age of grilling is here and your back patio will never be the same. The ever-loved SmokePro SG pellet grill featuring Slide and Grill Technology is now WIFI enabled.",
		"features": [{ "tag": "weight", "desc": "5 pounds" }, { "tag": "color", "desc": "green" }, { "tag": "power", "desc": "gas" }]

	},
	{
		"title": "Coleman Portable Butane Stove",
		"price": "$30",
		"ratings": { "votes": "20", "star": "5" },
		"image": "https://www.rei.com/media/product/142133",
		"description": "On-the-go cooking just got a little easier with the Coleman Portable Butane Stove with Carrying Case. With an ultra-portable design and included carry case, this stove is ready for any camping adventure and quickly sets up on any outdoor tabletop, supporting up to a 10-inch pan.",
		"features": [{ "tag": "weight", "desc": "5 pounds" }, { "tag": "color", "desc": "yellow" }, { "tag": "power", "desc": "gas" }]
	}

	]
}

describe("NavBar tests", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><Navbar data={data} /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});