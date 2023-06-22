import s from "./style.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "@/layouts/Container";
import { Description } from "./Description";
import { Andressa } from "./Andressa";
import { HeaderBg } from "./HeaderBackground";
import { motion } from "framer-motion"

export const Header = () => {
  return (
    <>
      
      <Container>
        <header className={s.header}>
          <div>
            <img src="/sketch-1.png" alt="" draggable="false" />
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: -200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={s.name}
          >
            <Andressa />
            <Description />
          </motion.div>
          <HeaderBg />
          <div className={s.icon}>
            <FiChevronDown size={24}/>
          </div>
        </header>
      </Container>
    </>
  );
};
