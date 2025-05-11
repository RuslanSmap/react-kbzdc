import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    if (props.collapsed === true) {
        return <AccordionTiltle title={props.titleValue}/>
    } else {
        return (
            <div>
                <AccordionTiltle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}

type AccordionTiltlePropsType = {
    title: string
}

function AccordionTiltle(props: AccordionTiltlePropsType) {
    console.log('AccordionTiltle rendering')
    return (
        <h3> --- {props.title} ---</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;