export default function AnswerBtn({ handleClick, content, classNames }) {
    return(
      <button className={classNames.join(" ")} onClick={handleClick}>
        {content}
      </button>
    )
};