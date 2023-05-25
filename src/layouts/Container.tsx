import { ReactElement } from "react";

export const Container = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
      <div className="container">{children}</div>
    </>
  );
};
