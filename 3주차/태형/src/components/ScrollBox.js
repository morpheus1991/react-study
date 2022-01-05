import React, { Component } from 'react';

// const ScrollBox = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };


class ScrollBox extends Component {

    scrollTopBottom = () => {
        const {scrollHeight, clientHeight } = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;
    }


    render(){
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relarive'
        };
        
        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white,black)'
        }
        

        return(
        <div style={style} ref={ ( ref ) => { this.box=ref } }>
            <div style={ innerStyle } />
        
        </div>
        )
    }
}


export default ScrollBox;