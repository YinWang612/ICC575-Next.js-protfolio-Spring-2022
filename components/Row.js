import styles from './row.module.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Row = ({children,alignItems}) =>{
let rowClasses=cx({
    row:true,
    [`align-items-${alignItems}`]:alignItems
})

    return <div className={rowClasses}>{children}</div>
}
export default Row