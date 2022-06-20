import add, { mul, sub, div } from './Simplecalc';

function Calc() {
    return (<>
        <li>two value sum : <span>{add(10,15)}</span></li>
        <li>two value sub : <span>{sub(10,15)}</span></li>
        <li>two value div : <span>{div(100,15)}</span></li>
        <li>two value mul : <span>{mul(10,15)}</span></li>
    </>
    );
}
export default Calc;