export default function Board()
{
    return(
        <>
            <div className="board">
                <BoardRow offset={0}/>
                <BoardRow offset={3}/>
                <BoardRow offset={6}/>
            </div>
        </>
    );
}


function Square({val}) {
    return <button className="square">{val}</button>;
}

function BoardRow({offset}){
    return(
        <>
        <div className="board-row">
            <Square val= {offset+1}/>
            <Square val= {offset+2}/>
            <Square val= {offset+3}/>
        </div>
        </>
    );
}
