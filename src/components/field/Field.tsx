"use client";

import Block from "../block/Block"

interface FieldType{
    rowNumber: number;
    columnNumber: number;
}

export default function Field({rowNumber, columnNumber}: FieldType){
    return(
        <div>
            <Block></Block>
        </div>
    );
}