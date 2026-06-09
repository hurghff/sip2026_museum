<style scoped>
.descrip {
  font-family: 'Ronzino';
  font-size: 20px;   
  padding: 30px; 
  white-space: normal;
  overflow-wrap: break-word;
  color: white;
  
}

.descrip2 {
  font-family: 'Ronzino';
  font-size: 20px;   
  padding: 30px; 
  white-space: normal;
  overflow-wrap: break-word;
  color: white;
}

.descrip, .descrip2{
  flex: 1;
  width: auto;      
  max-width: none;
  font-family: 'Ronzino';
  font-size: 20px;
  color: white;
}

.slide,
.slide2 {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;
  height: 100%;
}

.slide img, .slide img{
  width: 350px;
  height: 250px;
  object-fit: cover;
  flex-shrink: 0;
}

.car{
  height: 100%;
  justify-content: flex-end;
  width: 100%;
  background-color: rgb(79, 22, 16);
  margin: 0px auto;
  border-style: grooved;
  border-width: 5px;
  border-color: yellow;
}
</style>

<template>
  <v-container fluid>
    <div class=car>
      <v-carousel>
        <v-carousel-item>
          <div class="slide">
            <img src="/src/assets/specimens/eagle.jpg">
            <p class="descrip"> The Philippine Eagle, also known as the <i>Pithecophaga jefferyi</i>, is the national bird of the Philippines. 
              <!--It is considered one of the rarest and largest aerial predators on earth. -->
              Even more, their wings can stretch up to several feet, and these birds can only be found in four 
              locations: Luzon, Samar, Leyte, and Mindanao. The Philippine Eagle is also a monogamous creature; 
              consequently, it mates for life. More importantly, the Philippine eagles are classified as an 
              endangered species; according to the Philippine Eagle Foundation, fewer than 400 pairs remain 
              in the wild due to poaching and deforestation. </p>
          </div>
        </v-carousel-item>
          <v-carousel-item>
            <div class="slide2">
              <img src="https://images.reeflifesurvey.com/0/species_24_5726e3c615ac1.w1000.h666.jpg" width="350px" height = "250px">
              <p class="descrip2"> The Epinephelus maculatus, otherwise known as the highfin grouper, belongs to the 
              Serranidae family. In other parts of the Philippines, it is called Lapu-lapu, Inid, and 
              Pugapo. Additionally, this marine creature can typically be found in coral reefs, coral 
              rubble, isolated coral, and seaward reefs in the Indo-Pacific between 2 meters and 100 
              meters deep. The creature tends to grow to a length between 50 meters and 60 meters. 
              More importantly, the organism is a highly valued fish in markets; it is known to have a 
              nice texture and rich flavor. Consequently, the demand for the creature is high.</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>  
  </v-container>
</template>