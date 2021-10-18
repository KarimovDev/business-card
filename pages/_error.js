function Error({ statusCode }) {
  return (
    <p
      style={{
        color: "#ffffff",
        marginTop: 40,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#00000077",
        padding: 40
      }}
    >
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
