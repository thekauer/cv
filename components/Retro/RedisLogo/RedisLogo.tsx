import { useInView } from "react-hook-inview";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const RedisLogo = () => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Fade triggerOnce>
        <Image src="/static/redis_animated.svg" width={200} height={200} />
      </Fade>
    </div>
  );
};
