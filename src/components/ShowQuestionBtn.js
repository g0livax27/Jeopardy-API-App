export default function ShowQuestionBtn({ handleClick, content, classNames }) {
    return(
      <button className={classNames.join(" ")} onClick={handleClick}>
        {content}
      </button>
    )
};