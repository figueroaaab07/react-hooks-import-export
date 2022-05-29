import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  RMFunctions.wildlife();
  console.log(RMFunctions.trees);
  RMFunctions.elevation();

  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;