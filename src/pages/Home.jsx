import React from "react";
import BikeCard from "../components/BikeCard";

const bikes = [
  ["Royal Enfield", 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/emerald/01.png', "Classic 350", "Cruiser", "1,93,080"],
  ["Royal Enfield", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYUr7OG2CcFqH1g00LwrHg3FpI_klVc6rCNFuZzpRBA&s", "Hunter 350", "Roadster", "1,74,655"],
  ["Royal Enfield", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzbw1qRj4Wn29oByv3zOCdG6lZKIYeIMVvg72USJ3gg&s=10", "Bullet 350", "Cruiser", "1,93,080"],
  ["Royal Enfield", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMUKibXer3h8iPas5gbBu5m4kccDaOpd54qaKbDvyWA&s", "Meteor 350", "Cruiser", "2,05,900"],
  ["Yamaha", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8t_j7oZZFPETbGi5RNGK-mHIeZg57s8yRSkYAQdj8w&s", "MT-15 V2", "Sports", "1,69,550"],
  ["Yamaha", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxEa_9zsvhdGwu2BqHRmue40qKZ_DtxgayBEutC4qhA&s=10", "R15 V4", "Sports", "1,74,850"],
  ["Yamaha", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjc4068Pif_0ETgKM7WbKfJBgijkYp8XADrEpGo_asw&s=10", "FZ-S FI", "Street", "1,30,880"],
  ["KTM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlss6HSTUhLpXeUxLkhTo_an3VDF2cDURI7m7q2w4zaA&s=10", "Duke 390", "Sports", "2,97,000"],
  ["KTM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-1_P2Pj0V8pTu3xo3IH266QBf_tRGRbbgFwSAYQ5Iw&s=10", "RC 390", "Sports", "3,19,000"],
  ["KTM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5x3IRZuea-sYDYm9aeviio3fMCNW81p-4i_eITbSlQ&s=10", "390 Adventure", "Adventure", "3,28,000"],
  ["Bajaj", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MSDwmG3W5J7tOam99UH9xnDpWVRYcz9Kvdl4gQ7o_A&s=10", "Pulsar NS200", "Sports", "1,59,000"],
  ["Bajaj", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXURoPeG1lnV_tzvQ5A8NwaGTRmVsXnRoODSm7BmdfCQ&s", "Dominar 400", "Touring", "2,32,000"],
  ["TVS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMZpPnPwonEIquUMa5U_AsicynepyOHpgz9q2PKMm7Q&s", "Apache RTR 200", "Sports", "1,48,000"],
  ["TVS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXvXmzxYRh80bI-2uh8_GM9vqOp8PPKxGCDwxwaL_Gw&s=10", "Raider 125", "Street", "85,000"],
  ["Honda", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKS7XjfV1UBOe3ARLYi73tOAkYdJppi7WcwbVukF4rsA&s=10", "Hornet 2.0", "Street", "1,45,000"]
];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">EXPLORE • RIDE • EXPERIENCE</p>

        <h1>Bike Collection</h1>

        <p className="hero-text">
          Discover our collection of popular motorcycles.
        </p>
      </section>

      <section className="bike-container">
        {bikes.map((bike, index) => (
          <BikeCard
            key={index}
            brand={bike[0]}
            image={bike[1]}
            model={bike[2]}
            type={bike[3]}
            price={bike[4]}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;