import { makeDOMwithProperties } from "../utils/dom.js"

let boxDOMList = [];
let wallBoxDOMList = [];
let startBoxDOM = null;
let endBoxDOM = null;

const gameFieldDOM = document.getElementById('game-field');

export const setBoxDOM = (
    row,
    col,
    start,
    end,
    walls,
) => {
    const controlBoxContainer =  makeDOMwithProperties('div', {
        id: 'control-box-container',
    });

    controlBoxContainer.style.display = 'gird';
    controlBoxContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    controlBoxContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){

            const { type, className, innerHTML = '' } = (function () {
                if( i === start[0] && j === start[1] ) { // 시작 위치
                    return {
                        type : 'start',
                        className : 'control-box start',
                        innerHTML : '시작',
                    };
                }

                if( i === end[0] && j === end[1] ) { // 종료 위치
                    return {
                        type : 'end',
                        className : 'control-box end',
                        innerHTML : '끝',
                    };
                }

                for(let wall of walls){ 
                    if (i === wall[0] && j === wall(1)){ // 벽의 위치
                        return {
                            type: 'wall',
                            className: 'control-box wall',
                        }
                    }
                }
                return {
                    type: 'normal',
                    className: 'control-box',
                }

            }());

            switch(type){
                case 'start':
                    startBoxDOM = boxDOM;
                    break;
                case 'end':
                    endBoxDOM = boxDOM;
                    break;
                case 'wall':
                    wallBoxDOMList.push(boxDOM);
                    break;
                default:
                    boxDOMList.push(boxDOM);
            }

            const boxDOM = makeDOMwithProperties('div', {
                className: 'control-box',
                innerHTML,
                id: `box-${i}-${j}`,
            });

            controlBoxContainer.appendChild(boxDOM);
        }
    }
    gameFieldDOM.appendChild(controlBoxContainer);
};