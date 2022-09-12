class Buttons extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="buttons" id="btn">
                <button className="clearall" onClick={this.props.clearbtn} id="clear">AC</button>
                <button className="operatorbtn" onClick={this.props.dividebtn} id="divide">/</button>
                <button className="operatorbtn" onClick={this.props.multibtn} id="multiply">x</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="seven" value="7">7</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="eight" value="8">8</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="nine" value="9">9</button>
                <button className="operatorbtn" onClick={this.props.subtractbtn} id="subtract">-</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="four" value="4">4</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="five" value="5">5</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="six" value="6">6</button>
                <button className="operatorbtn" onClick={this.props.addbtn} id="add">+</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="one" value="1">1</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="two" value="2">2</button>
                <button className="numberbtn" onClick={this.props.numberbtn} id="three" value="3">3</button>
                <button className="equalbtn" onClick={this.props.equalbtn} id="equals">=</button>
                <button className="numberbtn zeronumbtn" onClick={this.props.numberbtn} id="zero" value="0">0</button>
                <button className="decimalbtn" onClick={this.props.decimalbtn} id="decimal">.</button>
                
            </div>
        );
    }
}



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayinputvalue: "",
            displayoutputvalue: "0",
            result: "0",

        };
        this.handleClear=this.handleClear.bind(this);
        this.handleNumber=this.handleNumber.bind(this);
        this.handleDivide=this.handleDivide.bind(this);
        this.handleMulti=this.handleMulti.bind(this);
        this.handleSubtract=this.handleSubtract.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleDecimal=this.handleDecimal.bind(this);
        this.handleEqual=this.handleEqual.bind(this);
        this.updateDisplay=this.updateDisplay.bind(this);
        
    };
    
    updateDisplay(above,below) {
        this.setState({
            displayinputvalue: above,
            displayoutputvalue: below,
            })       
    };

    handleClear(){
        this.updateDisplay("","0");       
    };

    handleNumber(event){
        if(/[=]/.test(this.state.displayinputvalue)){this.updateDisplay("","0");} 
        if(/[0]$/.test(this.state.displayinputvalue)){return;}    
        let outvalue="";
        let invalue="";        
        if(this.state.displayoutputvalue==0 && this.state.displayinputvalue==""){outvalue=event.target.value;}
        else if(/[/x+-]/.test(this.state.displayoutputvalue)){outvalue=event.target.value;}        
        else{outvalue=this.state.displayoutputvalue.concat(event.target.value)};

        if(event.target.value==="0" && this.state.displayoutputvalue==="0" ){
            outvalue="0";
            if(/[0]$/.test(this.state.displayinputvalue)){invalue=this.state.displayinputvalue;}
            else{invalue=this.state.displayinputvalue.concat("0");}
            }
        else {invalue=this.state.displayinputvalue.concat(event.target.value);}
        this.updateDisplay(invalue,outvalue);
    };

    handleDivide(){
        let invalue; 
        if(/[/x+-]/.test(this.state.displayoutputvalue)){return};
        if(this.state.displayinputvalue==""){return};        

        if(/[=]/.test(this.state.displayinputvalue)){
            invalue=this.state.result.concat(" / ");
            this.updateDisplay(invalue,"/");
        }else{
            invalue=this.state.displayinputvalue.concat(" / ");
            this.updateDisplay(invalue,"/");
        }
    };

    handleMulti(){
        let invalue; 
        if(/[/x+-]/.test(this.state.displayoutputvalue)){return}
        if(this.state.displayinputvalue==""){return};
        
        if(/[=]/.test(this.state.displayinputvalue)){
            invalue=this.state.result.concat(" * ");
            this.updateDisplay(invalue,"x");
        }else{
            invalue=this.state.displayinputvalue.concat(" * ");
            this.updateDisplay(invalue,"x");
        }
    };

    handleSubtract(){
        let invalue; 
        if(/[/x+-]-/.test(this.state.displayoutputvalue)){return}
        if(this.state.displayinputvalue==""){return};
        
        if(/[=]/.test(this.state.displayinputvalue)){
            invalue=this.state.result.concat(" - ");
            this.updateDisplay(invalue,"-");
        }else{
            invalue=this.state.displayinputvalue.concat(" - ");
            this.updateDisplay(invalue,"-");
        }
    };

    handleAdd(){
        let invalue;  
        if(/[/x+-]/.test(this.state.displayoutputvalue)){return}
        if(this.state.displayinputvalue==""){return};
        
        if(/[=]/.test(this.state.displayinputvalue)){
            invalue=this.state.result.concat(" + ");
            this.updateDisplay(invalue,"+");
        }else{
            invalue=this.state.displayinputvalue.concat(" + ");
            this.updateDisplay(invalue,"+");
        }
    };

    handleDecimal(){
        if(/[=]/.test(this.state.displayinputvalue)){this.updateDisplay("","0");} 
        let outvalue="";
        if(this.state.displayoutputvalue==0 && this.state.displayinputvalue==""){outvalue=".";}
        else if(/[/x+-]/.test(this.state.displayoutputvalue)){outvalue=".";}
        else if(this.state.displayoutputvalue.includes(".")){return}
        else{outvalue=this.state.displayoutputvalue.concat(".")};
        let invalue=this.state.displayinputvalue.concat(".");
        this.updateDisplay(invalue,outvalue);
    };

    handleEqual(){        
        if(this.state.displayoutputvalue==0 && this.state.displayinputvalue==""){return}
        if(/[/x+-]/.test(this.state.displayoutputvalue)){return}
        let computevalue=eval(this.state.displayinputvalue);
        let invalue=this.state.displayinputvalue.concat(" = ",computevalue);
        this.updateDisplay(invalue,computevalue);
        this.setState({result:computevalue.toString(),});
        
    };

    render(){
        let displayinputvalue=this.state.displayinputvalue;
        let displayoutputvalue=this.state.displayoutputvalue;
        return(
            <div className="calapp">
              <div className="outdisplay" >
                    <div className="input">{displayinputvalue}</div>
                    <div id="display" className="output">{displayoutputvalue}</div>
               </div>                
               <Buttons clearbtn={this.handleClear} dividebtn={this.handleDivide} 
                multibtn={this.handleMulti}  numberbtn={this.handleNumber}
                subtractbtn={this.handleSubtract}  addbtn={this.handleAdd}
                decimalbtn={this.handleDecimal}  equalbtn={this.handleEqual}
                />
              
            </div>             
        )
    }
};



const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<App />);

