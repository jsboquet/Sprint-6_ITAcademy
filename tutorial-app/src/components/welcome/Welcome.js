function Welcome(props) {
  return (
    <>
      <h1>Benvingut!</h1>
      <p>En aquest ràpid tutorial aprendràs molt.</p>
      <p>
        Com que de moment no tenim el contingut, et pots entretenir amb el
        nostre gran heroi.
      </p>
      <p>{props.children}</p>
    </>
  );
}

export default Welcome;
