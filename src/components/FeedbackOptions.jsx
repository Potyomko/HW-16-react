import { Button } from "./FeedbacksItem/Button";
export const FeedbackOptions = ({change, useGood, useNeutral, useBad}) => {
    return <>
    <ul>
                <Button
                    type='Good'
                handlerAddFeedback={change}
                use={useGood}
                />
                <Button
                    type='Neutral'
                handlerAddFeedback={change}
                use={useNeutral}
                />
                <Button
                    type='Bad'
                handlerAddFeedback={change}
                use={useBad}
                />
        </ul>
    </>
}