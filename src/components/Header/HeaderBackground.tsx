export const HeaderBg = () => {
    return (
        <>
            <style jsx>{`
                .header-bg {
                    position: absolute;
                    inset: 0;
                }

                .header-bg::before, .header-bg::after {
                    content: "";
                    position: absolute;
                    width: 300px;
                    aspect-ratio: 1;
                    background: var(--green-transparent);
                    border-radius: 50%;
                    z-index: -1;
                    filter: blur(40px);
                }

                .header-bg::before {
                    top: 20%;
                    left: 0%;
                }

                .header-bg::after {
                    top: 40%;
                    left: 30%;
                }
            `}</style>
            <div className="header-bg">
            </div>
        </>
    );
}