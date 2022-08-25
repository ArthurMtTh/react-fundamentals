const conditional = (props) => {

    /* a filter of 'props.children' is made receiving a 'child' 
    whose name is 'Else' and returning only the first position*/
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    /* receive all elements and return just the element that's not the elseChild ('Else')*/
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren

    } else if (elseChild) {
        return elseChild

    } else {
        return false
    }
} 
export default conditional;

export const Else = props => props.children 