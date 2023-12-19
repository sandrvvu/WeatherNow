const Loading: React.FC = () => {
  return (
    <div className="loading__container">
      <div className="loading__icon">
        <span className="loader"></span>
      </div>
      <div className="loading__text">
        <h1>Checking the skies...</h1>
      </div>
    </div>
  );
};

export default Loading;
