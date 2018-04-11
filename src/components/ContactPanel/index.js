import React from "react";

class ContactPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {emailHasError : this.props.emailHasError,
                    showSpinner : false,
                    isChecked: false,
                    isCheckedNDA: false
                  }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggleCheck = this.toggleCheck.bind(this);
      this.toggleCheckNDA = this.toggleCheckNDA.bind(this);
    }

    toggleCheck() {
      this.setState({isChecked: !this.state.isChecked});
      
    }

    toggleCheckNDA() {
      this.setState({isCheckedNDA: !this.state.isCheckedNDA});
      
    }
  
  
    handleChange(e){
      this.setState({[e.target.name]: e.target.value});   
      
      if (this.state.email !== undefined && this.props.emailHasError != '') {
        this.setState({emailHasError: ''});  
      }
      
    }
   
  
    handleSubmit(e){   
      e.preventDefault();  console.log(this.state.isChecked)
      let flag = false;
      if (this.state.name === undefined || this.state.name.length == 0) {
        this.setState({name: ''});
        flag = true;
      }
      if (this.state.company === undefined || this.state.company.length == 0) {
        this.setState({company: ''});
        flag = true;
      }      
      if (this.state.email === undefined || this.state.email.length == 0) {
        this.setState({email: ''});      
        flag = true;
      }
      if (this.state.subject === undefined || this.state.subject.length == 0) {
        this.setState({subject: ''});
        flag = true;
      }
      if (this.state.message === undefined || this.state.message.length == 0) {
        this.setState({message: ''});
        flag = true;
      }
  
      if(flag){
        return;
      }
      
      var data = {
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        number: this.state.number,
        message: this.state.message
      };     
      
      this.props.sendMail.bind(data);
     
    };
    render() {
          return (
        <article className="contact__panel">
        <form action="" className="contact__form" onSubmit={this.handleSubmit}>
                <div className={this.state.name === undefined || this.state.name.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
                  <input maxLength="40" type="text" id="name" name="name" onChange={this.handleChange} placeholder="Full name *"/>
                  <span className="contact__input-underline"></span>
                </div>
                <div className={this.state.company === undefined || this.state.company.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
                  <input maxLength="40" type="text" id="company" name="company" onChange={this.handleChange} placeholder="Company name *"/>
                  <span className="contact__input-underline"></span>
                </div>
              <div className={this.state.email === undefined || this.state.email.length > 0  ? 'contact__input-wrapper ' + this.state.emailError : 'contact__input-wrapper contact__input-wrapper--error'}>
                  <input maxLength="50" type="text" id="email" name="email"  onChange={this.handleChange} placeholder="E-mail adress *"/>
                  <span className="contact__input-underline"></span>
                </div>
              <div className='contact__input-wrapper'>
                <input maxLength="20" type="text" id="number" name="number" onChange={this.handleChange} placeholder="Phone number"/>
                <span className="contact__input-underline"></span>
                </div>
                <div className="checkbox-full checkbox-full--width">
                  <input id="check" type="checkbox" checked={this.state.isChecked}/>
                  <label htmlFor="check" onClick={this.toggleCheck}></label>
                  <div className="checkbox-full__text">I want to describe my product</div>
                </div>
              <div className={this.state.isChecked ? 'contact__full-wrapper' : 'contact__full-wrapper contact__full-wrapper--invisible'}>
                <textarea placeholder="You can write your idea here.." maxLength="2500" rows="8" cols="50" id="message" name="message" onChange={this.handleChange}/>
              </div>
              <div className="checkbox-full checkbox-full--width">
                  <input id="checkNDA" type="checkbox" checked={this.state.isCheckedNDA}/>
                  <label htmlFor="checkNDA" onClick={this.toggleCheckNDA}></label>
                  <div className="checkbox-full__text">I want to attach an NDA</div>
                </div>
              <div className={this.state.isCheckedNDA ? 'contact__full-wrapper' : 'contact__full-wrapper contact__full-wrapper--invisible'}>
                <button className="btn btn--tertiary btn--wide inverted">
                  Upload a file
                </button>
              </div>
              {this.props.showPackage && (<div><div className="contact__package-text">Pick your package</div>
                                            <div className="contact__package">
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice1" type="radio" name="package" value="gold"/>
                                                <label htmlFor="packageChoice1"></label>
                                                <div className="checkbox-full__text radio">Gold</div>
                                              </div>
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice2" type="radio" name="package" value="silver"/>
                                                <label htmlFor="packageChoice2"></label>
                                                <div className="checkbox-full__text radio">Silver</div>
                                              </div>
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice3" type="radio" name="package" value="platinum"/>
                                                <label htmlFor="packageChoice3"></label>
                                                <div className="checkbox-full__text radio">Platinum</div>
                                              </div>
                                            </div>
                                          </div>)}
              <div className="contact__button-row">
              <button className="btn btn--primary btn--wide inverted" type="submit" >
                  Send request
              </button>
              </div>
            </form> 
            </article>           
        )
      }
  }

  export default ContactPanel;