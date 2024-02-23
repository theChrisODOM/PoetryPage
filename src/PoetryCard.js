
export const PoetryCard = ( { date, poetry } ) => {
    
    return (
        <div className="PoetryCard">
            <span className="PoetryDate">
                <b>
                    {date}: 
                </b>
            </span>
            <span className="PoetryText">
                <i>
                    {poetry}
                </i>
            </span>
        </div>
    )
}

export default PoetryCard;