import { useEffect, useState } from "react"

import { Coord } from "types"

export const useGeolocation = () => {
  const [coord, setCoord] = useState<Coord>();

  const onSuccessGetPosition = async (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    await setCoord({ lat: lat, lon: lon });
  };

  const onErrorGetPosition = async () => {
    // 都庁所在地
    const lat = 35.68966414887361;
    const lon = 139.69210148192565;

    await setCoord({ lat: lat, lon: lon });
  };

  useEffect(() => {
    (async () => {
      if (!navigator.geolocation) {
        await onErrorGetPosition();
      } else {
        await navigator.geolocation.getCurrentPosition(
          onSuccessGetPosition,
          onErrorGetPosition
        );
      }
    })();
  }, []);

  return {
    coord
  }
}