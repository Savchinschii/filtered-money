import {Button} from "./Button";
import React from "react";
import {FilterType, MoneyType} from "../App";

export type NewComponentProps = {
    onClickFilterHandler: (nameButton: FilterType)=> void
    currentMoney:Array<MoneyType>
}

export const NewComponent = (props: NewComponentProps) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((obj,index) => {
                    return (
                        <li key={index}>
                            <span>{obj.banknots} </span>
                            <span>{obj.value}</span>
                            <span>{obj.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'All'} callBack={()=>props.onClickFilterHandler('all')}/>
                <Button name={'RUBLS'} callBack={()=>props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callBack={()=>props.onClickFilterHandler('Dollars')}/>
            </div>
        </div>
    )
}