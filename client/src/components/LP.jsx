export default function LP({
    artist = "",
    title = "",
    releaseDate = ""
}) {
    return (
        <div className="lp-item">
            <h3 className="lp-item-artist">{artist}</h3>
            <h4 className="lp-item-title">{title}</h4>
            <p className="lp-item-release">{releaseDate}</p>
        </div>
    )
}