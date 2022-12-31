import React, { useState } from 'react';
import Square from './Square';

function Board () {

    let [ScreenValue,setScreenValue]=useState("0"); 
    let [flag,setFlag]=useState(0);
    
    let display=(num)=>{
        if(num==="="){
            try{
                setScreenValue(eval(ScreenValue).toString());
            }
            catch{
                alert("Undefined");
                setScreenValue("0");
                setFlag(0);
            }
        }
        else if (num==="Clr")
        {
            setScreenValue("0");
            setFlag(0);
        }
        else if(num==="Del")
        {
            if (ScreenValue.length === 1){
                setScreenValue("0")
                setFlag(0);
            }
            else{
                setScreenValue(ScreenValue.slice(0,ScreenValue.length-1));
            }
        }
        else
        {
            if (flag===0){
                if(num==="+" || num==="-" || num==="*" || num==="/" || num === "%" || num==="0"){
                    alert("Enter First Character as a Number");
                }
                else{
                    setScreenValue(num);
                    setFlag(1);
                }
            }
            else{
                setScreenValue(ScreenValue+num);
            }
            
        }
    }

    let CalcArr=[{value:"Clr",id:"Clr"},{value:"Del",id:"Del"},{value:"%",id:"symbol"},{value:"/",id:"symbol"},{value:"9",id:9},{value:"8",id:8},{value:"7",id:7},{value:"*",id:"symbol"},{value:"6",id:6},{value:"5",id:5},{value:"4",id:4},{value:"-",id:"symbol"},{value:"3",id:3},{value:"2",id:2},{value:"1",id:1},{value:"+",id:"symbol"},{value:".",id:"symbol"},{value:"0",id:0},{value:"=",id:"equal"}];
    

        return (
            <div className='Board'>
                <div >
                    <input className='Screen' id={ScreenValue.length>=20?"XSmallFont":""+ScreenValue.length>=13?"SmallFont":""+ScreenValue==="0"? "Zero":""} type="text" value={ScreenValue} />
                </div>
                <div className='CalcNum'>
                    {CalcArr.map((arr)=>
                        <Square class={arr.id} id={arr.id} clickHandler={display} value={arr.value}/>
                    )}
                </div>
            </div>
        );
    }

 
export default Board;