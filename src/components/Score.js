export default function Score({ content }) {
    return(
      <div
        className="score"
        style={content >= 0 ? { color: "black" } : { color: "red" }}
      >
        {content}
      </div>
    )
};