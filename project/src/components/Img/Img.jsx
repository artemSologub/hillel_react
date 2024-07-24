const Img = ({ imgSrc = '', className='' }) => {

  return (
    <img src={imgSrc} class={className} />
  );
}

export default Img;