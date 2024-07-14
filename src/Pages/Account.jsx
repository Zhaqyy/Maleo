import '@iframe-resizer/child'

const Account = () => {
  return (
    <section style={{ position: "relative" }}>
      <iframe
        data-tally-src="https://tally.so/r/meaqAe?transparentBackground=1"
        width="100%"
        height="100%"
        title="Création d'article"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: 0,
        }}
      ></iframe>
    </section>
  );
};

export default Account;
