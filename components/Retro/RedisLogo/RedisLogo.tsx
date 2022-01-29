import { useInView } from "react-hook-inview";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const RedisLogo = () => {
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Fade triggerOnce>
        <Image src="/static/redis_animated.svg" width={150} height={150} />
      </Fade>
    </div>
  );
};
