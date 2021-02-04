import React, { Component } from 'react';


class Exercise extends Component {
    state = {
        arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130],
        Sno: 0,
        Step: 0,
        clr:false

    }
    updateSno({ target }) {
        console.log(target.value);
        this.setState({ Sno:parseInt(target.value) })
        this.updateBox(parseInt(target.value),this.state.Step);
        
    }

    updateBox(Sno,Step) {
        console.log(Sno);
        console.log(Step);
        var sum = Sno;
        var temp = this.state.arr.map((element) => {
            var temp = sum;
            sum=Step+sum
            return temp;
        })
        // temp[0] = Sno;

        this.setState({
            arr:temp
        })
        
    }
    updateStep({ target }) {
        console.log(target.value)
        this.setState({ Step: parseInt(target.value)})
        this.updateBox(this.state.Sno,parseInt(target.value));
        
    }
    changeClr() {
        this.setState({ clr: true });
    }

    render() {
        return (

            <>
                <div className="section">
                    <h2>Section</h2>
                </div>
                <div className="main">
                    <h3 className="inline" >Selected Teams : Delhi</h3>
                    <form className="sec-block">
                        Starting Number :
                    <input className="right" type="number" name="starting number" onChange={this.updateSno.bind(this)}></input>
                    Step : <input className="right" type="number" name="step" onChange={this.updateStep.bind(this)}></input>
                    </form>
                </div>
                <div>
                    {this.state.arr.map((element) => { 
                        if (this.state.clr) {
                            return (<input type="text" style={{ backgroundColor: "lightblue" }} placeholder={element}></input>)
                        } else {
                            return ( <input type="text"  placeholder={element} onClick={this.changeClr.bind(this)}></input>)
                            
                        }
                        
                    } )
                    }
                </div>
            </>
        );
        
    }
    

};
export default Exercise;