import React from "react";

class ContactPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {emailHasError : false,
                    showSpinner : false,
                    isChecked: false,
                    isCheckedNDA: false,
                    file:null,
                    selectedOption: 'gold'
                  }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this);
      this.toggleCheck = this.toggleCheck.bind(this);
      this.toggleCheckNDA = this.toggleCheckNDA.bind(this);
      this.onFileChange = this.onFileChange.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    toggleCheck() {
      this.setState({isChecked: !this.state.isChecked});
      
    }

    toggleCheckNDA() {
      this.setState({isCheckedNDA: !this.state.isCheckedNDA});
      
    }
  
  
    handleChange(e){
      this.setState({[e.target.name]: e.target.value});   
      
      // if (this.state.email !== undefined && this.props.emailHasError) {
      //   this.setState({emailHasError: false});  
      // }
      
    }

    onFileChange(e) {
      console.log(e.target.files[0])
      this.setState({file:e.target.files[0]})
    }

    handleOptionChange(e) {
      this.setState({
        selectedOption: e.target.value
      });
    }
   
  
    handleSubmit(e){   
      console.log(this.state.emailHasError)
      e.preventDefault(); 
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
      if (this.state.number === undefined || this.state.number.length == 0) {
        this.setState({number: ''});
        //flag = true;
      }
      if (this.state.message === undefined || this.state.message.length == 0) {
        this.setState({message: ''});
        //flag = true;
      }
  
      if(flag){
        return;
      }
      
      var data = {
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        number: this.state.number,
        message: this.state.message,
        file: this.state.file
      };     

      if(this.props.showPackage){
        data.package = this.state.selectedOption
      };

      console.log(data);
      this.sendMail(e, data);
     
    };

    handleSubmit2(e){   
      e.preventDefault(); 
      let flag = false;
      if (this.state.name === undefined || this.state.name.length == 0) {
        this.setState({name: ''});
        flag = true;
      }
      if (this.state.position === undefined || this.state.position.length == 0) {
        this.setState({position: ''});
        flag = true;
      }      
      if (this.state.email === undefined || this.state.email.length == 0) {
        this.setState({email: ''});      
        flag = true;
      }
      if (this.state.number === undefined || this.state.number.length == 0) {
        this.setState({number: ''});
        flag = true;
      }
      if (this.state.file === undefined || this.state.file == null) {      
        flag = true;
      }
      if (this.state.linkedin === undefined || this.state.linkedin.length == 0) {
        this.setState({linkedin: ''});
        //flag = true;
      }
      if (this.state.website === undefined || this.state.website.length == 0) {
        this.setState({website: ''});
        //flag = true;
      }
  
      if(flag){
        return;
      }
      
      var data = {
        name: this.state.name,
        company: this.state.position,
        email: this.state.email,
        number: this.state.number,
        linkedin: this.state.linkedin,
        website: this.state.website,
        file: this.state.file
      }; 

      console.log(data);
      this.sendMail(e, data);
     
    };

    sendMail(e, data) {
      console.log(data);
      this.props.spinnerHandler(); 
      return fetch('http://159.89.105.56:8000/contact', {
          method: 'POST',
          mode: 'CORS',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res => {
        if (res.status == 200) {
          navigateTo('aboutus');
        } else {
          this.setState({emailHasError: true});
          this.props.spinnerHandler();
        }
          return res;
      }).catch(err =>  {

      });
    }


    render() {
          return (
        
        <article className="contact__panel">
        {this.props.contactType == '1' && (
        <form action="" className="contact__form" onSubmit={this.handleSubmit}>
                <div className={this.state.name === undefined || this.state.name.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
                  <input maxLength="40" type="text" id="name" name="name" onChange={this.handleChange} placeholder="Full name *"/>
                  <span className="contact__input-underline"></span>
                </div>
                <div className={this.state.company === undefined || this.state.company.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
                  <input maxLength="40" type="text" id="company" name="company" onChange={this.handleChange} placeholder="Company name *"/>
                  <span className="contact__input-underline"></span>
                </div>
              <div className={this.state.email === undefined || this.state.email.length > 0 && !this.state.emailHasError ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
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
                <div className="upload-btn-wrapper">
                  <label className="btn btn--tertiary btn--wide inverted" htmlFor="upload">
                    Upload a file
                  </label>
                  <input id="upload" type="file" onChange={this.onFileChange} />
                </div>
              </div>
              {this.props.showPackage && (<div><div className="contact__package-text">Pick your package</div>
                                            <div className="contact__package">
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice1" type="radio" name="package" value="gold" checked={this.state.selectedOption === 'gold'} onChange={this.handleOptionChange} />
                                                <label htmlFor="packageChoice1"></label>
                                                <div className="checkbox-full__text radio">Gold</div>
                                              </div>
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice2" type="radio" name="package" value="silver" checked={this.state.selectedOption === 'silver'} onChange={this.handleOptionChange} />
                                                <label htmlFor="packageChoice2"></label>
                                                <div className="checkbox-full__text radio">Silver</div>
                                              </div>
                                              <div className="checkbox-full radio">
                                                <input id="packageChoice3" type="radio" name="package" value="platinum" checked={this.state.selectedOption === 'platinum'} onChange={this.handleOptionChange} />
                                                <label htmlFor="packageChoice3"></label>
                                                <div className="checkbox-full__text radio">Platinum</div>
                                              </div>
                                            </div>
                                          </div>)}
              <div className="contact__button-row">
              <button className="btn btn--primary btn--wide inverted" type="submit">
                  Send request
              </button>
              </div>
            </form> 
          )}
          {this.props.contactType == '2' && (
            <form action="" className="contact__form" onSubmit={this.handleSubmit2}>
            <div className={this.state.name === undefined || this.state.name.length > 0 ? 'contact__input-wrapper' : 'contact__input-wrapper contact__input-wrapper--error'}>
               <input maxLength="40" type="text" id="name" name="name" onChange={this.handleChange} placeholder="Full name *"/>
               <span className="contact__input-underline"></span>
            </div>
            <div className={this.state.email === undefined || this.state.email.length > 0  && !this.state.emailHasError ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
              <input maxLength="50" type="text" id="email" name="email"  onChange={this.handleChange} placeholder="E-mail adress *"/>
              <span className="contact__input-underline"></span>
            </div>
            <div className={this.state.number === undefined || this.state.number.length > 0  ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
              <input maxLength="20" type="text" id="number" name="number" onChange={this.handleChange} placeholder="Phone number *"/>
              <span className="contact__input-underline"></span>
            </div>
            <div className={this.state.position === undefined || this.state.position.length > 0  ? 'contact__input-wrapper ' : 'contact__input-wrapper contact__input-wrapper--error'}>
              <input maxLength="50" type="text" id="position" name="position" onChange={this.handleChange} placeholder="What position are you applying for? *"/>
              <span className="contact__input-underline"></span>
            </div>
            <div className='contact__input-wrapper'>
              <input maxLength="50" type="text" id="linkedin" name="linkedin" onChange={this.handleChange} placeholder="LinkedIn profile"/>
              <span className="contact__input-underline"></span>
              <div className="contact__input-remark">e.g. https://www.linkedin.com/in/jana-doe</div>
            </div>
            <div className='contact__input-wrapper'>
              <input maxLength="50" type="text" id="website" name="website" onChange={this.handleChange} placeholder="Website"/>
              <span className="contact__input-underline"></span>
            </div>

            <div className='contact__full-wrapper'>
              <div className="upload-btn-wrapper">
                <label htmlFor="upload" className="btn btn--tertiary btn--wide inverted">
                  Upload a CV *
                </label>
                <input id="upload" type="file" onChange={this.onFileChange} />
              </div>
            </div>
            <div className="contact__button-row">
            <button className="btn btn--primary btn--wide inverted" type="submit" >
                Apply
            </button>
            </div>
          </form> 
          )}
        </article>     
        )
      }
  }

  export default ContactPanel;