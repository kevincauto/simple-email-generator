import React from 'react';

export default class CCEDLiveWebinar extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
      }

      render(){
          return (
            <div className="form">
            <h3> CCED Live Webinar Recruitment</h3>
            <img src="https://www.dentalaegis.com/media/63967/" width="300"/>
            <div className="label">
              {/* The name attribute should match the state.selected_template property */}
              Tagline Header: &nbsp;
            <select
              name="tagline"
               value={this.props.info[this.props.info.selected_template].tagline}
              onChange={this.handleTextChange}
            >
            <option value="">No Tagline Header</option>
            <option value="Don’t Forget – You’re Registered for Tomorrow's Webinar!">CCED Live Webinar Tomorrow</option>
            <option value="Don’t Forget – You’re Registered for Tonight's Webinar!">CCED Live Webinar in Two Hours</option>
            </select>
            </div>
            <div className="label">
              Title: &nbsp;
              <input
                type="text"
                name="title"
                value={this.props.info[this.props.info.selected_template].title}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Date and Time: &nbsp;
              <input
                type="text"
                name="date"
                placeholder="OCTOBER 19, 2017 @ 7PM ET..."
                value={this.props.info[this.props.info.selected_template].volume}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Link: &nbsp;
              <input
                type="text"
                name="link"
                value={this.props.info[this.props.info.selected_template].link}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Desciption: &nbsp;
              <input
                type="text"
                name="description"
                value={this.props.info[this.props.info.selected_template].description}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 1: &nbsp;
              <input
                type="text"
                name="lo1"
                value={this.props.info[this.props.info.selected_template].lo1}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 2: &nbsp;
              <input
                type="text"
                name="lo2"
                value={this.props.info[this.props.info.selected_template].lo2}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 3: &nbsp;
              <input
                type="text"
                name="lo3"
                value={this.props.info[this.props.info.selected_template].lo3}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Headshot Link: &nbsp;
              <input
                type="text"
                name="headshot"
                value={this.props.info[this.props.info.selected_template].headshot}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Presenter's Name: &nbsp;
              <input
                type="text"
                name="presenter"
                value={this.props.info[this.props.info.selected_template].presenter}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Provider: &nbsp;
              <input
                type="text"
                name="provider"
                value={this.props.info[this.props.info.selected_template].provider}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Commercial Supporter: &nbsp;
              <input
                type="text"
                name="supporter"
                value={this.props.info[this.props.info.selected_template].supporter}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Cost: &nbsp;
              <input
                type="text"
                name="cost"
                value={this.props.info[this.props.info.selected_template].cost}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              CDE Credits: &nbsp;
              <input
                type="text"
                name="credits"
                value={this.props.info[this.props.info.selected_template].credits}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              TV Link: &nbsp;
              <input
                type="text"
                name="tvLink"
                placeholder="This can be blank"
                value={this.props.info[this.props.info.selected_template].tvLink}
                onChange={this.handleTextChange}
              
              />
            </div> 

          </div>
          )
      }
}


