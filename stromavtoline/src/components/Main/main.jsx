import './main.css'

export default function Main() {
    const mainTest = 20;
    const arraiTest = [];
    for (let i = 0; i < mainTest; i++) {
        arraiTest.push(<div className='mainBlockTest'>Test Block {i+1}</div>)
    }
    console.log(arraiTest)
    return (
        <>
         <section>
            {arraiTest.map(function(item){return item})}
         </section>
        </>
    )
}