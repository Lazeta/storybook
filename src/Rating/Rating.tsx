type RatingValueType = ['0', '1', '2', '3']

type RatingPropsType = {
    rating: (value: RatingValueType) => void
    value: RatingValueType
    onClick: (value: RatingPropsType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.rating} value={props.value}/>}
            <Star selected={props.value > 1} onClick={props.rating} value={props.value}/>}
            <Star selected={props.value > 2} onClick={props.rating} value={props.value}/>}
            <Star selected={props.value > 3} onClick={props.rating} value={props.value}/>}
            <Star selected={props.value > 4} onClick={props.rating} value={props.value}/>}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}