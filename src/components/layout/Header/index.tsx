import { FiChevronDown } from "react-icons/fi";
import { Container } from "@/layouts/Container";
import { Description } from "./Description";
import { Andressa } from "./Andressa";
import { HeaderBg } from "./HeaderBackground";

export const Header = () => {
  return (
    <>
      <style jsx>{`
        header {
          position: relative;
          height: calc(100vh - 3rem);
        }

        .header-title {
          position: absolute;
          top: calc(50% - 200px);
          left: 0;
        }

        .header-image {
          position: absolute;
          top: calc(50% - 200px);
          right: 0;
        }

        img {
          filter: saturate(0);
          object-fit: cover;
          width: 100%;
        }

        .icon {
          position: absolute;
          bottom: 1rem;
          left: calc(50% - 12px);
          animation: move-down 1s infinite;
        }

        @keyframes move-down {
          0%, 100% { transform: translateY(-20px) }
          50% { transform: translateY(1rem) }
        }

      `}</style>
      <Container>
        <header>
          <div className="header-image">
            <img height={400} src="/sketch-1.png" alt="" draggable="false" />
          </div>
          <HeaderBg />
          <div className="header-title">
            <Andressa />
            <Description />
          </div>
          <div className="icon">
            <FiChevronDown size={24}/>
          </div>
        </header>
      </Container>
    </>
  );
};
