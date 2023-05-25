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
          height: calc(100vh - 4.5rem);
           {
            /* background: #eee; */
          }
          display: flex;
          align-items: center;
        }

        img {
          filter: saturate(0);
          object-fit: cover;
          width: 100%;
        }

        .icon {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          animation: move-down 1s infinite;
        }

        @keyframes move-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(1rem);
          }
        }

      `}</style>
      <Container>
        <header>
          <HeaderBg />
          <div>
            <Andressa />
            <Description />
          </div>
          <div>
            <img src="/sketch-1.png" alt="" draggable="false" />
          </div>
          <div className="icon">
            <FiChevronDown size={24}/>
          </div>
        </header>
      </Container>
    </>
  );
};
