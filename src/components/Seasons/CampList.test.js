import React from "react";
import CampList from "./CampList.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

const camp =
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
}
    ;

describe("CampList tests", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><CampList camp={camp}/></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});