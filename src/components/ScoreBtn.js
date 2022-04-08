export default function ScoreBtn({ handleClick, content, classNames }) {
    return(
      <button className={classNames.join(" ")} onClick={handleClick}>
        {content}
      </button>
    )
};