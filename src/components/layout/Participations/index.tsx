export const Participations = () => {
  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          gap: 2rem;
          justify-content: center;
          padding-bottom: 2rem;
        }

        img {
          height: 50px;
          filter: opacity(40%);
          transition: filter 0.2s ease-in-out;
        }

        img:hover {
          filter: unset;
        }

        figcaption {
          text-align: center;
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .round {
          border-radius: 50%;
        }
      `}</style>

      <div>
        <figure>
          <a href="https://querodobra.com.br/colab/ama/" target="_blank">
            <img src="/about/dobra.jpeg" alt="dobra" className="round" />
          </a>
          <figcaption>Dobra</figcaption>
        </figure>

        <figure>
          <a href="https://stock.adobe.com/br/contributor/209235905/Andressa%20Araujo" target="_blank">
            <img src="/about/adobe-stock.jpeg" alt="adobe stock" />
          </a>
          <figcaption>Adobe</figcaption>
        </figure>

        <figure>
          <a href="https://www.instagram.com/gioia_ateliededoces/" target="_blank">
            <img src="/about/gioia.jpeg" alt="gioia" className="round" />
          </a>
          <figcaption>Gioia</figcaption>
        </figure>

        <figure>
          <a href="https://nossoolharsolidario.com.br/" target="_blank">
            <img
              src="/about/nos.jpeg"
              alt="nós - nosso olhar solidário"
              className="round"
            />
          </a>
          <figcaption>Nós</figcaption>
        </figure>
      </div>
    </>
  );
};
